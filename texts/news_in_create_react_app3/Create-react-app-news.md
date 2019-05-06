# Что нового в приложении Create React App 3 #
![React-logo](https://github.com/YaroslavW/react-short-notes/blob/master/texts/news_in_create_react_app3/img/cra3-logo.jpg "Logo CRA-3")

Выпущенное в конце апреля 2019 года приложение Create React App (CRA) 3 добавляет правила привязки к хукам и проектам TypeScript, а также другие улучшения и обновления версий для упрощения разработки приложений React.<br/>

В этой статье я расскажу о следующих новых функциях CRA 3:
- Jest 24.
- Поддержка правил хуков.
- Linting файлов TypeScript.
- `browserslist` конфигурация для разработки и продакшена.
- `baseUrl` в `jsconfig.json` / `tsconfig.json`.

Для получения полного списка всех функций (и некоторых критических изменений) ознакомьтесь с [журналом изменений](https://github.com/facebook/create-react-app/releases/tag/v3.0.0 "create-react-app v3.0.0") для этого выпуска.<br/>

## Jest 24 ##
CRA теперь включает в себя последнюю основную версию Jest (в частности, версию 24.7.1, на момент написания этой статьи).

По сравнению с предыдущей версией Jest 24 включает в себя следующие изменения:
- Встроенная поддержка транспиляции файлов TypeScript.
- Улучшенная отчетность об ошибках.
- Функция `test.todo` для печати задач отдельно от  теста (test summary).
- Переименовали `setupTestFrameworkScriptFile` в `setupFilesAfterEnv`, превратив его в массив.

Для получения дополнительной информации, вы можете проверить это [сообщение в блоге](https://jestjs.io/blog/2019/01/25/jest-24-refreshing-polished-typescript-friendly "Jest 24: Refreshing, Polished, TypeScript-friendly") или [журнал изменений](https://github.com/facebook/jest/blob/master/CHANGELOG.md "JEST CHANGELOG.md").<br/>

Если вы не используете Jest, то это среда модульного тестирования, которая работает в среде Node.js вместо браузера.<br/>

При выполнении теста - `npm test`, CRA будет использовать Jest для запуска тестов со следующими соглашениями об именах:
- Файлы с суффиксом `.js` в папках `__tests__`
- Файлы с суффиксом `.test.js`
- Файлы с суффиксом `.spec.js`
По умолчанию Jest запускает только тесты, относящиеся к файлам, измененным с момента последнего коммита, и запускается в режиме просмотра (каждый раз, когда вы сохраняете файл, он запускает тесты заново).<br/>

Чтобы избежать запуска тестов в режиме наблюдения (watch mode), CRA 3 убрал флаг `--no-watch` в пользу флага Jest `--watchAll = false`. Однако этот флаг не требуется, если вы или ваш сервер CI устанавливаете переменную среды `CI`.<br/>

Вы можете узнать больше о выполнении тестов [на этой странице](https://facebook.github.io/create-react-app/docs/running-tests#on-ci-servers "CRA On CI servers").<br/>

## Правила Хуков ##
Хуки были введены в Реакте 16.8. Это функции, которые позволяют вам использовать функции React, доступные только для классов (например, [обработку состояний](https://reactjs.org/docs/hooks-state.html "Docs")) в [функциональных компонентах](https://www.robinwieruch.de/react-function-component/ "React Function Components by Example").<br/>

Есть [два правила](https://reactjs.org/docs/hooks-rules.html "Docs") использования хуков:
1. Используйте хуки на верхнем уровне вашего функционального компонента, никогда не внутри циклов, условий или вложенных функций.
2. Всегда вызывайте хуки из функциональных компонентов, не вызывайте хуки из обычных функций JavaScript.

CRA 3 включает в себя плагин ESLint, [eslint-plugin-Reaction-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks "gitHub - eslint-plugin-react-hooks"), который обеспечивает соблюдение этих двух правил и других соглашений (например, что хуки должны начинаться с `use`, за которым следует символ верхнего регистра).<br/>

Сборка не удастся, если вы нарушите одно из этих правил.<br/>

Например, если вы измените файл `src / App.js` следующим образом:

```javascript
  import React, { useState } from 'react';
  // ...
  
  function App() {
    if(1 !== 0) {
      const [count, setCount] = useState(0);
    }
  
    return (
      /* ... */
    );
  }
  
  // ...
```

Поскольку хук  `useState` используется внутри условного блока, сборка завершится неудачно со следующим сообщением:<br/>
```javascript
Failed to compile.
./src/App.js
Line 7:  React Hook "useState" is called conditionally. React Hooks
must be called in the exact same order in every component render
react-hooks/rules-of-hooks
```
В этом файле [README.md](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app "eslint-config-react-app gitHub") (и, в частности, файле [index.js](https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js "create-react-app/index.js - gitHub")) вы можете узнать больше о конфигурации ESLint, используемой CRA.<br/>

И на [этой странице](https://facebook.github.io/create-react-app/docs/setting-up-your-editor#displaying-lint-output-in-the-editor "Displaying Lint Output in the Editor CRA-docs") вы можете узнать, как настроить редактор для отображения вывода lint.<br/>

## TypeScript linting ##
CRA 3 также добавил правила linting для проектов TypeScript через [typcript-eslint](https://github.com/typescript-eslint/typescript-eslint "gitHub - typescript-eslint").<br/>

Помните, что вы можете создать проект TypeScript с помощью:
```javascript
npx create-react-app my-typescript-app --typescript
```
Или

```javascript
yarn create react-app my-typescript-app --typescript
```
[Здесь](https://github.com/facebook/create-react-app/blob/4b8b38bf7c55326f8d51ea9deeea76d7feee307d/packages/eslint-config-react-app/index.js#L55:L86 "Part code eslint-config-react-app/index.js on gitHub") вы можете увидеть конфигурацию ESLint для TypeScript в CRA 3.0, а [на этой странице](https://facebook.github.io/create-react-app/docs/setting-up-your-editor#displaying-lint-output-in-the-editor "Displaying Lint Output in the Editor CRA-Docs") вы найдете инструкции по включению поддержки TypeScript в расширении ESLint кода Visual Studio.<br/>

## Конфигурация списка браузеров - Browserslist ##

[Browserslist](https://github.com/browserslist/browserslist "gitHub - browserslist") позволяет настроить набор версий браузера, чтобы изменить выходные данные сборки для создания совместимого кода и поддержки указанных версий браузера.<br/>

Вы можете указать отдельные списки для производства и разработки. Например, если вы добавите следующую конфигурацию в файл `package.json`:

```javascript
"browserslist": {
  "production": [
    "cover 99.5%"
  ],
  "development": [
    "last 2 chrome versions"
  ]
}
```
Производственная сборка будет ориентирована на браузеры, которые охватывают 99,5% глобального использования, тогда как сборка разработки будет ориентирована только на две последние версии Chrome.<br/>

 Browserslist  использует [Can I use](https://caniuse.com/ "Can I use - Site") но вы можете использовать https://browserl.ist, чтобы просмотреть результаты этих запросов ([здесь](https://browserl.ist/?q=cover+99.5%25 "browserl.ist - cover 99.5%") и [здесь](https://browserl.ist/?q=last+2+chrome+versions "browserl.ist - last 2 chrome versions")) и проверить свои собственные.<br/>

 Таким образом, вы можете установить [@ babel / polyfill](https://babeljs.io/docs/en/babel-polyfill "BABEL - @babel/polyfill") в качестве зависимости вашего проекта и импортировать его в начало файлов `src / index.js` или `src / index.tsx`, а Browserslist будет включать полифиллы при необходимости (полифилы не добавляются автоматически). На [этой странице](https://facebook.github.io/create-react-app/docs/supported-browsers-features "CRA - Supported Browsers and Features") вы можете найти больше информации о поддерживаемых языковых функциях.<br/>

 Также, если вы хотите, чтобы CRA 3 обрабатывал CSS для сброса стилей CSS, он будет использовать PostCSS Normalize по умолчанию, который, в свою очередь, будет использовать конфигурацию Browserslist для адаптации своего вывода. Вам просто нужно добавить `@ import-normalize;` в любом месте вашего CSS файла (ов). Смотрите [эту страницу](https://facebook.github.io/create-react-app/docs/adding-css-reset "Adding a CSS Reset") для получения дополнительной информации.<br/>

 Конфигурация стандартного списка браузеров предназначена для широкого круга браузеров, находящихся в производстве, но, следуя инструкциям в этом файле [README](https://github.com/browserslist/browserslist#queries "gitHub browserslist/browserslist - Queries"), вы сможете определить свои собственные пользовательские запросы.<br/>

## Установка базового URL ##
Установка переменной среды `NODE_PATH` для списка абсолютных путей, разделенных двоеточиями (точка с запятой в Windows), позволяет Node.js искать модули в этих путях, чтобы избежать таких вещей, как:<br/>

```javascript
const myModule = require('../../../../../../myModule');
```
CRA 3 устраняет необходимость установки `NODE_PATH` в файле `.env` (эта переменная все еще рассматривается, но [устарела и будет удалена в следующем выпуске](https://github.com/facebook/create-react-app/blob/4b8b38bf7c55326f8d51ea9deeea76d7feee307d/packages/react-scripts/config/modules.js#L28 "gitHub CRA - Note that NODE_PATH is deprecated and will be removed")).<br/>

Так что теперь вам нужно использовать `baseUrl` в файле `jsconfig.json` или `tsconfig.json` (последний для проектов TypeScript) в корне вашего проекта:<br/>

```javascript
  {
    "compilerOptions": {
      "baseUrl": "src"
    },
  }
```
Таким образом, вместо того, чтобы использовать что-то вроде:<br/>

```javascript
import Menu from 'src/components/Menu';
```
Вы можете просто использовать:

```javascript
import Menu from 'components/Menu';
```
Не большое улучшение, но в CRA 3.0 единственными приемлемыми значениями для `baseUrl` являются `src` и `node_modules` (значение по умолчанию).<br/>

[На этой странице](https://facebook.github.io/create-react-app/docs/importing-a-component#absolute-imports "CRA - Absolute Imports") вы можете найти больше информации об этой функции.<br/>

## Заключение ##
Нет сомнений, что CRA продолжает улучшаться с каждым новым выпуском. Благодаря работе почти [50 коммиттеров](https://github.com/facebook/create-react-app/releases/tag/v3.0.0 "gitHub facebook/create-react-app - v3.0.0"), на этот раз он принес ряд полезных дополнений, улучшений и обновлений для внутренних и базовых инструментов.<br/>

Если вы создали приложение React с CRA 2  и не ejected, то выполнить обновление до CRA 3 так же просто, как выполнить одну из следующих команд:<br/>

```javascript
npm install --save --save-exact react-scripts@3.0.0
# Or
yarn add --exact react-scripts@3.0.0
```

Если вы удалили `ejected` свое приложение, процесс обновления не является простым, поэтому подумайте, стоит ли возвращать проект до точки, предшествующей удалению, обновлению и, при необходимости, повторному извлечению.<br/>

Удачного кодирования!<br/>

Автор статьи [Esteban Herrera.](https://blog.logrocket.com/whats-new-in-create-react-app-3-950049f54f92?fbclid=IwAR0EvZVyxIw5SAIzn2SQVdXNtQkDEKsZkfZIakONgm9m9d29Z6wCICurbk0 "What’s new in Create React App 3 Источник") Оригинал доступен по ссылке. <br/>
Автор перевода [Yaroslav Kolesnikov](https://github.com/YaroslavW "My gitHub")

<hr>
Немного об `Eject`<br/>

### `Eject` ###  
>Чтобы запустить react проект, вам нужно знать о таких вещах, как Webpack или Babel, которые могут стать камнем преткновения для людей, которые не хотят узнавать об этом.
>
>`create-react-app` предоставляет полностью настроенную среду с разумными значениями по умолчанию (и возможностью расширения). Большая часть работы, связанной с инфраструктурой, скрыта от вас, и всякий раз, когда в одном из зависимых пакетов происходят изменения, о которых вы позаботитесь - вам потребуется только обновить `react-scripts`.
>
>Я очень рекомендую [эту презентацию одного из авторов CRA](https://www.youtube.com/watch?v=G39lKaONAlA&t=29s "youtube - Dan Abramov - The Melting Pot of JavaScript"), она даст вам лучшее представление о проекте.
>

