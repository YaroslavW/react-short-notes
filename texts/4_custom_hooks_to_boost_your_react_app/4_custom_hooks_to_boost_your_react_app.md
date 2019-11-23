# 4 пользовательских хука для ускорения вашего приложения React

![logo Users-Hooks](img/logo-users-hooks.jpg)

Спустя 9 месяцев после выхода первой стабильной версии React Hooks изменили способ, которым разработчики веб-интерфейса пишут компоненты React. Это нормальный шаг в процессе эволюции библиотек, таких как эта. Внедрение новых функций решает, какие библиотеки и фреймворки выживут в непрерывной гонке внешнего интерфейса. React уже был признанной библиотекой интерфейса, но с введением React Hooks он сделал большой шаг вперед.

## Зачем нужны React Hooks?
Они помогают разработчикам контролировать побочные эффекты для наших функциональных компонентов без необходимости использования подхода класса и методов жизненного цикла, таких как `componentDidMount`, `componentDidUpdate` и т. д. Кроме того, они позволяют разработчикам обмениваться логикой между компонентами, уменьшая дублирование кода и человеческие ошибки.

React имеет встроенные хуки, которые обеспечивают функциональность вокруг процесса управления компонентами, но наиболее удивительной особенностью является возможность комбинировать их для создания пользовательских хуков и возможность взаимодействия хуков с API браузера.

Существует множество библиотек, которые предоставляют настраиваемые хуки, и некоторые из них могут обрабатывать функциональность, которую мы создаем здесь, и в лучшем виде. Однако всегда приятно видеть, что происходит за сценой функций, которые вы уже используете каждый день! Давайте напишем наши пользовательские крючки!

## `usePrefetch`
Хук `usePrefetch` может помочь вам улучшить время загрузки главной страницы приложения, лениво загружая другие вторичные компоненты, которые не нужно отображать при первом просмотре. Цель состоит в том, чтобы уменьшить размер пакета и ускорить реагирование вашего приложения.

Для нашего примера, давайте предположим, что у нас есть страница с некоторой информацией и кнопка, которая открывает модальное окно. Прежде чем мы нажмем кнопку, модал не должен рендериться, и он нам пока не нужен. Но если мы импортируем его в начале основного компонента, нам потребуется больше времени для загрузки его кода JavaScript, поскольку он будет включен в исходный пакет. То, что мы хотим сделать, это лениво загрузить модальный компонент, чтобы отделить его код от основного компонента и предварительно извлечь его, когда основной компонент рендерится в первый раз.

```js
// usePrefetch hook
function usePrefetch(factory) {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    factory()
    const comp = lazy(factory)
    setComponent(comp)
  }, [factory])

  return component;
}

const importModal = () => import('./Modal');

// Usage into a main component
function App(props) {
  const [isShown, setIsShown] = useState(false)
  const Modal = usePrefetch(importModal)

  return (
    <div>
      <h1>This is part of the first build</h1>
      <button onClick={() => setIsShown(true)}>Show Modal</button>
      <Suspense fallback={<h1>Waitinf for...</h1>}>
        {isShown && <Modal />}
      </Suspense>
    </div>
  ); 
}
```

>Почему мы определяем функцию `importModal`? 

>Потому что, если мы напишем импорт `inline`, это будет происходить каждый раз, когда вызывается новая функция, и он будет запускать `useEffect` внутри хуков при каждом рендеринге.


## `useGeo`
Этот хук получает текущую позицию и обновленное значение всякий раз, когда пользователь перемещает курсор:

```js
// =============>>> useGeo <<<=========
function useGeo(opts) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [geo, setGeo] = useState({})
  let isLoad = true
  let id;

  function onSuccess (event) {
    if (isLoad) {
      setIsLoading(false)
      setGeo(event.coords)
    }
  }

  function onFailure (error) {
    if (isLoad) {
      setIsLoading(false)
      setError(error)
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure, opts);
    id = navigator.geolocation.watchPosition(onSuccess, onFailure, opts);
    return () => {
      isLoad = false;
      navigator.geolocation.clearWatch(id);
    };
  }, [opts])

  return {geo, isLoading, error}
}

// usage of useGeo
function App(props) {
  const {geo, isLoading, error} = useGeo()

  return !isLoading && !error ? (
    <div>
      <h2>Lat: {geo.latitude}</h2>
      <h2>Lng: {geo.longitude}</h2>
    </div>
  ) : null;
}
```
> Почему мы определяем переменную `isLoad`? 

>Поскольку получение позиции является асинхронной операцией, возможно, что ваш компонент повторно выполнит рендеринг. Таким образом, мы запускаем функцию очистки, прежде чем она эффективно извлекает местоположение. С помощью этого обходного пути мы можем предотвратить запуск обработчиков `onSuccess` или `onFailure`, если компонент был отключен слишком рано.


## useInterval
Эффект useInterval, вероятно, является наиболее известным пользовательским хуком React, но здесь я покажу его реализацию Дэном Абрамовым, поскольку мы будем использовать его для следующего хука:

```js
// ===========>>> setInterval <<<===========
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if(delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);  
}
// Usage of useInterval
function Counter() {
  let [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>
}
```
Более подробно об этом хуке читайте мой перевод статьи Дэна Абрамова - 
[Делаем setInterval декларативным с помощью React Hooks](https://github.com/YaroslavW/react-short-notes/blob/master/texts/Hooks-setInterval/hooks-setInterval.md)


## `useTimer`