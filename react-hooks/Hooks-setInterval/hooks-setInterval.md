# Делаем setInterval декларативным с помощью React Hooks #

Если вы играли с [React Hooks](https://reactjs.org/docs/hooks-intro.html "React-docs") более нескольких часов, вы, вероятно, столкнулись с интригующей проблемой: использование setInterval [не работает](https://stackoverflow.com/questions/53024496/state-not-updating-when-using-react-state-hook-within-setinterval "StackOverflow - State not updating when using React state hook within setInterval") так, как вы ожидаете.

[По словам](https://mobile.twitter.com/ryanflorence/status/1088606583637061634 "Twitter - Ryan Florence") Ryan Florence:

>У меня было много людей, указывающих на setInterval с хукамии, как на яйце на лице React.

Честно говоря, я думаю, что у этих людей есть смысл. Сначала это сбивает с толку.

Но я также пришел к выводу, что это не недостаток хуков, а несоответствие между [моделью программирования React](https://overreacted.io/react-as-a-ui-runtime/ "Dan Abramov - React as a UI Runtime") и `setInterval`. Хуки, будучи ближе к модели программирования React, чем к классам, делают это несоответствие более заметным

**Есть способ заставить их работать вместе очень хорошо, но это немного не интуитивно понятно.**

В этом посте мы рассмотрим, как сделать интервалы и Hooks, и заставить из работать  вместе, почему это решение имеет смысл, и какие новые возможности оно может дать вам.

<hr>

**Отказ от ответственности: этот пост посвящен** ***патологическому случаю***. **Даже если API упрощает сотню вариантов использования, обсуждение всегда будет сосредоточено на том, что стало сложнее.**

Если вы новичок в Hooks и не понимаете, о чем идет речь, ознакомьтесь [с этим введением](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889 "Dan Abramov - Making Sense of React Hooks") и [документацией](https://reactjs.org/docs/hooks-intro.html "React-docs"). В этом посте предполагается, что вы работали с Hooks более часа.

<hr>

## Просто покажи мне код ##

Без лишних слов, вот счетчик, который увеличивается каждую секунду:

```javascript
import React, { useState, useEffect, useRef } from 'react';

function Counter() {
  let [count, setCount] = useState(0);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
}
```
Здесь [CodeSandbox demo.](https://codesandbox.io/s/105x531vkq "CodeSandbox").

Этот useInterval не является встроенным React Hook; это [custom Hook](https://reactjs.org/docs/hooks-custom.html), который я написал:

```javascript
import React, { useState, useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
```
Здесь [CodeSandbox demo.](https://codesandbox.io/s/105x531vkq "CodeSandbox").

**Мой `useInterval` Hook устанавливает интервал и очищает его после размонтирования.** Это комбинация `setInterval` и `clearInterval`, привязанная к жизненному циклу компонента.

Не стесняйтесь скопировать, вставить его в свой проект или поставить на npm.

**Если вам все равно, как это работает, вы можете перестать читать сейчас! Остальная часть поста в блоге предназначена для людей, которые готовы глубоко погрузиться в React Hooks.**

<hr/>

## Чего ждать?! ##

Я знаю, о чем вы думаете:

>Дэн, этот код не имеет никакого смысла. Что случилось с «Просто JavaScript»? Признайте, что Реакт перепрыгнул акулу с Hooks (Крючками)!

**Я тоже так думал, но передумал и собираюсь изменить свое мнение.** Прежде чем объяснить, почему этот код имеет смысл, я хочу показать, на что он способен.

<hr/>

## Почему `useInterval ()` - лучший API ##

Напомню, что мой `useInterval` Hook принимает функцию и задержку:

```javascript
  useInterval(() => {
    // ...
  }, 1000);
```
Это очень похоже на setInterval:

```javascript
  setInterval(() => {
    // ...
  }, 1000);
```
**Так почему бы просто не использовать setInterval напрямую?**

Поначалу это может быть неочевидно, но разница между известным вам `setInterval` и моим хаком `useInterval` заключается в том, что его **аргументы являются «динамическими»**.

Я проиллюстрирую это на конкретном примере.

Допустим, мы хотим, чтобы задержка интервала была регулируемой:

![react-counter](img/counter_delay-35e4f35a8585255b11c090aed9f72433.gif)

Несмотря на то, что вы не обязательно управляете задержкой с помощью ввода, динамическая настройка может быть полезной - например, реже запрашивать обновления AJAX, пока пользователь переключается на другую вкладку.

Итак, как бы вы сделали это с setInterval в классе? Я закончил с этим:

```javascript
class Counter extends React.Component {
  state = {
    count: 0,
    delay: 1000,
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, this.state.delay);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.delay !== this.state.delay) {
      clearInterval(this.interval);
      this.interval = setInterval(this.tick, this.state.delay);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleDelayChange = (e) => {
    this.setState({ delay: Number(e.target.value) });
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <input value={this.state.delay} onChange={this.handleDelayChange} />
      </>
    );
  }
}
```
Здесь [CodeSandbox demo.](https://codesandbox.io/s/mz20m600mp "CodeSandbox").

Это не так уж плохо!

Как выглядит версия Hook?

🥁🥁🥁
```javascript
function Counter() {
  let [count, setCount] = useState(0);
  let [delay, setDelay] = useState(1000);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, delay);

  function handleDelayChange(e) {
    setDelay(Number(e.target.value));
  }

  return (
    <>
      <h1>{count}</h1>
      <input value={delay} onChange={handleDelayChange} />
    </>
  );
}
```
Здесь [CodeSandbox demo.](https://codesandbox.io/s/329jy81rlm "CodeSandbox").

Да, это _все, что нужно_.

В отличие от версии класса, в «обновлении» примера ловушки `useInterval` отсутствует разрыв для получения динамически настраиваемой задержки:

```javascript
  // Constant delay
  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  // Adjustable delay
  useInterval(() => {
    setCount(count + 1);
  }, delay);
```
Когда `useInterval` Hook видит другую задержку, он снова устанавливает интервал.

**Вместо того чтобы писать код для установки и** ***очистки***  **интервала, я могу объявить интервал с определенной задержкой - и наш `useInterval` Hook делает это возможным.**

Что если я хочу _временно приостановить_ свой интервал? Я могу сделать это со state тоже:

```javascript
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(() => {
    setCount(count + 1);
  }, isRunning ? delay : null);
```
Здесь [CodeSandbox demo.](https://codesandbox.io/s/l240mp2pm7 "CodeSandbox").

Это то, что вдохновляет меня на Hooks и React снова и снова. Мы можем обернуть существующие императивные API и создать декларативные API, более близко выражающие наши намерения. Как и в случае с рендерингом, мы можем одновременно **описывать процесс во все моменты времени** вместо того, чтобы аккуратно выдавать команды для его манипулирования.

<hr/>

Я надеюсь, что благодаря этому вы продаете на `useInterval ()` Hook, который является более приятным API - по крайней мере, когда мы делаем это из компонента.

**Но почему использование `setInterval ()` и `clearInterval ()` раздражает хуки?** Давайте вернемся к нашему примеру и попробуем реализовать его вручную.

<hr/>

## Первая попытка ##

Я начну с простого примера, который просто отображает исходное состояние:

```javascript
function Counter() {
  const [count, setCount] = useState(0);
  return <h1>{count}</h1>;
}
```
Теперь я хочу интервал, который увеличивает его каждую секунду. Это [побочный эффект](https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup "React-docs Effects with Cleanup"), который [требует очистки](https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup "React-docs Effects with Cleanup"), поэтому я собираюсь использовать Effect () и вернуть функцию очистки:

```javascript
function Counter() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  });

  return <h1>{count}</h1>;
}
```
Здесь [CodeSandbox demo.](https://codesandbox.io/s/7wlxk1k87j "CodeSandbox").

Кажется достаточно просто? Этот вид работ.

**Однако, этот код имеет странное поведение.**

React по умолчанию повторно применяет эффекты после каждого рендера. Это сделано намеренно и помогает избежать [целого класса ошибок](https://reactjs.org/docs/hooks-effect.html#explanation-why-effects-run-on-each-update "React-docs Explanation: Why Effects Run on Each Update"), присутствующих в компонентах класса React.

Обычно это хорошо, потому что многие API-интерфейсы подписки могут удачно удалить старый и добавить новый прослушиватель в любое время. Однако `setInterval` не является одним из них. Когда мы запускаем `clearInterval` и `setInterval`, их сроки меняются. Если мы слишком часто перерисовываем и повторно применяем эффекты, интервал никогда не будет получен!

Мы можем увидеть ошибку, перерисовав наш компонент в _меньший_ интервал:

```javascript
setInterval(() => {
  // Re-renders and re-applies Counter's effects
  // which in turn causes it to clearInterval()
  // and setInterval() before that interval fires.
  ReactDOM.render(<Counter />, rootElement);
}, 100);
```
Здесь [CodeSandbox demo.](https://codesandbox.io/s/9j86r218y4 "CodeSandbox").

<hr/>

## Вторая попытка ##

Возможно, вы знаете, что `useEffect ()` позволяет нам [отказаться](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects "React-docs Tip: Optimizing Performance by Skipping Effects") от повторного применения эффектов. Вы можете указать массив зависимостей в качестве второго аргумента, и React повторно запустит эффект, только если что-то в этом массиве изменится:

```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```
Когда мы хотим запустить эффект только при монтировании и очистку при размонтировании, мы можем передать пустой `[]` массив зависимостей.

Однако это распространенный источник ошибок, если вы не очень хорошо знакомы с замыканиями JavaScript. Мы собираемся сделать эту ошибку прямо сейчас! (Мы также создаем правило для [lint rile](https://github.com/facebook/react/pull/14636 "Add eslint-plugin-react-hooks/exhaustive-deps rule to check stale closure dependencies") устранения ошибок на ранней стадии, но оно еще не совсем готово.)

В первой попытке наша проблема заключалась в том, что при повторном запуске эффектов таймер очищался слишком рано. Мы можем попытаться исправить это, никогда не повторяя их

```javascript
function Counter() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}
```
Однако теперь наш счетчик обновляется до 1 и остается там. Посмотреть  [баг в действии](https://codesandbox.io/s/jj0mk6y683 "CodeSandbox")

Что случилось?!

**Проблема заключается в том, что `useEffect` записывает `count` от первого рендера.** Он равен `0`. Мы никогда не применяем эффект повторно, поэтому замыкание в `setInterval` всегда ссылается на счет из первого рендера, а `count + 1` всегда равен `1`. Упс и приплыли!

**Я слышу, как твои зубы скрипят. Крючки так раздражают, верно?**

[Один из способов](https://codesandbox.io/s/j379jxrzjy "CodeSandbox") исправить это - заменить `setCount (count + 1)` на форму «обновления», такую как `setCount (c => c + 1)`. Он всегда может прочитать новое состояние для этой переменной. Но это не поможет вам, например, читать свежие реквизиты (`props`).

[Другое исправление](https://codesandbox.io/s/00o9o95jyv "CodeSandbox") заключается в использовании `useReducer ()`. Такой подход дает вам больше гибкости. Внутри редуктора у вас есть доступ как к текущему состоянию, так и к новым реквизитам. Сама функция `dispatch` никогда не меняется, поэтому вы можете закачивать в нее данные из любого замыкания. Одно из ограничений `useReducer ()` заключается в том, что вы пока не можете создавать побочные эффекты. (Однако вы можете вернуть новое состояние - вызывая некоторый эффект.)

**Но почему это становится настолько запутанным?**

<hr/>

## Несоответствие импеданса ##

Этот термин иногда используется, и [Phil Haack](https://haacked.com/archive/2004/06/15/impedance-mismatch.aspx/ "Haacked.com") объясняет это так:

>Можно сказать, что базы данных с Марса, а объекты с Венеры. Базы данных не отображаются естественным образом на объектные модели. Это похоже на попытку соединить северные полюса двух магнитов.

Наше «несоответствие импеданса» не между базами данных и объектами. Он находится между моделью программирования React и императивным `setInterval` API.

**Компонент React может быть смонтирован на некоторое время и проходить через множество различных состояний, но его результат рендеринга описывает их все сразу.**

```javascript
  // Describes every render
  return <h1>{count}</h1>
  ```
  Хуки позволяют нам применять тот же декларативный подход к эффектам:

  ```javascript
   // Describes every interval state
  useInterval(() => {
    setCount(count + 1);
  }, isRunning ? delay : null);
  ```
Мы не устанавливаем интервал, но указываем, установлен ли он и с какой задержкой. Наш Крюк делает это возможным. Непрерывный процесс описывается в дискретных терминах.

**Напротив, `setInterval` не описывает процесс во времени - как только вы установите интервал, вы ничего не сможете изменить, кроме как очистить его.**

Это несоответствие между моделью React и API `setInterval`.

<hr/>

Props и state компонентов React могут меняться. React выполнит повторную визуализацию и «забудет» все о предыдущем результате визуализации. Это становится неактуальным.

Хук `useEffect ()` также «забывает» предыдущий рендер. Он очищает последний эффект и устанавливает следующий эффект. Следующий эффект закрывается поверх свежего реквизита и состояния. Вот почему наша первая попытка сработала для простых случаев.

**Но `setInterval ()` не «забывает».** Он будет всегда ссылаться на старые реквизиты и состояние до тех пор, пока вы не замените их - что вы не сможете сделать без сброса времени.

Или ждать, а ты?

<hr/>
Refs to the Rescue!

Автор статьи [Dan Abramov](https://overreacted.io/making-setinterval-declarative-with-react-hooks/) Оригинал статьи доступен по ссылке.<br/> Автор перевода [Yaroslav Kolesnikov](https://github.com/YaroslavW)