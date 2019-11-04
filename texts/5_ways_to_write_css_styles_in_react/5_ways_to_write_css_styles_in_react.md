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
