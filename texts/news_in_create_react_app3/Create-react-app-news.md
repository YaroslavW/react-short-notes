# Что нового в приложении Create React App 3 #

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



[Esteban Herrera](https://blog.logrocket.com/whats-new-in-create-react-app-3-950049f54f92?fbclid=IwAR0EvZVyxIw5SAIzn2SQVdXNtQkDEKsZkfZIakONgm9m9d29Z6wCICurbk0 "What’s new in Create React App 3 Источник")