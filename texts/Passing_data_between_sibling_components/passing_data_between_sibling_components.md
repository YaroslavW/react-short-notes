# Передача данных между родственными компонентами в React с использованием Context API и React Hooks.

Я создам простое react-приложение с 2-мя полями ввода - `input`, где их значения будут полностью синхронизированы. В этой статье я объясню, как легко передавать данные между одноуровневыми компонентами React, используя самые последние react - функции.

![Logo](img/logo.jpg)

## Настраиваем среду React.
Чтобы запустить новое приложение в реакт, вам не нужно беспокоиться обо всех настройках и зависимостях. Я буду использовать среду `Create React App`, которая довольно проста и хорошо документирована. Всю документацию об этом наборе инструментов вы можете найти [здесь](https://reactjs.org/docs/create-a-new-react-app.html).

Создадим проект.

```javascript
npx create-react-app sync_inputs
```
После этого вам нужно перейти в папку `sync_inputs` и запустить приложение.

```javascript
cd sync_inputs
npm start
```

***Примечание***. У вас могут возникнуть проблемы с запуском этого локального сервера. Если у вас есть сообщение об ошибке, например `«Attempting to bind to HOST environment variable: x86_64-apple-darwin13.4.0 »`, [эта статья](https://medium.com/@choy/fixing-create-react-app-when-npm-fails-to-start-because-your-host-environment-variable-is-being-4c8a9fa0b461) может оказаться полезной для вас. Когда я пытался запустить свой сервер, у меня была ошибка `TypeError: fsevents is not a constructor.`. Я нашел много советов, как с этим справиться [здесь](https://github.com/facebook/create-react-app/issues/6891), но лично для меня помогло удаление всех пакетов Node и снова запустить `npm install`. После этого я запускаю `npm start` и все работает. Также использование npm не обязательно. Вы можете использовать `yarn`, если вам он нравится больше.

>Для пользователей Windows все проблемы с установкой и запуском `create-react-app` 3 версии, я описал в своем посте [здесь](https://github.com/YaroslavW/react-short-notes/blob/master/texts/news_in_create_react_app3/Create-react-app-news.md#%D0%BF%D0%BE%D1%81%D0%BB%D0%B5-%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B8%D1%85-%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B9-creat-react-app-%D0%BD%D0%B5-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%D0%B5%D1%82%D1%81%D1%8F). Там вы найдете все возможные причины и самые простые срособы решения, включая готовую, рабочую сборку стартового приложения, если вам ничего из этого не помогло.

Если все установлено и ваш локальный сервер работает, вам нужно перейти по адресу [http://localhost:3000](http://localhost:3000), и вы должны увидеть логотип реакт на темном фоне. Что-то вроде того:

![create-react-app logo start page](img/react-1.jpg)

Теперь остановите локальный сервер, нажав `Ctrl + C` в вашем терминале и установите еще пару зависимостей.

Установите базовую библиотеку [Material UI](https://material-ui.com/) и  icon library для создания приятного интерфейса.

```javascript
npm install @material-ui/core
npm install @material-ui/icons
```
Теперь ваш файл `package.json` должен выглядеть так:

```json
{
  "name": "sync_inputs",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^4.5.0",
    "@material-ui/icons": "^4.4.3",
    "react": "^16.10.2",
    "react-dom": "^16.10.2",
    "react-scripts": "3.2.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

Итак, теперь у нас есть рабочая среда со всеми библиотеками, которые нам нужны. Теперь пришло время начать строить наше приложение.

***
## Создаём компоненты React.