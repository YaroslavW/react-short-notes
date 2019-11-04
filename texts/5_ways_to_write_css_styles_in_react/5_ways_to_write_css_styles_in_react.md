# 5 способов написания стилей CSS в React.js

В этом руководстве мы рассмотрим способы стилизации компонентов React. Мы покажем вам 5 разных способов, и вы решите, какой из них вы предпочитаете!

![logo-react-css](img/logo.jpg)

## Стиль вашего компонента.

Вот способы стилизации компонентов, которые мы обсудим:

- [Regular CSS](#Regular-CSS)

- [Inline Styling](#Inline-Styling)

- [CSS Modules](#CSS-Modules)

- [Preprocessors](#Preprocessors)

- [CSS in JS](#CSS-in-JS)

Мы собираемся заменить стили, приведенные ниже, используя разные способы стилизации компонентов.

```css
/* BeautifulButton.css */

.button {
  color: #494949;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 20px;
  font-size: 20px;
  border: 4px solid #494949;
  display: inline-block;
  transition: all 0.4s ease 0s;
}

.button:hover {
  color: #ffffff;
  background: #f6b93b;
  border-color: #f6b93b;
  transition: all 0.4s ease 0s;
}

.button--primary {
  color: #ffffff;
  text-transform: uppercase;
  text-decoration: none;
  background: #f6b93b;
  padding: 20px;
  font-size: 20px;
  border: 4px solid #f6b93b;
  display: inline-block;
  transition: all 0.4s ease 0s;
}

.button--primary:hover {
  color: #494949;
  background: #ffffff;
  border-color: #494949;
  transition: all 0.4s ease 0s;
}
```

---

## Regular CSS

Это самый простой и легкий способ добавления стилей в компонент React.

```js
import React from "react";
import "./BeautifulButton.css";

const MyBeautifulButton = props => {
  return (
    <div>
      <button className={props.primary ? "button--primary" : "button"}>
        Button
      </button>
    </div>
  );
};

export default MyBeautifulButton;
```

---

## Inline Styling

```js
import React from "react";

const MyBeautifulButton = props => {
  const button = {
    color: "#494949",
    textTransform: "uppercase",
    textDecoration: "none",
    background: "#ffffff",
    padding: "20px",
    fontSize: "20px",
    border: "4px solid #494949",
    display: "inline-block",
    transition: "all 0.4s ease 0s"
  };

  const primaryButton = {
    ...button,
    color: "#ffffff",
    background: "#f6b93b",
    borderColor: "#f6b93b"
  };

  return (
    <div>
      <button style={props.primary ? primaryButton : button}>Button</button>
    </div>
  );
};

export default MyBeautifulButton;
```

> **Примечание**: верблюжий стиль - `camel-case` необходим для работы встроенного стиля! Например, **borderColor**.

Inline-styling прост и работает из коробки, но имеет много ограничений.

Например, нет прямого способа добавить эффект наведения - `hover effect`.

> **Рекомендация**: используйте парадигму встроенного стиля только с небольшими простыми компонентами.

---

## CSS Modules

```js
import React from "react";

import styles from "./my-beautiful-button.module.css"; //должен иметь расширение .module.css.
// my-beautiful-button.module.css имеет те же стили, что и Button.css.

const MyBeautifulButton = props => {
  return (
    <div>
      <button
        className={props.primary ? styles["button--primary"] : styles.button}
      >
        Button
      </button>
    </div>
  );
};

export default MyBeautifulButton;
```

Все стили из модуля CSS попадают в область действия того компонента, который его импортировал. Это означает, что вам не нужно беспокоиться о глобальных конфликтах имен.

> **Примечание**: вы должны включить в расширение подмодель `.module`. В противном случае стили будут загружаться как обычный CSS, и у вас могут возникнуть конфликты имен.

---

## Preprocessors

Использование препроцессоров, таких как [SCSS](https://sass-lang.com/), [LESS](http://lesscss.org/) или [Stylus](http://stylus-lang.com/), просто в React.

Вам нужно добавить загрузчик препроцессора, а затем, как и обычный CSS, вы можете импортировать файлы.

```js
import React from "react";
import "./button.scss";
// <-- Как только у конфигов webpack есть нужный загрузчик, он должен работать как обычный scss.

const MyBeautifulButton = props => {
  return (
    <div>
      <button className={props.primary ? "button--primary" : "button"}>
        Button
      </button>
    </div>
  );
};

export default MyBeautifulButton;
```

---

## CSS in JS

CSS в JS - это шаблон, в котором вы определяете все свои стили внутри компонента. Как встроенный стиль, но гораздо более мощный.

Давайте посмотрим, как мы будем писать одинаковые стили кнопок, используя [Styled Components](https://www.styled-components.com/) и [Emotion](https://emotion.sh/).

### Styled Components

```js
import React from 'react';

import styled from 'styled-components';

const MyBeautifulButton = props => {
  const BeautifulButton = styled.button`
    color: #494949;
    text-transform: uppercase;
    text-decoration: none;
    background: #ffffff;
    padding: 20px;
    font-size: 20px;
    border: 4px solid #494949;
    display: inline-block;
    transition: all 0.4s ease 0s;
    &:hover {
      color: #ffffff;
      background: #f6b93b;
      border-color: #f6b93b;
      transition: all 0.4s ease 0s;
    }
  `;

  const BeautifulPrimaryButton = styled(Button)`
    color: #ffffff;
    background: #f6b93b;
    border-color: #f6b93b;
    &:hover {
      color: #494949;
      background: #ffffff;
      border-color: #494949;
    }
  `;

  return (
    <div>
      {props.primary ? (
        <BeautifulPrimaryButton>Button </BeautifulPrimaryButton>
      ) : (
        <BeautifulButton>Button</BeautifulButton>
      )}
    </div>
  );
};

export default MyBeautifulButton;
```

### Emotion

В Emotion есть два способа добавления стилей:  `css API` и `styled API`.

Вот пример того, как выглядит использование `css API`:

```javascript
//этот комментарий говорит babel преобразовывать jsx в вызовы функции с именем jsx вместо React.createElement
/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

const BeautifulButton = css`
  color: #494949;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 20px;
  font-size: 20px;
  border: 4px solid #494949;
  display: inline-block;
  transition: all 0.4s ease 0s;
  &:hover {
    color: #ffffff;
    background: #f6b93b;
    border-color: #f6b93b;
    transition: all 0.4s ease 0s;
  }
`;

const BeautifulPrimaryButton = css`
  ${Button};
  color: #ffffff;
  background: #f6b93b;
  border-color: #f6b93b;
  &:hover {
    color: #494949;
    background: #ffffff;
    border-color: #494949;
  }
`;

const MyBeautifulButton = props => {
  return (
    <div>
      <button css={props.primary ? BeautifulPrimaryButton : BeautifulButton}>Button</button>
    </div>
  );
};

export default MyBeautifulButton;
```

`styled API` в Emotion очень похож на `Styled Components`. Вот пример:

```js
// этот комментарий говорит babel преобразовывать jsx в вызовы функции с именем jsx вместо React.createElement
/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

import styled from '@emotion/styled';

const BeautifulButton = styled.button`
color: #494949;
text-transform: uppercase;
text-decoration: none;
background: #ffffff;
padding: 20px;
font-size: 20px;
border: 4px solid #494949;
display: inline-block;
transition: all 0.4s ease 0s;
&:hover {
  color: #ffffff;
  background: #f6b93b;
  border-color: #f6b93b;
  transition: all 0.4s ease 0s;
}
`

const BeautifulPrimaryButton = styled(BeautifulButton)`
color: #ffffff;
background: #f6b93b;
border-color: #f6b93b;
&:hover {
  color: #494949;
  background: #ffffff;
  border-color: #494949;
}
`

const MyBeautifulButton = (props) => {
  return (
    <div>
      {props.primary ? <BeautifulPrimaryButton>Button </BeautifulPrimaryButton> : <BeautifulButton>Button</BeautifulButton>}
    </div>
  );
};

export default MyBeautifulButton;
```

> **Примечание**: вы можете добавить плагин `babel`, чтобы избежать записи верхней строки необходимого файла.

```
/** @jsx jsx */
```

CSS в JS - это мощный паттерн. Это облегчает создание больших сложных веб-приложений.

Между  Styled Components  и  Emotion есть одно главное отличие.

Styled Component предлагает только стилизованный API - `styled API`. Но Emotion предлагает два способа добавления стилей: CSS - `css API` и `styled API`.

> Рекомендация: для больших приложений мы рекомендуем использовать Emotion.

Вот другие CSS в библиотеках JS, которые стоит проверить:

* [Radium](https://github.com/FormidableLabs/radium)

* [JSS](https://cssinjs.org/?v=v10.0.0)

* [Aphrodite](https://github.com/Khan/aphrodite)

Теперь вы сможете выбрать свои варианты, когда дело доходит до стилей компонентов! Какой из них вы предпочитаете?

---
Автор статьи [Ahmed Mansour](https://dev.to/ahmaman/5-ways-to-write-css-styles-in-react-3jo0?fbclid=IwAR3-6Yrzc3asTpnrQuIHQqD6yGo0kl1ZfeMrtIjU_HkN9U9bKVk9KuTAgYY)

Автор перевода Yaroslav Kolesnikov [YaroslavW](https://github.com/YaroslavW "gitHub")

Больше статей смотрите в моем блоге ["Простые советы"](http://abcinblog.blogspot.com/ "Простые советы - мой блог")