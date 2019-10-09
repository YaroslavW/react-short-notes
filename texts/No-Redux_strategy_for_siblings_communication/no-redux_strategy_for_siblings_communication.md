# Коммуникация между сестринскими компонентами в React без использования Redux.

![Logo](img/logo.jpg)

Redux - это здорово, но мы также должны знать основы, прежде чем использовать какой-либо фреймворк или библиотеку, верно? Это то, что я делал до того, как начал изучать начальную загрузку и делал то же самое с Redux и ReactJ. Итак, эта статья посвящена созданию базового канала связи между братьями и сестрами с использованием только ReactJ.

Давайте обсудим требования. Мое приложение имеет дочерний компонент, который должен взаимодействовать со своим одноуровневым компонентом. Так что это должно происходить через Parent-component (родительский компонент) с методом Callback от parent-родителя до child1, который получит значение из child1 и передаст его другому потомку как `props`.
Просто, не правда ли?

## Поток данных.

![Data communication flow](img/react-no-redux-1.jpg)
<small><center>Поток передачи данных</center></small>

Поток
Требование: Child1 имеет поле ввода, при вводе этого значения необходимо отправить его компоненту child2 через Parent.

## Parent Component - Родительский компонент.

Сначала определите функцию обратного вызова - **Callback function** в `Parent` и отправьте ее как реквизиты - `props` для `Child1`.

```javascript
constructor(){
  super();
  this.state= {
    data : ""
  }
}
formChild1(params) {
  this.setState({
    data : params
  })
}
```

Я установил переменную состояния `state` данных -`data` и обновил ее значение, используя функцию обратного вызова `fromChild1` и отправив значение состояния `Child2`.

_Зачем использовать `state`? Потому что реквизиты -`props` являются неизменными, и всегда лучше передать состояние в качестве `props`. И если вы хотите передать статические данные, всегда используйте `props`. Используйте состояние - `state` для передачи динамических данных._

```javascript
render() {
  return(
    <div>
      <p>Parent</p>
    <Child callback={this.formChild1.bind(this)} />
    <Child2 data={this.state.data} />
    </div>
  );
}
```

## Child-1.

Установите `prop-types`, потому что `React.PropTypes` устарел, и React предлагает вам использовать `prop-types`. [Узнать больше](https://reactjs.org/docs/typechecking-with-proptypes.html "Typechecking With PropTypes")

```javascript
npm install prop-types
```

### Импортировать prop-types в child1.

```javascript
import PropTypes from "prop-types";
```

определить дочерний компонент

```javascript
class Child1 extends Component {
  getContent(event) {
    this.props.callback(event.target.value);
  }
  render() {
    return (
      <div>
        <p>Child One</p>
        <input
          type="text"
          onChange={this.getContent.bind(this)}
          placeholder="Type Something in Child One"
        />
      </div>
    );
  }
}
```

`getContent` получает входное значение `onChange` и отправляет его родителю через функцию обратного вызова.

Определите prop-types для Child1:

```javascript
Child1.protoTypes = {
  callback: PropTypes.func
};
```

Мы проверяем тип функции обратного вызова.

## Child-2.
Определите простой компонент, который отображает тег `<p>` со значением `props`, отправленным ему из `parent`.

```javascript
class Child2 extends Component {
  render() {
      return(
          <p>Child2 : {this.props.data}</p>
      );
  }
}
```
Это оно. Теперь мы установили канал связи между братьями и сестрами. И не забудьте экспортировать дочерние компоненты, если у вас есть отдельные файлы для `parent`, `child1` и `child2`.

Для справки [смотрите код](https://github.com/SarathSantoshDamaraju/reactComponentsTalk/tree/siblingToSibling)

И наконец,
Спасибо, что прочитали мой пост. Я хотел бы услышать ваши мысли в комментариях. Если вам понравилась статья, пожалуйста, нажмите 💚 ниже, чтобы больше людей могли ее прочитать.

Автор статьи [Krishna Damaraju](https://codeburst.io/no-redux-strategy-for-siblings-communication-3db543538959) 

Автор перевода [Yaroslav Kolesnikov](https://github.com/YaroslavW)
