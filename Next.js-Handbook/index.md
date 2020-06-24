
> Пришло время познакомиться с возможностями рендеринга React-приложений на стороне сервера и в этом нам поможет фреймворк Next.js

<img border="0" src="img/next-logo.jpg" width="640" height="381" data-original-width="652" data-original-height="388" />

- [Введение.](#introduction)
- [Основные функции, предоставляемые Next.js](#basis)
- [Next.js vs Gatsby vs `create-react-app`](#vs)
- [Как установить Next.js](#install)
<li><a href="#ssr" rel="nofollow noopener" title="Просмотр источника, чтобы подтвердить работу SSR">Просмотр источника, чтобы подтвердить работу SSR</a></li>
<li><a href="#app" rel="nofollow noopener" title="Пакеты приложений">Пакеты приложений</a></li>
<li><a href="#icon" rel="nofollow noopener" title="Что это за иконка справа внизу?">Что это за иконка справа внизу?</a></li>
<li><a href="#rdt" rel="nofollow noopener" title="Установка React Developer Tools">Установка React Developer Tools</a></li>
<li><a href="#debug" rel="nofollow noopener" title="Другие методы отладки, которые вы можете использовать">Другие методы отладки, которые вы можете использовать</a></li>
<li><a href="#sec-page" rel="nofollow noopener" title="Добавление второй страницы на сайт">Добавление второй страницы на сайт</a></li>
<li><a href="#linking" rel="nofollow noopener" title="Связывание двух страниц">Связывание двух страниц</a></li>
<li><a href="#din-with-router" rel="nofollow noopener" title="Динамический контент с роутером">Динамический контент с роутером</a></li>
<li><a href="#prefetch" rel="nofollow noopener" title="Предзагрузка">Предзагрузка</a></li>
<li><a href="#userouter" rel="nofollow noopener" title="Использование роутера для обнаружения активной ссылки">Использование роутера для обнаружения активной ссылки</a></li>
<li><a href="#use-router" rel="nofollow noopener" title="Использование next/router">Использование <mark>next/router</mark></a></li>
<li><a href="#data-pass" rel="nofollow noopener" title="Подача данных в компоненты с помощью getInitialProps">Подача данных в компоненты с помощью <mark>getInitialProps</mark></a></li>
<li><a href="#css" rel="nofollow noopener" title="CSS">CSS</a></li>
<li><a href="#head-tag" rel="nofollow noopener" title="Заполнение тега head пользовательскими тегами">Заполнение тега <code>head</code> пользовательскими тегами</a></li>
<li><a href="#wrapper" rel="nofollow noopener" title="Добавление компонента-оболочки">Добавление компонента-оболочки</a></li>
<li><a href="#api" rel="nofollow noopener" title="API-маршруты">API-маршруты</a></li>
<li><a href="#run" rel="nofollow noopener" title="Выполнять код только на стороне сервера или на стороне клиента">Выполнять код только на стороне сервера или на стороне клиента</a></li>
<li><a href="#deploy" rel="nofollow noopener" title="Развертывание-Deploying рабочей версии">Развертывание-Deploying рабочей версии</a></li>
<li><a href="#deploy-now" rel="nofollow noopener" title="Развертывание на Now">Развертывание на Now</a></li>
<li><a href="#analiz" rel="nofollow noopener" title="Анализируем комплекты приложений">Анализируем комплекты приложений</a></li>
<li><a href="#lazy" rel="nofollow noopener" title="Ленивая загрузка модулей.">Ленивая загрузка модулей.</a></li>
<li><a href="#where" rel="nofollow noopener" title="Куда идти дальше?">Куда идти дальше?</a></li>
</ul>
<br />
<br/ >
Это руководство идеально подойдет для вас, если у вас практически нет знаний о Next.js, или если вы уже использовали React в прошлом и хотите больше углубиться в экосистему React, в частности, рендеринг на стороне сервера.
<br />
<br/ >
Я считаю Next.js отличным инструментом для создания веб-приложений, и в конце этого поста я надеюсь, что вы будете хорошо понимать его принципы работы и сможете создавать собственные приложения. И я надеюсь, что это поможет вам изучить Next.js!
<br />
<br/ >
<h2 id="introduction">Введение</h2>
Работать над современным JavaScript-приложением на основе React - это круто, пока вы не поймете, что есть пара проблем, связанных с отображением всего контента на стороне клиента.
<br />
<br/ >
<em>Во-первых</em>, для того, чтобы страница стала видимой пользователю, требуется больше времени, потому что перед загрузкой контента должен загрузиться весь JavaScript, и ваше приложение должно быть запущено, чтобы определить, что показывать на странице.
<br />
<br/ >
<em>Во-вторых</em>, если вы создаете общедоступный веб-сайт, у вас есть проблема с SEO контента. Поисковые системы хорошо справляются с запуском и индексацией приложений JavaScript, но гораздо лучше, если мы сможем отправить им контент, а не дать им самим понимать его (роботы паучки и пр :-) ).
<br />
<br/ >
Решением обеих этих проблем является рендеринг на стороне сервера, также называемый статическим предварительным рендерингом.
<br />
<br/ >
<a href="https://nextjs.org/" target="_blank" rel="nofollow noopener" title="nextjs.org - официальный сайт">Next.js</a> - это одна из сред React, которая делает все это очень простым способом, но не ограничивается этим. Создатели рекламируют его как набор инструментов с <strong>одной командой для приложений React с нулевой конфигурацией.</strong>
<br />
<br/ >
Он обеспечивает общую структуру, которая позволяет легко создавать приложение React с внешним интерфейсом, и прозрачно обрабатывает рендеринг на стороне сервера.
<br />
<br/ >
<h2 id="basis">Основные функции, предоставляемые Next.js</h2>
Вот неполный список основных функций Next.js:
<ol>
<li><h3>Hot Code Reloading</h3></li>
Т.е.  Горячая перезагрузка кода.<br />
Next.js перезагружает страницу, когда обнаруживает любые изменения, сохраненные на диске.
<li><h3>Automatic Routing</h3></li>
Т.е.  Автоматическая маршрутизация <br />
Любой URL-адрес сопоставляется с файловой системой, с файлами, помещаемыми в папку страниц - <mark>pages</mark>, и вам не нужно ничего настраивать (конечно, у вас есть опции настройки).
<li><h3>Single File Components</h3></li>
Т.е. Компоненты одного файла<br />
Используя <code>styled-jsx</code>, полностью интегрированный и созданный той же командой, тривиально добавить стили, ограниченные компонентом.
<li><h3>Server Rendering</h3></li>
Рендеринг на строне сервера<br />
Вы можете визуализировать компоненты React на стороне сервера перед отправкой HTML клиенту.
<li><h3>Ecosystem Compatibility</h3></li>
Совместимость экосистемы<br />
Next.js хорошо сочетается с остальной частью экосистемы JavaScript, Node и React.
<li><h3>Automatic Code Splitting</h3></li>
Автоматическое разделение кода<br />
Страницы отображаются только с теми библиотеками и JavaScript, которые им нужны, не более. Вместо создания одного единственного файла JavaScript, содержащего весь код приложения, приложение автоматически разбивается на Next.js в нескольких различных ресурсах.
<br />
<br />
При открытии страницы, Next.js загружает только тот JavaScript, который необходим для этой конкретной страницы.
<br />
<br />
Next.js делает это путем анализа импортируемых ресурсов.
<br />
<br />
Например, если только одна из ваших страниц импортирует библиотеку <mark>Axios</mark>, эта конкретная страница будет включать библиотеку в свой пакет.
<br />
<br />
Это гарантирует, что ваша загрузка первой страницы будет настолько быстрой, насколько это возможно, и только будущие загрузки страниц (если они когда-либо будут запущены) отправят JavaScript, необходимый клиенту.
<br />
<br />
Есть одно заметное исключение. <em>Часто используемые операции импорта перемещаются в основной пакет JavaScript, если они используются по крайней мере на половине страниц сайта.</em>
<br />
<br />
<li><h3>Prefetching</h3></li>
Предзагрузка<br />
Компонент <mark>Link</mark>, используемый для связывания вместе разных страниц, поддерживает функцию предварительной выборки, которая автоматически выполняет предварительную выборку ресурсов страницы (включая код, отсутствующий из-за разделения кода) в фоновом режиме.
<li><h3>Dynamic Components</h3></li>
Динамические Компоненты<br />
Вы можете импортировать модули JavaScript и React Components динамически.
<li><h3>Static Exports</h3></li>
Статический экспорт<br />
Используя следующую команду экспорта - <code>next export</code>, Next.js позволяет вам экспортировать полностью статический сайт из вашего приложения.
<li><h3>TypeScript Support</h3></li>
Поддержка TypeScript<br />
Next.js написан на TypeScript и как таковой имеет отличную поддержку TypeScript.
</ol>
<br />
<br />
<h2 id="vs">Next.js vs Gatsby vs <code>create-react-app</code></h2>
Next.js, <a href="https://flaviocopes.com/gatsby/" target="_blank" rel="nofollow noopener" title="Introduction to Gatsby">Gatsby</a> и <a href="https://flaviocopes.com/react-create-react-app/" target="_blank" rel="nofollow noopener" title="Introdution to create-react-app">create-react-app</a> - это удивительные инструменты, которые мы можем использовать для разработки наших приложений.
<br />
<br />
Давайте сначала скажем, что у них общего. У всех есть React под капотом, который обеспечивает весь опыт разработки. Они также абстрагируют веб-пакет и все те вещи низкого уровня, которые мы использовали для ручной настройки в старые добрые времена.
<br />
<br />
<mark>create-react-app</mark> не поможет вам легко создать приложение на стороне сервера. Все, что идет с ним (SEO, скорость ...), предоставляется только такими инструментами, как Next.js и Gatsby.
<br />
<br />
<h4>Когда Next.js лучше, чем Гэтсби?</h4>

Они оба могут помочь с рендерингом на стороне сервера, но двумя разными способами.
<br />
<br />
Конечным результатом использования Gatsby является генератор статических сайтов без сервера. Вы создаете сайт, а затем статически развертываете результат процесса сборки на Netlify или другом статическом хостинге.
<br />
<br />
Next.js предоставляет серверную часть, которая может на стороне сервера отображать ответ на запрос, позволяя вам создать динамический веб-сайт, что означает, что вы развернете его на платформе, которая может запускать Node.js.
<br />
<br />
Next.js также может генерировать статический сайт, но я бы не сказал, что это его основной вариант использования.
<br />
<br />
Если бы моей целью было создание статического сайта, мне было бы трудно выбрать, и, возможно, у Гэтсби есть лучшая экосистема плагинов, в том числе и для блогов, в частности.
<br />
<br />
Gatsby также в значительной степени основан на <a href="https://flaviocopes.com/graphql/" target="_blank" rel="nofollow noopener" title="Introduction to GraphQL">GraphQL</a>, что вам может действительно нравиться или не нравиться в зависимости от ваших мнений и потребностей.
<br />
<br />
<h2 id="install">Как установить Next.js</h2>
Чтобы установить Next.js, у вас должен быть установлен Node.js.
<br />
<br />
Убедитесь, что у вас установлена последняя версия Node. Проверьте, запустив в своем терминале <code>node -v</code>, и сравните его с последней версией LTS, указанной на <a href="https://nodejs.org/" target="_blank" rel="nofollow noopener" title="Node - официальный сайт">https://nodejs.org/</a>.
<br />
<br />
После установки Node.js в командной строке будет доступна команда <code>npm</code>.
<br />
<br />
Если у вас возникли проблемы на этом этапе, я рекомендую следующие уроки, которые я написал для вас <a href="https://abcinblog.blogspot.com/p/blog-page_15.html#jsphp" target="_blank" rel="nofollow noopener" title="JS and PHP уроки на моем сайте">JS уроки на моем сайте</a>
<br />
<br />
Теперь, когда у вас есть Node, обновленный до последней версии, и npm, мы настроены!
<br />
<br />
Сейчас мы можем выбрать 2 варианта установки Next.js:
<ol> 
<li> Используя <mark>create-next-app</mark> </li>
<li> Классический подход, который предполагает установку и настройку приложения Next вручную.</li>
</ol>
<br />
<br />
<h4>Установка с  <mark>create-next-app</mark></h4>
Если вы знакомы с <mark>create-react-app</mark>, то <mark>create-next-app</mark> - это то же самое, за исключением того, что оно создает приложение «Next» вместо приложения «Реакт», как следует из названия.
<br />
<br />
Я предполагаю, что вы уже установили Node.js, который поставлялся в комплекте с командой npx. Этот удобный инструмент позволяет нам загружать и выполнять команду JavaScript, и мы будем использовать ее следующим образом:
<br />
<br />

<div class="cmd">
npx create-next-app<br />
// или<br />
yarn create next-app<br />
</div>
<br />
<br />
Команда запрашивает имя приложения (и создает для вас новую папку с таким именем - введем имя, в моем случае это <mark>my-app</mark>, и нажмем <kbd>Enter</kbd>), согласимся с установкой стартового пакета по умолчанию (<code>Default starter app</code> и нажмем <kbd>Enter</kbd>), и загрузим все необходимые пакеты (<mark>react</mark>, <mark>react-dom</mark>, <mark>next</mark>).

<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://2.bp.blogspot.com/-KTb0mKUGEPE/XuyQdqZ5hAI/AAAAAAAAGVg/ypLa5sCTTSUPmWuwsAh_I6b_UHT4Jm1WQCLcBGAsYHQ/s1600/next-1.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-KTb0mKUGEPE/XuyQdqZ5hAI/AAAAAAAAGVg/ypLa5sCTTSUPmWuwsAh_I6b_UHT4Jm1WQCLcBGAsYHQ/s640/next-1.jpg" width="640" height="326" data-original-width="835" data-original-height="425" /></a></div>
<br />
<br />
Я использую yarn, но это не принципиально. Вы можете тоже самое делать с npm, с несколько другими командами. В руководстве я их приведу, наряду с командами для yarn.
<br />
<br />
Если все прошло нормально, то в конце установки вы увидите такие команды:
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://3.bp.blogspot.com/-cgctOFPxd9A/XuyRCnwlw7I/AAAAAAAAGVo/RRt1JH7Dg4E4gj4S5t7La86zegRqxczRQCLcBGAsYHQ/s1600/next-2.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://3.bp.blogspot.com/-cgctOFPxd9A/XuyRCnwlw7I/AAAAAAAAGVo/RRt1JH7Dg4E4gj4S5t7La86zegRqxczRQCLcBGAsYHQ/s640/next-2.jpg" width="640" height="326" data-original-width="835" data-original-height="425" /></a></div>
<br />
<br />
Если сейчас открыть файл <mark>package.json</mark> нашего проекта, то мы увидим там все установленные зависимости и скрипты, с помощью которых мы будем управлять приложением.
<br />
<br />
<mark>package.json</mark>
<pre class="pre-scrollable">
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "9.4.4",
    "react": "16.13.1",
    "react-dom": "16.13.1"
  }
}
</pre>
<br />
<br/ >
Давайте перейдем в папку проекта и запустим наше приложение:
<br />
<br />

<div class="cmd">
cd my-app<br />
yarn dev<br />
// или<br />
npm dev<br />
<br />
</div>
<br />
<br />
В консоли увидим:
<br />
<br />

<div class="separator" style="clear: both; text-align: center;"><a href="https://4.bp.blogspot.com/-UYQM1yhfXWc/XuyTjcdQcxI/AAAAAAAAGV0/gSl5SalE8MMBuoPTj7d2ZCa4EEPzEhGHwCLcBGAsYHQ/s1600/next-3.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://4.bp.blogspot.com/-UYQM1yhfXWc/XuyTjcdQcxI/AAAAAAAAGV0/gSl5SalE8MMBuoPTj7d2ZCa4EEPzEhGHwCLcBGAsYHQ/s640/next-3.jpg" width="640" height="326" data-original-width="835" data-original-height="425" /></a></div>
<br />
<br />
Если перейдем на <a href="http://localhost:3000/" target="_blank" rel="nofollow noopener" title="localhost:3000">http://localhost:3000/</a>, то увидим, что стартовое приложение запустилось!
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://1.bp.blogspot.com/-QWay-XDLgKg/XuyURpvXg_I/AAAAAAAAGV8/eqBrlqcACP0dfmOaRQBEi-kUdIW1bElXwCLcBGAsYHQ/s1600/next-4.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-QWay-XDLgKg/XuyURpvXg_I/AAAAAAAAGV8/eqBrlqcACP0dfmOaRQBEi-kUdIW1bElXwCLcBGAsYHQ/s640/next-4.jpg" width="640" height="394" data-original-width="600" data-original-height="369" /></a></div>
<br />
<br />
Это рекомендуемый способ запуска приложения Next.js, поскольку он дает вам структуру и пример кода для игры. Это больше, чем просто пример приложения по умолчанию; Вы можете использовать любой из примеров, хранящихся по адресу <a href="https://github.com/zeit/next.js/tree/canary/examples" target="_blank" rel="nofollow noopener" title="next.js gitHub">https://github.com/zeit/next.js/tree/canary/examples</a>, используя параметр <code>--example</code>. Например попробуйте <mark>blog-starter</mark>:
<br />
<br />
<div class="cmd">
npx create-next-app --example blog-starter blog-starter-app<br />
# or<br />
yarn create next-app --example blog-starter blog-starter-app <br />
</div>
<br />
<br />
Это даст вам сразу используемый экземпляр блога с подсветкой синтаксиса:
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://2.bp.blogspot.com/-xyYpJprVg8w/XuyYxes6xzI/AAAAAAAAGWI/wQ4XdCDiQIk0hPDRqsi1a48pPzzv31NswCLcBGAsYHQ/s1600/next-5.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-xyYpJprVg8w/XuyYxes6xzI/AAAAAAAAGWI/wQ4XdCDiQIk0hPDRqsi1a48pPzzv31NswCLcBGAsYHQ/s640/next-5.jpg" width="640" height="453" data-original-width="1271" data-original-height="899" /></a></div>
<br />
<br />

<h3>Создание приложение Next.js вручную</h3>
Вы можете избежать создания <mark>create-next-app</mark> приложения, если вы хотите создать следующее приложение с нуля. Вот как: создайте пустую папку где угодно, например, в своей домашней папке, и перейдите в нее:
<br />
<br />
<div class="cmd">
mkdir nextjs<br />
cd nextjs<br />
</div>
<br />
<br />
и создайте свою первую структуру Next:
<br />
<br />
<div class="cmd">
mkdir firstproject<br />
cd firstproject<br />
</div>
<br />
<br />
Теперь используйте команду <mark>npm</mark> или <mark>yarn</mark>, чтобы инициализировать его как проект Node:
<br />
<br />
<div class="cmd">
npm init -y<br />
#or<br />
yarn init -y<br />
</div>
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://4.bp.blogspot.com/-EajgmjX0nvA/Xuyi3hmOlbI/AAAAAAAAGWU/RdyUfhZZapcWyIptzblT31OmWjXZYZU2ACLcBGAsYHQ/s1600/next-6.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://4.bp.blogspot.com/-EajgmjX0nvA/Xuyi3hmOlbI/AAAAAAAAGWU/RdyUfhZZapcWyIptzblT31OmWjXZYZU2ACLcBGAsYHQ/s640/next-6.jpg" width="640" height="325" data-original-width="600" data-original-height="305" /></a></div>
<br />
<br />
Опция <code>-y</code> указывает npm ( и yarn тоже) использовать настройки проекта по умолчанию, заполняя образец файла <mark>package.json</mark>.
<br />
<br />
<mark>package.json</mark>
<pre class="pre-scrollable">
{
  "name": "firstproject",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
</pre>
<br />
<br/ >
Установим зависимости:
<br />
<br />
<div class="cmd">
npm install next react react-dom<br />
#or<br />
yarn add next react react-dom<br />
</div>
<br />
<br />
После этого в папке вашего проекта появится папка <mark>node_modules</mark> и файл <mark>package-lock.json</mark> или, если вы работали с yarn, как я, то  <mark>yarn.lock</mark>. В файле <mark>package.json</mark> появятся установленные зависимости:
<br />
<br />
<mark>package.json</mark>
<pre class="pre-scrollable">
{
  "name": "firstproject",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  <span class="red">"dependencies": {
    "next": "^9.4.4",
    "react": "^16.13.1",
    "react-dom": "^16.13.1"</span>
  }
}
</pre>
<br />
<br/ >
Нам остается просто добавить в него скрипты, для управления приложением:
<br />
<br />
<mark>package.json</mark>
<pre class="pre-scrollable">
{
  "name": "firstproject",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
   <span class="red">"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },</span>
  "dependencies": {
    "next": "^9.4.4",
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  }
}
</pre>
<br />
<br/ >

Если вы хотите изменить порт запуска вашего приложения, то можно немного изменить скрипты: 
<br />
<br/ >
Например так:
<br />
<br/ >
<code>"dev": "next -p 3001"</code>
<br />
<br/ >
Теперь создайте папку  <mark>pages</mark> и добавьте файл <mark>index.js</mark>.
<br />
<br/ >
В этом файле давайте создадим наш первый компонент React.
<br />
<br/ >
Мы собираемся использовать его как экспорт по умолчанию:
<br />
<br/ >
<pre class="pre-scrollable">
const Index = () =&gt; (
  &lt;div&gt;
    &lt;h1&gt;Home page&lt;/h1&gt;
  &lt;/div&gt;
);

export default Index;

</pre>
<br />
<br/ >
Сохраняем и запускаем наше приложение в консоли:
<br />
<br />
<div class="cmd">
npm run dev<br />
#or<br />
yarn run dev<br />
</div>
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://2.bp.blogspot.com/-KYMpzFeeWt4/XuypJmEgh0I/AAAAAAAAGWg/HUdKK5cKUHwOe9sbaR8-8OPFNQNECxIVgCLcBGAsYHQ/s1600/next-7.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-KYMpzFeeWt4/XuypJmEgh0I/AAAAAAAAGWg/HUdKK5cKUHwOe9sbaR8-8OPFNQNECxIVgCLcBGAsYHQ/s640/next-7.jpg" width="640" height="326" data-original-width="635" data-original-height="323" /></a></div>


<br />
<br />

По адресу <a href="http://localhost:3001/" target="_blank" rel="nofollow noopener" title="Локальный хост компьютера пользователя">http://localhost:3001/</a> мы увидим наше приложение:
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://2.bp.blogspot.com/-v-PcR7NRXm4/Xuyp8f8X8WI/AAAAAAAAGWo/0J6g80qT-HYtjKrm0jOZrUwP7CY90iG7ACLcBGAsYHQ/s1600/next-8.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-v-PcR7NRXm4/Xuyp8f8X8WI/AAAAAAAAGWo/0J6g80qT-HYtjKrm0jOZrUwP7CY90iG7ACLcBGAsYHQ/s640/next-8.jpg" width="640" height="345" data-original-width="760" data-original-height="410" /></a></div>
<br />
<br />

<h2 id="ssr">Просмотр источника, чтобы подтвердить работу SSR</h2>
Теперь давайте проверим, работает ли приложение, как мы ожидаем,и что оно будет рендерить на стороне сервера (<strong>SSR - server side rendering</strong>). Это приложение Next.js, поэтому оно должно отображаться на стороне сервера.
<br />
<br />
Это одно из главных преимуществ Next.js: если мы создаем сайт с помощью Next.js, страницы сайта отображаются на сервере, который доставляет HTML в браузер.
<br />
<br />
Это имеет 3 основных преимущества:
<ul>
<li>Клиенту не нужно создавать экземпляр React для рендеринга, что делает сайт быстрее для ваших пользователей.</li>
<li>Поисковые системы будут индексировать страницы без необходимости запуска клиентского JavaScript. Что-то, что Google начал делать, но открыто признал, что это более медленный процесс (и вы должны как можно больше помогать Google, если хотите получить хороший рейтинг).</li>
<li>Вы можете использовать мета-теги в социальных сетях, полезные для добавления изображений для предварительного просмотра, настройки заголовка и описания для любой из ваших страниц, размещенных в Facebook, Twitter и т. д.</li>
</ul>
Давайте посмотрим на исходник приложения.
Используя Chrome, вы можете щелкнуть правой кнопкой мыши в любом месте страницы и нажать <code>View page source</code>.
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://1.bp.blogspot.com/-r2ShOtaFyx0/XuyuNbXn_AI/AAAAAAAAGW0/8CVF-JB9IK0Ihz3-VLTT1PoT9yPhy-5BgCLcBGAsYHQ/s1600/next-9.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-r2ShOtaFyx0/XuyuNbXn_AI/AAAAAAAAGW0/8CVF-JB9IK0Ihz3-VLTT1PoT9yPhy-5BgCLcBGAsYHQ/s640/next-9.jpg" width="640" height="245" data-original-width="600" data-original-height="230" /></a></div>
<br />
<br />
Если вы просмотрите исходный код страницы, вы увидите фрагмент 
<br />
<br />
<pre class="pre-scrollable">
&lt;div&gt;
  &lt;h1&gt;Home page&lt;/h1&gt;
&lt;/div&gt;;
</pre>
<br />
<br/ >

 в теле HTML вместе с набором файлов JavaScript - пакетами приложений.
<br />
<br />
Нам не нужно ничего настраивать, SSR (рендеринг на стороне сервера) уже работает для нас.
<br />
<br />
Приложение React будет запущено на клиенте, и оно будет активным взаимодействием, таким как нажатие на ссылку с использованием рендеринга на стороне клиента. Но перезагрузка страницы перезагрузит ее с сервера. И при использовании Next.js не должно быть никакой разницы в результатах внутри браузера - страница, отображаемая на сервере, должна выглядеть точно так же, как страница, отображаемая клиентом.
<br />
<br />
<h2 id="app">Пакеты приложений</h2>
Когда мы просмотрели исходный код страницы, мы увидели несколько загружаемых файлов JavaScript:
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://1.bp.blogspot.com/-r2ShOtaFyx0/XuyuNbXn_AI/AAAAAAAAGW0/8CVF-JB9IK0Ihz3-VLTT1PoT9yPhy-5BgCLcBGAsYHQ/s1600/next-9.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-r2ShOtaFyx0/XuyuNbXn_AI/AAAAAAAAGW0/8CVF-JB9IK0Ihz3-VLTT1PoT9yPhy-5BgCLcBGAsYHQ/s640/next-9.jpg" width="640" height="245" data-original-width="600" data-original-height="230" /></a></div>
<br />
<br />

Давайте начнем с того, что поместим код в средство форматирования HTML <a href="https://webformatter.com/html" target="_blank" rel="nofollow noopener" title=" HTML formatter"> HTML formatter</a>, чтобы лучше отформатировать его и лучше понять:
<br />
<br />
<pre class="pre-scrollable">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;style data-next-hide-fouc="true"&gt;
            body {
                display: none;
            }
        &lt;/style&gt;
        &lt;noscript data-next-hide-fouc="true"&gt;
            &lt;style&gt;
                body {
                    display: block;
                }
            &lt;/style&gt;
        &lt;/noscript&gt;
        &lt;meta charset="utf-8" /&gt;
        &lt;meta name="viewport" content="width=device-width" /&gt;
        &lt;meta name="next-head-count" content="2" /&gt;
        &lt;link rel="preload" href="/_next/static/development/pages/_app.js?ts=1592569265801" as="script" /&gt;
        &lt;link rel="preload" href="/_next/static/development/pages/index.js?ts=1592569265801" as="script" /&gt;
        &lt;link rel="preload" href="/_next/static/runtime/webpack.js?ts=1592569265801" as="script" /&gt;
        &lt;link rel="preload" href="/_next/static/runtime/main.js?ts=1592569265801" as="script" /&gt;
        &lt;noscript id="__next_css__DO_NOT_USE__"&gt;&lt;/noscript&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div id="__next"&gt;
            &lt;div&gt;&lt;h1&gt;Home page&lt;/h1&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;script src="/_next/static/runtime/react-refresh.js?ts=1592569265801"&gt;&lt;/script&gt;
        &lt;script src="/_next/static/development/dll/dll_f9de5cbc314a1e41f91e.js?ts=1592569265801"&gt;&lt;/script&gt;
        &lt;script id="__NEXT_DATA__" type="application/json"&gt;
            { "props": { "pageProps": {} }, "page": "/", "query": {}, "buildId": "development", "nextExport": true, "autoExport": true, "isFallback": false }
        &lt;/script&gt;
        &lt;script nomodule="" src="/_next/static/runtime/polyfills.js?ts=1592569265801"&gt;&lt;/script&gt;
        &lt;script async="" data-next-page="/_app" src="/_next/static/development/pages/_app.js?ts=1592569265801"&gt;&lt;/script&gt;
        &lt;script async="" data-next-page="/" src="/_next/static/development/pages/index.js?ts=1592569265801"&gt;&lt;/script&gt;
        &lt;script src="/_next/static/runtime/webpack.js?ts=1592569265801" async=""&gt;&lt;/script&gt;
        &lt;script src="/_next/static/runtime/main.js?ts=1592569265801" async=""&gt;&lt;/script&gt;
        &lt;script src="/_next/static/development/_buildManifest.js?ts=1592569265801" async=""&gt;&lt;/script&gt;
        &lt;script src="/_next/static/development/_ssgManifest.js?ts=1592569265801" async=""&gt;&lt;/script&gt;
    &lt;/body&gt;
&lt;/html&gt;

</pre>
<br />
<br/ >
У нас есть 4 файла JavaScript, которые объявлены предварительно загруженными в <code>head</code>, используя <code>rel = "preload" as = "script"</code>:
<ul>
<li><code>/_next/static/development/pages/index.js</code> (96 LOC)</li>
<li><code>/_next/static/development/pages/_app.js</code> (5900 LOC)</li>
<li><code>/_next/static/runtime/webpack.js</code> (939 LOC)</li>
<li><code>/_next/static/runtime/main.js</code> (12k LOC)</li>
</ul>
Это говорит браузеру начать загрузку этих файлов как можно скорее, прежде чем начнется обычный процесс рендеринга. Без них скрипты будут загружаться с дополнительной задержкой, что повышает производительность загрузки страницы.

Затем эти 4 файла загружаются в конце тела вместе с <code>/_next/static/development/dll/dll_01ec57fc9b90d43b98a8.js</code> (31k LOC) и фрагментом JSON, который устанавливает некоторые значения по умолчанию для данных страницы:
<br />
<br />
<pre class="pre-scrollable">
&lt;script id="__NEXT_DATA__" type="application/json"&gt;
{
  "dataManager": "[]",
  "props": {
    "pageProps":  {}
  },
  "page": "/",
  "query": {},
  "buildId": "development",
  "nextExport": true,
  "autoExport": true
}
&lt;/script&gt;
</pre>
<br />
<br/ >
4 загруженных файла пакета уже реализуют одну функцию, называемую <em>разделением кода</em>. Файл <mark>index.js</mark> предоставляет код, необходимый для компонента <code>index</code>, который обслуживает <code>/ route</code>, и если бы у нас было больше страниц, у нас было бы больше пакетов для каждой страницы, которые затем будут загружаться только при необходимости - для обеспечения большей производительности и уменьшения времени загрузки страницы.
<br />
<br/ >
<h2 id="icon">Что это за иконка справа внизу?</h2>
Вы видели эту маленькую иконку в правом нижнем углу страницы, которая выглядит как молния?
<br />
<br />

<div class="separator" style="clear: both; text-align: center;"><a href="https://1.bp.blogspot.com/-NQ5L6YVbUZo/XuyzNJ1tjCI/AAAAAAAAGXA/29thfYvEeMo67PR87tUVcFe6B1u-MgcBwCLcBGAsYHQ/s1600/next-10.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-NQ5L6YVbUZo/XuyzNJ1tjCI/AAAAAAAAGXA/29thfYvEeMo67PR87tUVcFe6B1u-MgcBwCLcBGAsYHQ/s640/next-10.jpg" width="640" height="470" data-original-width="728" data-original-height="535" /></a></div>
<br />
<br />
Если вы наведите указатель мыши, на нем будет написано «Prerendered Page»:
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://1.bp.blogspot.com/-PXpY3hx2t_4/Xuyztdfu96I/AAAAAAAAGXI/5cx-lngXRt8PGGf4AyBDglkVD50WVcwfACLcBGAsYHQ/s1600/next-11.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-PXpY3hx2t_4/Xuyztdfu96I/AAAAAAAAGXI/5cx-lngXRt8PGGf4AyBDglkVD50WVcwfACLcBGAsYHQ/s640/next-11.jpg" width="640" height="474" data-original-width="725" data-original-height="537" /></a></div>
<br />
<br />
Этот значок, который, конечно, виден только в режиме разработки, говорит о том, что страница подходит для автоматической статической оптимизации, что в основном означает, что она не зависит от данных, которые необходимо получить во время вызова, и может быть предварительно обработана и построена как статический HTML-файл во время сборки (когда мы запускаем npm, запускаем сборку - <mark>npm run build</mark>).
<br />
<br />
Далее это можно определить по отсутствию метода <code>getInitialProps ()</code>, прикрепленного к компоненту страницы.
<br />
<br />
В этом случае наша страница может быть еще быстрее, потому что она будет статически обслуживаться как файл HTML, а не через сервер Node.js, который генерирует вывод HTML.
<br />
<br />
Другой полезный значок, который может появиться рядом с ним или вместо него на страницах без предварительной обработки, представляет собой небольшой анимированный треугольник:
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://4.bp.blogspot.com/-WROOiUv9ekw/Xuy2iCE4cwI/AAAAAAAAGXg/zuBspUN6W4YVIc8dJhw5SYtTsAu-8loSQCLcBGAsYHQ/s1600/next-12.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://4.bp.blogspot.com/-WROOiUv9ekw/Xuy2iCE4cwI/AAAAAAAAGXg/zuBspUN6W4YVIc8dJhw5SYtTsAu-8loSQCLcBGAsYHQ/s1600/next-12.png" data-original-width="140" data-original-height="66" /></a></div>
<br />
<br />
Это индикатор компиляции, который появляется, когда вы сохраняете страницу, а Next.js компилирует приложение до того, как начнется горячая перезагрузка кода, чтобы автоматически перезагрузить код в приложении.
<br />
<br />
Это действительно хороший способ сразу определить, было ли приложение уже скомпилировано, и вы можете протестировать часть, над которой вы работаете.
<br />
<br />
<h2 id="rdt">Установка React Developer Tools</h2>
Next.js основан на React, поэтому есть один очень полезный инструмент, который нам абсолютно необходимо установить (если вы этого еще не сделали), это <strong>React Developer Tools</strong>.
<br />
<br />
Доступные как для <a href="" target="_blank" rel="nofollow noopener" title="React Developer Tools для хрома">Chrome</a>, так и для <a href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/" target="_blank" rel="nofollow noopener" title="React Developer Tools для Firefox">Firefox</a>, инструменты разработчика React являются важным инструментом, который вы можете использовать для проверки приложения React.
<br />
<br />
Теперь инструменты разработчика React не являются специфическими для Next.js, но я хочу представить их, потому что вы, возможно, не на 100% знакомы со всеми инструментами, которые предоставляет React. Лучше немного заняться инструментами отладки, чем предполагать, что вы их уже знаете.
<br />
<br />
Они предоставляют инспектора, который показывает дерево компонентов React, которое создает вашу страницу, и для каждого компонента вы можете посмотреть и проверить реквизиты - <code>props</code>, состояние - <code>state</code>, хуки и многое другое.
<br />
<br />
После того, как вы установили React Developer Tools, вы можете открыть обычный браузер devtools (в Chrome щелкнуть правой кнопкой мыши на странице, затем нажать «Проверить»), и вы увидите 2 новые панели: Компоненты -  <mark>Components</mark> и Профилировщик - <mark>Profiler</mark>.
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://2.bp.blogspot.com/-VrLARaRbrGc/Xuy9ifRSP0I/AAAAAAAAGXs/rVf3FxJLTPgoD9on8M6eZERDsY_t5IytwCLcBGAsYHQ/s1600/next-12.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-VrLARaRbrGc/Xuy9ifRSP0I/AAAAAAAAGXs/rVf3FxJLTPgoD9on8M6eZERDsY_t5IytwCLcBGAsYHQ/s1600/next-12.jpg" data-original-width="600" data-original-height="301" /></a></div>
<br />
<br />
Если вы наведете указатель мыши на компоненты, вы увидите, что на странице браузер будет выбирать части, отображаемые этим компонентом.
<br />
<br />
Если вы выберете какой-либо компонент в дереве, на правой панели отобразится ссылка на родительский компонент, а реквизиты - <code>props</code>будут переданы ему:
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://2.bp.blogspot.com/-ar4ehLRnB6k/Xuy-e1WfCoI/AAAAAAAAGX0/NF_KqzzXPpUR-Twpf_IJY6l6KMHfqUvUgCLcBGAsYHQ/s1600/next-13.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-ar4ehLRnB6k/Xuy-e1WfCoI/AAAAAAAAGX0/NF_KqzzXPpUR-Twpf_IJY6l6KMHfqUvUgCLcBGAsYHQ/s640/next-13.jpg" width="640" height="323" data-original-width="600" data-original-height="303" /></a></div>
<br />
<br />
Вы можете легко перемещаться, нажимая на названия компонентов.
<br />
<br />
Вы можете щелкнуть значок глаза на панели инструментов «Инструменты разработчика», чтобы просмотреть элемент DOM, а также, если вы используете первый значок со значком мыши (который удобно расположен под аналогичным обычным значком DevTools), вы можете навести элемент на  пользовательский интерфейс браузера для непосредственного выбора компонента React, который его отображает.
<br />
<br />
Вы можете использовать значок <mark>bug</mark>, чтобы записать данные компонента на консоль.
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://4.bp.blogspot.com/-RV3M4E42t0Q/Xuy_rycUNVI/AAAAAAAAGYA/v3u5w1ajEoAoEs2C3J3T7xtt4FxlbvBrgCLcBGAsYHQ/s1600/next-14.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://4.bp.blogspot.com/-RV3M4E42t0Q/Xuy_rycUNVI/AAAAAAAAGYA/v3u5w1ajEoAoEs2C3J3T7xtt4FxlbvBrgCLcBGAsYHQ/s640/next-14.jpg" width="640" height="323" data-original-width="600" data-original-height="303" /></a></div>
<br />
<br />
Это довольно круто, потому что, как только вы напечатаете там данные, вы можете щелкнуть правой кнопкой мыши по любому элементу и нажать «Сохранить как глобальную переменную - Store as global variable». Например, здесь я сделал это с помощью url prop, и я смог проверить его в консоли, используя временную переменную, назначенную ему, temp1:
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://1.bp.blogspot.com/-pgG0R8nfD7o/XuzEl96s0pI/AAAAAAAAGYM/DfSb07OKiWI2ywdETXH442gTA5U6gKEiwCLcBGAsYHQ/s1600/next-15.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-pgG0R8nfD7o/XuzEl96s0pI/AAAAAAAAGYM/DfSb07OKiWI2ywdETXH442gTA5U6gKEiwCLcBGAsYHQ/s640/next-15.jpg" width="640" height="416" data-original-width="835" data-original-height="543" /></a></div>
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://4.bp.blogspot.com/-9v9K6smuG2E/XuzFR6QFsiI/AAAAAAAAGYU/WySaBxwhccsgLESzljijeO4vOB-V9F5TwCLcBGAsYHQ/s1600/next-16.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://4.bp.blogspot.com/-9v9K6smuG2E/XuzFR6QFsiI/AAAAAAAAGYU/WySaBxwhccsgLESzljijeO4vOB-V9F5TwCLcBGAsYHQ/s640/next-16.jpg" width="640" height="492" data-original-width="667" data-original-height="513" /></a></div>

<br />
<br />
Используя Карты исходного кода - <mark>Source Maps</mark>, которые автоматически загружаются Next.js в режиме разработки, на панели «Компоненты» мы можем щелкнуть код <code><></code>, и DevTools переключится на панель «Источник», показывая нам исходный код компонента:

<br />
<br />

<div class="separator" style="clear: both; text-align: center;"><a href="https://1.bp.blogspot.com/-Z3Tz3nG9eoE/XuzF0yVr8_I/AAAAAAAAGYc/o34QuS7ZLgEZAqrr6y5G1WRNPvW_RXzewCLcBGAsYHQ/s1600/next-17.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-Z3Tz3nG9eoE/XuzF0yVr8_I/AAAAAAAAGYc/o34QuS7ZLgEZAqrr6y5G1WRNPvW_RXzewCLcBGAsYHQ/s640/next-17.jpg" width="640" height="258" data-original-width="600" data-original-height="242" /></a></div>
<br />
<br />

Вкладка «Профилировщик», по возможности, еще более крутая. Это позволяет нам записывать взаимодействие в приложении и видеть, что происходит. Я пока не могу показать пример, потому что для создания взаимодействия нужны как минимум 2 компонента, а у нас есть только один. Я поговорю об этом позже.
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://1.bp.blogspot.com/-7280Ri7573o/XuzGekjntEI/AAAAAAAAGYk/G3PTkhgV9UYIT8gYmp_OxVSPzrBI2KpcACLcBGAsYHQ/s1600/next-18.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-7280Ri7573o/XuzGekjntEI/AAAAAAAAGYk/G3PTkhgV9UYIT8gYmp_OxVSPzrBI2KpcACLcBGAsYHQ/s640/next-18.jpg" width="640" height="289" data-original-width="600" data-original-height="271" /></a></div>
<br />
<br />
Я показал все скриншоты, используя Chrome, но React Developer Tools работает точно так же в Firefox:
<br />
<br />

<h2 id="debug">Другие методы отладки, которые вы можете использовать</h2>

В дополнение к инструментам разработчика React, которые необходимы для создания приложения Next.js, я хочу подчеркнуть два способа отладки приложений Next.js.
<br />
<br />
<oL>
<li>Первый, очевидно, <code>console.log ()</code> и все остальные <a href="https://flaviocopes.com/console-api/" target="_blank" rel="nofollow noopener" title="Working with the DevTools Console and the Console API">инструменты API консоли</a>. Работа приложений Next заставит оператор log работать в консоли браузера ИЛИ в терминале, с которого вы начали Next, используя <code>npm run dev</code>.
<br />
<br />
В частности, если страница загружается с сервера, когда вы указываете на нее URL-адрес или нажимаете кнопку обновления / <kbd>cmd</kbd> / <kbd>ctrl</kbd> + <kbd>R</kbd>, любое ведение журнала консоли происходит в терминале.
<br />
<br />
Последующие переходы страниц, которые происходят при щелчке мыши, приведут к тому, что вся запись в консоли будет происходить внутри браузера.
<br />
<br />
Просто помните, если вы удивлены отсутствием реакции.</li>
<br />
<br />
<li>Другим важным инструментом является оператор отладчика - <code>debugger</code>. Добавление этого оператора к компоненту приостановит отображение страницы браузером:
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://3.bp.blogspot.com/-1MBC54jtcGE/XuzI0zEdjcI/AAAAAAAAGYw/PVhQkWt3W0MecN3oaEvorQ-V_zjGDwt_ACLcBGAsYHQ/s1600/next-19.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://3.bp.blogspot.com/-1MBC54jtcGE/XuzI0zEdjcI/AAAAAAAAGYw/PVhQkWt3W0MecN3oaEvorQ-V_zjGDwt_ACLcBGAsYHQ/s640/next-19.jpg" width="640" height="290" data-original-width="1353" data-original-height="613" /></a></div>
<br />
<br /></li>
</ol>
Действительно круто, потому что теперь вы можете использовать отладчик браузера для проверки значений и запуска своего приложения по одной строке за раз.
<br />
<br />
Вы также можете использовать отладчик VS Code для отладки кода на стороне сервера. Я упоминаю эту технику и <a href="
https://github.com/Microsoft/vscode-recipes/tree/master/Next-js" target="_blank" rel="nofollow noopener" title="vscode-recipes/Next-js/ gitHub">этот урок</a>, чтобы настроить его.
<br />
<br />
<h2 id="sec-page">Добавление второй страницы на сайт</h2>
Теперь, когда мы хорошо разбираемся в инструментах, которые мы можем использовать для разработки приложений Next.js, давайте продолжим с того места, где мы оставили наше первое приложение:
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://3.bp.blogspot.com/-esc9SYHPqQk/XuzQAzwAdNI/AAAAAAAAGY8/snnjNcfbQDAcDtok5koYkkAO3FT9JLfBgCLcBGAsYHQ/s1600/next-8.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://3.bp.blogspot.com/-esc9SYHPqQk/XuzQAzwAdNI/AAAAAAAAGY8/snnjNcfbQDAcDtok5koYkkAO3FT9JLfBgCLcBGAsYHQ/s640/next-8.jpg" width="640" height="345" data-original-width="760" data-original-height="410" /></a></div>
<br />
<br />

Я хочу добавить вторую страницу на этот сайт, блог. Она будет называться <mark>blog</mark>, и на данный момент она будет содержать простую статическую страницу, как наш первый компонент <mark>index.js</mark>:

<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://4.bp.blogspot.com/-TAALm3SLu6A/XuzQyq3R1rI/AAAAAAAAGZE/NhxQJWFS8nE_te8eEDXRzxXhuB4feNCxQCLcBGAsYHQ/s1600/next-20.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://4.bp.blogspot.com/-TAALm3SLu6A/XuzQyq3R1rI/AAAAAAAAGZE/NhxQJWFS8nE_te8eEDXRzxXhuB4feNCxQCLcBGAsYHQ/s640/next-20.jpg" width="640" height="372" data-original-width="600" data-original-height="349" /></a></div>
<br />
<br />
После сохранения нового файла уже запущенный процесс <code>npm run dev</code> уже способен отображать страницу без необходимости ее перезапуска.
<br />
<br />
Когда мы нажимаем на URL <a href="http://localhost:3001/blog" target="_blank" rel="nofollow noopener" title="localhost:3001/blog">http://localhost:3001/blog</a>, у нас появляется новая страница:
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://4.bp.blogspot.com/-9Hr_UMq03R8/XuzRpAYWF-I/AAAAAAAAGZQ/RByMctLBikg0RSeMh3qKoPsoCHjchuiSACLcBGAsYHQ/s1600/next-21.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://4.bp.blogspot.com/-9Hr_UMq03R8/XuzRpAYWF-I/AAAAAAAAGZQ/RByMctLBikg0RSeMh3qKoPsoCHjchuiSACLcBGAsYHQ/s640/next-21.jpg" width="640" height="349" data-original-width="771" data-original-height="421" /></a></div>
<br />
<br />
и вот что сказал нам терминал:
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://3.bp.blogspot.com/-MB-s9ZGgdB4/XuzSh44Q8FI/AAAAAAAAGZg/wEg3ZCgaIiYbgUwtfkD4mcyae5O3PTdlQCLcBGAsYHQ/s1600/next-22.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://3.bp.blogspot.com/-MB-s9ZGgdB4/XuzSh44Q8FI/AAAAAAAAGZg/wEg3ZCgaIiYbgUwtfkD4mcyae5O3PTdlQCLcBGAsYHQ/s640/next-22.jpg" width="640" height="325" data-original-width="600" data-original-height="305" /></a></div>

<br />
<br />
Теперь тот факт, что URL является <mark>/blog</mark>, зависит только от имени файла и его положения в папке страниц.
<br />
<br />
Вы можете создать страницу pages  <mark>/hey/ho</mark>, и эта страница будет отображаться по URL-адресу  <mark>http://localhost:3001/hey/ho </mark>.
<br />
<br />
Для URL не имеет значения имя компонента внутри файла.
<br />
<br />
Попробуйте просмотреть исходную страницу, когда она будет загружена с сервера, в качестве одного из загруженных пакетов будет указан <mark>/_next/static/development/pages/blog.js</mark>, а не <mark>/_next/static/development/pages/index.js</mark>, как на домашней странице. Это потому, что благодаря автоматическому разделению кода нам не нужен пакет, обслуживающий домашнюю страницу. Просто пакет, который обслуживает страницу блога.
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://1.bp.blogspot.com/-U32Z3PyH7QI/XuzUQxzGqXI/AAAAAAAAGZw/9P-KVqktbcElew1FUXv5kGFB47AmpLhygCLcBGAsYHQ/s1600/next-23.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-U32Z3PyH7QI/XuzUQxzGqXI/AAAAAAAAGZw/9P-KVqktbcElew1FUXv5kGFB47AmpLhygCLcBGAsYHQ/s640/next-23.jpg" width="640" height="237" data-original-width="600" data-original-height="222" /></a></div>

<br />
<br />

Мы также можем просто экспортировать анонимную функцию из <mark>blog.js</mark>:
<br />
<br />
<pre class="pre-scrollable">
export default () =&gt; (
  &lt;div&gt;
    &lt;h1&gt;Blog&lt;/h1&gt;
  &lt;/div&gt;
);

</pre>
<br />
<br/ >
или если вы предпочитаете синтаксис функции без стрелки:
<br />
<br />
<pre class="pre-scrollable">
export default function () {
  return (
    &lt;div&gt;
      &lt;h1&gt;Blog&lt;/h1&gt;
    &lt;/div&gt;
  );
}

</pre>
<br />
<br/ >

<h2 id="linking">Связывание двух страниц</h2>
Теперь, когда у нас есть 2 страницы, определенные <mark>index.js</mark> и <mark>blog.js</mark>, мы можем ввести ссылки.
<br />
<br />
Обычные HTML-ссылки на страницах выполняются с помощью тега <code>a</code>:
<br />
<br />
<pre class="pre-scrollable">
&lt;a href="/blog"&gt;Blog&lt;/a&gt;;
</pre>
<br />
<br/ >
Мы не можем сделать это в Next.js.
<br />
<br/ >
Почему? Мы технически можем, конечно, потому что это Интернет, и в Интернете вещи никогда не ломаются (вот почему мы все еще можем использовать тег <code>&lt;marquee&gt;</code>). Но одно из основных преимуществ использования Next заключается в том, что после загрузки страницы происходит переход на другую страницу очень быстро благодаря рендерингу на стороне клиента.
<br />
<br/ >
Если вы используете простую ссылку <code>a</code> тега:
<br />
<br />
<pre class="pre-scrollable">
const Index = () =&gt; (
  &lt;div&gt;
    &lt;h1&gt;Home page&lt;/h1&gt;
    &lt;a href="/blog"&gt;Blog&lt;/a&gt;
  &lt;/div&gt;
);

export default Index;

</pre>
<br />
<br/ >

Теперь откройте DevTools и, в частности, панель «Network». При первой загрузке http://localhost:3001/  загружаются все пакеты страниц:
<br />
<br/ >
<div class="separator" style="clear: both; text-align: center;"><a href="https://3.bp.blogspot.com/-ZxlwhM9J_xw/XuzgvUgzzII/AAAAAAAAGaA/cXpYKLOMD5Ip01G_CJaS12xx9Rz2ZRoxgCLcBGAsYHQ/s1600/next-24.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://3.bp.blogspot.com/-ZxlwhM9J_xw/XuzgvUgzzII/AAAAAAAAGaA/cXpYKLOMD5Ip01G_CJaS12xx9Rz2ZRoxgCLcBGAsYHQ/s640/next-24.jpg" width="640" height="316" data-original-width="600" data-original-height="296" /></a></div>
<br />
<br/ >
Теперь, если вы нажмете кнопку «Сохранить журнал» (чтобы избежать очистки панели «Сеть») и нажмете ссылку «Блог», количество загружаемых объектов удвоится и они будут повторять друг друга.
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://2.bp.blogspot.com/-MJooopnmOMo/XuziVlvQjhI/AAAAAAAAGaM/5OmiQsaZ4-ohdBCMwTHItMPKc1IKPpfdQCLcBGAsYHQ/s1600/next-25.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-MJooopnmOMo/XuziVlvQjhI/AAAAAAAAGaM/5OmiQsaZ4-ohdBCMwTHItMPKc1IKPpfdQCLcBGAsYHQ/s640/next-25.jpg" width="640" height="308" data-original-width="1335" data-original-height="643" /></a></div>
<br />
<br />
Мы снова получили весь этот JavaScript с сервера! Но .. нам не нужен весь этот JavaScript, если мы его уже получили. Нам просто нужен пакет страниц blog.js, единственный новый для этой страницы.
<br />
<br />
Чтобы решить эту проблему, мы используем компонент Next, который называется <code>Link</code>.
<br />
<br />
Мы импортируем это:
<br />
<br />
<pre class="pre-scrollable">
import Link from 'next/link'
</pre>
<br />
<br/ >

и затем мы используем его, чтобы обернуть нашу ссылку, вот так:

<br />
<br />
<pre class="pre-scrollable">
import Link from "next/link";

const Index = () =&gt; (
  &lt;div&gt;
    &lt;h1&gt;Home page&lt;/h1&gt;
    &lt;Link href="/blog"&gt;
      &lt;a&gt;Blog&lt;/a&gt;
    &lt;/Link&gt;
  &lt;/div&gt;
);

export default Index;

</pre>
<br />
<br/ >
Теперь, если вы повторите попытку, которую мы делали ранее, вы увидите, что при переходе на страницу блога загружается только пакет blog.js:
<br />
<br/ >
Первая загрузка:
<br />
<br/ >
<div class="separator" style="clear: both; text-align: center;"><a href="https://1.bp.blogspot.com/-Q-nETIq-ZJI/XuzjwllP1kI/AAAAAAAAGaY/qGF6k5f9j6c5_mcI7t72r-nu5verBdnvgCLcBGAsYHQ/s1600/next-26.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-Q-nETIq-ZJI/XuzjwllP1kI/AAAAAAAAGaY/qGF6k5f9j6c5_mcI7t72r-nu5verBdnvgCLcBGAsYHQ/s640/next-26.jpg" width="640" height="287" data-original-width="1319" data-original-height="591" /></a></div>

<br />
<br/ >
Переход на блок - добавился один файл - <mark>blog.js</mark>
<br />
<br/ >
<div class="separator" style="clear: both; text-align: center;"><a href="https://3.bp.blogspot.com/-UwTaBnCn6ac/XuzkVDLH7MI/AAAAAAAAGag/66brM4-IkQQMbftEMpszb1v-KXIq7exXACLcBGAsYHQ/s1600/next-27.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://3.bp.blogspot.com/-UwTaBnCn6ac/XuzkVDLH7MI/AAAAAAAAGag/66brM4-IkQQMbftEMpszb1v-KXIq7exXACLcBGAsYHQ/s640/next-27.jpg" width="640" height="291" data-original-width="600" data-original-height="273" /></a></div>
<br />
<br/ >
и страница загружалась  быстрее, чем раньше, обычная прокрутка браузера на вкладке даже не появлялась. Тем не менее, как вы видите, URL изменился. Это работает без проблем с API истории браузера.
<br />
<br/ >
Это рендеринг на стороне клиента в действии.
<br />
<br/ >
Что если вы сейчас нажмете кнопку «Назад»? Ничего не загружается, потому что в браузере все еще есть старый пакет <mark>index.js</mark>, готовый загрузить маршрут <mark>/index</mark>. Это все автоматически!
<br />
<br/ >

<h2 id="din-with-router">Динамический контент с роутером</h2>

В предыдущей главе мы увидели, как связать страницу <mark>home</mark> со страницей <mark>blog</mark>.
<br />
<br/ >
Блог - отличный пример использования Next.js, который мы продолжим исследовать в этой главе, добавляя посты в блоге.
<br />
<br/ >
Сообщения блога имеют динамический URL. Например, пост под названием «Hello World» может иметь URL <mark>/blog/hello-world</mark>. Сообщение под названием «Мой второй пост» - (My second post) может иметь URL <mark>/blog/my-second-post</mark>.
<br />
<br/ >

Это содержимое является динамическим и может быть взято из базы данных, файлов разметки или  другого.
<br />
<br/ >
Next.js может обслуживать динамический контент на основе <strong>динамического URL</strong>.
<br />
<br/ >
Мы создаем динамический URL, создавая динамическую страницу с синтаксисом <code>[]</code>.
<br />
<br/ >
Как? Мы добавляем файл pages <mark>/blog/[id].js</mark>. Этот файл будет обрабатывать все динамические URL-адреса в <mark>/blog/route</mark>, например, те, которые мы упомянули выше: <mark>/blog/hello-world</mark>, <mark>/blog/my-second-post</mark> и другие.
<br />
<br/ >
В имени файла <mark>[id]</mark> в квадратных скобках означает, что все это является динамическим, будет помещено в параметр <code>id</code> свойства запроса маршрутизатора.
<br />
<br/ > 

Маршрутизатор -роутер является библиотекой, предоставленной Next.js.
<br />
<br/ >
Импортируем его из <code>next/router</code>:
<br />
<br />
<pre class="pre-scrollable">
import { useRouter } from 'next/router'
</pre>
<br />
<br/ >
и как только мы используем <code>useRouter</code>, мы создаем объект маршрутизатора, используя:
<br />
<br />
<pre class="pre-scrollable">
const router = useRouter()
</pre>
<br />
<br/ >
Как только мы получим этот объект маршрутизатора, мы сможем извлечь из него информацию.
<br />
<br/ >
В частности, мы можем получить динамическую часть URL в файле <mark>[id].js</mark>, обратившись к <code>router.query.id</code>.
<br />
<br/ >
Динамическая часть также может быть просто частью URL, например <mark>post-[id].js</mark>.
<br />
<br/ >
Итак, давайте продолжим и применим все эти вещи на практике.
<br />
<br/ >
Создайте файл <mark>pages/blog/[id].js</mark>:
<br />
<br />
<pre class="pre-scrollable">
import { useRouter } from "next/router";

export default () =&gt; {
  const router = useRouter();

  return (
    &lt;&gt;
      &lt;h1&gt;Blog post&lt;/h1&gt;
      &lt;p&gt;Post id: {router.query.id}&lt;/p&gt;
    &lt;/&gt;
  );
};

</pre>
<br />
<br/ >
Теперь, если вы перейдете к маршрутизатору <mark>http://localhost:3001/blog/test</mark>, вы должны увидеть это:
<br />
<br/ >
<div class="separator" style="clear: both; text-align: center;"><a href="https://2.bp.blogspot.com/-poNweRQ6lYQ/Xu2yEhElUjI/AAAAAAAAGa8/1wFJQB7xWKwpvOFcZhQh-KN3YoES1FNSwCLcBGAsYHQ/s1600/next-28.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-poNweRQ6lYQ/Xu2yEhElUjI/AAAAAAAAGa8/1wFJQB7xWKwpvOFcZhQh-KN3YoES1FNSwCLcBGAsYHQ/s640/next-28.jpg" width="640" height="359" data-original-width="600" data-original-height="337" /></a></div>
<br />
<br/ >
Мы можем использовать этот параметр <code>id</code>, чтобы собрать сообщение из списка сообщений. Из базы данных, например. Для простоты мы добавим файл <mark>posts.json</mark> в корневую папку проекта:
<br />
<br />
<mark>posts.json</mark>
<pre class="pre-scrollable">
{
  "test": {
    "title": "test post",
    "content": "Hey some post content"
  },
  "second": {
    "title": "second post",
    "content": "Hey this is the second post content"
  }
}
</pre>
<br />
<br/ >
Теперь мы можем импортировать его и найти сообщение из ключа <code>id</code>:
<br />
<br />
<mark>posts/[id].js</mark>
<pre class="pre-scrollable">
import { useRouter } from "next/router";
import posts from "../../posts.json";

export default () =&gt; {
  const router = useRouter();

  const post = posts[router.query.id];

  return (
    &lt;&gt;
      &lt;h1&gt;{post.title}&lt;/h1&gt;
      &lt;p&gt;{post.content}&lt;/p&gt;
    &lt;/&gt;
  );
};

</pre>
<br />
<br/ >
Перезагружаем страницу и ожидаем увидеть этот результат:
<br />
<br/ >
<div class="separator" style="clear: both; text-align: center;"><a href="https://3.bp.blogspot.com/-TqIaFOxNnvs/Xu3qrf3triI/AAAAAAAAGbI/hHNTIQM_njEtQGXp87cxiCuY1KIAtwLvwCLcBGAsYHQ/s1600/next-29.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://3.bp.blogspot.com/-TqIaFOxNnvs/Xu3qrf3triI/AAAAAAAAGbI/hHNTIQM_njEtQGXp87cxiCuY1KIAtwLvwCLcBGAsYHQ/s640/next-29.jpg" width="640" height="411" data-original-width="600" data-original-height="385" /></a></div>
<br />
<br/ >
Но это не так! Вместо этого мы получаем ошибку в консоли, а также ошибку в браузере:
<br />
<br/ >
<div class="separator" style="clear: both; text-align: center;"><a href="https://1.bp.blogspot.com/-90Pmv2sILrs/Xu3rma22CvI/AAAAAAAAGbQ/J1B1kaNpww8hFCeMUWM5iLffoMLmQkK6QCLcBGAsYHQ/s1600/next-30.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-90Pmv2sILrs/Xu3rma22CvI/AAAAAAAAGbQ/J1B1kaNpww8hFCeMUWM5iLffoMLmQkK6QCLcBGAsYHQ/s640/next-30.jpg" width="640" height="275" data-original-width="600" data-original-height="258" /></a></div>
<br />
<br/ >
Почему? Потому что .. во время рендеринга, когда компонент инициализирован, данных еще нет. Мы увидим, как предоставить данные компоненту с помощью <code>getInitialProps</code> на следующем уроке.
<br />
<br/ >
А пока добавьте небольшую проверку <code>if (! Post) return &lt;p&gt; &lt/p&gt; </code> перед возвратом JSX:
<br />
<br />
<mark>pages/blog/[id].js</mark>
<pre class="pre-scrollable">
import { useRouter } from "next/router";
import posts from "../../posts.json";

export default () =&gt; {
  const router = useRouter();

  const post = posts[router.query.id];

  <span class="red">if (!post) return &lt;p&gt;&lt;/p&gt;</span>
  return (
    &lt;&gt;
      &lt;h2&gt;Hello&lt;/h2&gt;
      &lt;h1&gt;{post.title}&lt;/h1&gt;
      &lt;p&gt;{post.content}&lt;/p&gt;
    &lt;/&gt;
  );
};

</pre>
<br />
<br/ >
Теперь все должно работать. Первоначально компонент отображается без динамической информации router.query.id. После рендеринга Next.js запускает обновление со значением запроса, и на странице отображается правильная информация.
<br />
<br/ >
И если вы просматриваете источник, в HTML есть пустой тег <code>&lt;p&gt;</code>:
<br />
<br/ >
<div class="separator" style="clear: both; text-align: center;"><a href="https://2.bp.blogspot.com/--eOaTF50LmA/Xu3uVm3a9AI/AAAAAAAAGbc/M8ocqYVjxAkxToFeO-vtKj-L5fxCjQoZACLcBGAsYHQ/s1600/next-31.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/--eOaTF50LmA/Xu3uVm3a9AI/AAAAAAAAGbc/M8ocqYVjxAkxToFeO-vtKj-L5fxCjQoZACLcBGAsYHQ/s640/next-31.jpg" width="640" height="213" data-original-width="600" data-original-height="200" /></a></div>

<br />
<br/ >
Вскоре мы исправим эту проблему, которая не позволяет реализовать SSR, и это вредит как времени загрузки для наших пользователей, так и SEO и социальному обмену, как мы уже обсуждали.
<br />
<br/ >
Мы можем завершить пример блога, перечислив эти посты в <mark>pages/blog.js</mark>:
<br />
<br />
<mark>pages/blog.js</mark>
<pre class="pre-scrollable">
import posts from "../posts.json";

const Blog = () =&gt; (
  &lt;div&gt;
    &lt;h1&gt;Blog&lt;/h1&gt;

    &lt;ul&gt;
      {Object.entries(posts).map((value, index) =&gt; {
        return &lt;li key={index}&gt;{value[1].title}&lt;/li&gt;;
      })}
    &lt;/ul&gt;
  &lt;/div&gt;
);

export default Blog;
</pre>
<br />
<br/ >
И мы можем связать их с отдельными страницами сообщений, импортировав <code>Link</code> из <code>next/link</code> и используя ее в цикле сообщений:

<br />
<br />
<mark>pages/blog.js</mark>
<pre class="pre-scrollable">
import Link from "next/link";
import posts from "../posts.json";

const Blog = () =&gt; (
  &lt;div&gt;
    &lt;h1&gt;Blog&lt;/h1&gt;

    &lt;ul&gt;
      {Object.entries(posts).map((value, index) =&gt; {
        return (
          &lt;li key={index}&gt;
            &lt;Link href="/blog/[id]" as={"/blog/" + value[0]}&gt;
              &lt;a&gt;{value[1].title}&lt;/a&gt;
            &lt;/Link&gt;
          &lt;/li&gt;
        );
      })}
    &lt;/ul&gt;
  &lt;/div&gt;
);

export default Blog;

</pre>
<br />
<br/ >

<h2 id="prefetch">Предзагрузка</h2>
Ранее я упоминал, как компонент <mark>Link</mark> Next.js можно использовать для создания ссылок между двумя страницами, и когда вы его используете, Next.js прозрачно обрабатывает маршрутизацию веб-интерфейса для нас, поэтому, когда пользователь нажимает на ссылку, веб-интерфейс выполняет показ новой страницы без запуска нового запроса / ответа клиента / сервера, как это обычно происходит с веб-страницами.
<br />
<br/ >
Еще одна вещь, которую Next.js делает для вас, когда вы используете <code>Link</code>.
<br />
<br/ >
Как только элемент, заключенный в <code>&lt;Link&gt;</code>, появляется в окне просмотра (что означает, что он виден пользователю веб-сайта), Next.js предварительно выбирает URL-адрес, на который он указывает, при условии, что это локальная ссылка (на вашем веб-сайте), делая приложение супер быстрым для пользователя.
<br />
<br/ >
Такое поведение запускается только в производственном режиме - <mark>production mode</mark> (об этом мы поговорим позже), что означает, что вам нужно остановить приложение, если вы запускаете его с помощью <code>npm run dev</code>, скомпилировать свой рабочий пакет с помощью <code>npm run build</code>  и  запустить его командой - <code>npm run start</code>.
<br />
<br/ >
Используя инспектор сети - Network inspector в DevTools, вы заметите, что любые ссылки выше, при загрузке страницы, запускают предварительную выборку, как только событие загрузки - <code>load</code> запускается на вашей странице (срабатывает, когда страница полностью загружена, и происходит после Событие <code>DOMContentLoaded</code>).
<br />
<br/ >
Любой другой тег <code>Link</code>, отсутствующий в области просмотра, будет предварительно выбран при прокрутке пользователем.
<br />
<br/ >
Предварительная выборка выполняется автоматически на высокоскоростных соединениях (соединения Wi-Fi и 3G +, если браузер не отправляет HTTP-заголовок Save-Data.
<br />
<br/ >
Вы можете отказаться от предварительной выборки отдельных экземпляров <code>Link</code>, установив для параметра <code>prefetch</code> значение <code>false</code>:
<br />
<br />
<pre class="pre-scrollable">
&lt;Link href="/a-link" prefetch={false}&gt;
  &lt;a&gt;A link&lt;/a&gt;
&lt;/Link&gt;;

</pre>
<br />
<br/ >
<h2 id="userouter">Использование роутера для обнаружения активной ссылки</h2>
Одна очень важная функция при работе со ссылками - это определение текущего URL-адреса и, в частности, назначение класса активной ссылке, чтобы мы могли стилизовать его не так, как другие.
<br />
<br/ >
Это особенно полезно, например, в заголовке вашего сайта.
<br />
<br/ >
Компонент <code>Link</code>  от Next.js по умолчанию, предлагаемый в <code>next/link</code>, не делает это автоматически для нас.
<br />
<br/ >
Мы можем создать компонент <code>Link</code> самостоятельно, и мы храним его в файле <mark>Link.js</mark> в папке <mark>Components</mark>, и импортируем его вместо <code>next/link</code> по умолчанию.
<br />
<br/ >
В этом компоненте мы сначала импортируем <code>React from 'react'</code>, <code>Link from 'next/link'</code> и хук <code>useRouter</code> из <code>next/router</code>.
<br />
<br/ >
Внутри компонента мы определяем, соответствует ли текущее имя пути <code>href</code> prop компонента, и если так, мы добавляем выбранный класс к дочерним элементам.
<br />
<br/ >
Наконец, мы возвращаем эти <code>children</code> с обновленным классом, используя <code>React.cloneElement ()</code>:
<br />
<br />
<mark>components/Link.js</mark>
<pre class="pre-scrollable">
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default ({ href, children }) =&gt; {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} selected`;
  }

  return &lt;Link href={href}&gt;{React.cloneElement(children, { className })}&lt;/Link&gt;;
};

</pre>
<br />
<br/ >

<h2 id="use-router">Использование <mark>next/router</mark></h2>
Мы уже видели, как использовать компонент <mark>Link</mark> для декларативной обработки маршрутизации в приложениях Next.js.
<br />
<br/ >

Управлять маршрутизацией в JSX очень удобно, но иногда вам нужно запускать изменение маршрутизации программно.
<br />
<br/ >
В этом случае вы можете получить прямой доступ к маршрутизатору (роутеру) Next.js, указанному в пакете <mark>next/router</mark>, и вызвать его метод <code>push ()</code>.
<br />
<br/ >
Вот пример доступа к маршрутизатору:
<br />
<br/ >
<pre class="pre-scrollable">
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  //...
}
</pre>
<br />
<br/ >
Как только мы получим объект <code>router</code>, вызвав <code>useRouter ()</code>, мы сможем использовать его методы.
<br />
<br/ >
Это маршрутизатор на стороне клиента, поэтому методы должны использоваться только во внешнем коде. Самый простой способ убедиться в этом - заключить вызовы в ловушку <code>React useEffect ()</code> или внутри <code>componentDidMount ()</code> в компонентах с состоянием React.
<br />
<br/ >
Наиболее вероятно, что вы будете использовать чаще всего <code>push ()</code> и <code>prefetch ()</code>.
<br />
<br/ >
<code>push ()</code> позволяет нам программно инициировать изменение URL во внешнем интерфейсе:
<br />
<br/ >
<pre class="pre-scrollable">
router.push('/login')
</pre>
<br />
<br/ >
<code>prefetch ()</code> позволяет нам программно выполнять предварительную выборку URL, что полезно, когда у нас нет тега <code>Link</code>, который автоматически обрабатывает предварительную выборку для нас:
<br />
<br/ >
<pre class="pre-scrollable">
router.prefetch('/login')
</pre>
<br />
<br/ >
Полный пример:
<br />
<br />
<pre class="pre-scrollable">
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/login')
  })
}
</pre>
<br />
<br/ >
Вы также можете использовать маршрутизатор для прослушивания событий изменения маршрута - <a href="https://nextjs.org/docs#router-events" target="_blank" rel="nofollow noopener" title="Next.js официальный сайт. router-events">route change events</a>.
<br />
<br />
<h2 id="data-pass" style="line-height: 1.6;">Подача данных в компоненты с помощью <mark>getInitialProps</mark></h2>
В предыдущей главе у нас была проблема с динамическим генерированием страницы публикации, потому что компоненту требовались некоторые данные заранее, когда мы пытались получить данные из файла JSON:
<br />
<br />
<pre class="pre-scrollable">
import { useRouter } from 'next/router'
import posts from '../../posts.json'

export default () =&gt; {
  const router = useRouter()

  const post = posts[router.query.id]

  return (
    &lt;&gt;
      &lt;h1&gt;{post.title}&lt;/h1&gt;
      &lt;p&gt;{post.content}&lt;/p&gt;
    &lt;/&gt;
  )
}
</pre>
<br />
<br/ >

мы получили эту ошибку:
<br />
<br/ >
<div class="separator" style="clear: both; text-align: center;"><a href="https://1.bp.blogspot.com/-90Pmv2sILrs/Xu3rma22CvI/AAAAAAAAGbQ/J1B1kaNpww8hFCeMUWM5iLffoMLmQkK6QCLcBGAsYHQ/s1600/next-30.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-90Pmv2sILrs/Xu3rma22CvI/AAAAAAAAGbQ/J1B1kaNpww8hFCeMUWM5iLffoMLmQkK6QCLcBGAsYHQ/s640/next-30.jpg" width="640" height="275" data-original-width="600" data-original-height="258" /></a></div>
<br />
<br/ >
Как мы решаем это? И как мы заставляем SSR работать для динамических маршрутов?
<br />
<br/ >
Мы должны предоставить компоненту реквизиты- <code>props</code>, используя специальную функцию <code>getInitialProps ()</code>, которая прикреплена к компоненту.
<br />
<br/ >
Для этого сначала назовем компонент:
<br />
<br />
<pre class="pre-scrollable">
const Post = () => {
  //...
}

export default Post
</pre>
<br />
<br/ >
Затем мы добавляем функцию к нему:
<br />
<br />
<pre class="pre-scrollable">
const Post = () => {
  //...
}

Post.getInitialProps = () => {
  //...
}

export default Post
</pre>
<br />
<br/ >
Эта функция получает объект в качестве аргумента, который содержит несколько свойств. В частности, сейчас нас интересует то, что мы получаем объект запроса (<code> query object</code>), который мы использовали ранее для получения идентификатора записи.
<br />
<br/ >
Таким образом, мы можем получить его, используя синтаксис деструктуризации объекта:

<br />
<br />
<pre class="pre-scrollable">
Post.getInitialProps = ({ query }) => {
  //...
}
</pre>
<br />
<br/ >
Теперь мы можем вернуть <code>post</code> из этой функции:
<br />
<br />
<pre class="pre-scrollable">
Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id]
  }
}
</pre>
<br />
<br/ >

И мы также можем удалить импорт <code>useRouter</code>, и мы получаем сообщение из свойства <code>props</code>, переданного компоненту <mark>Post</mark>:
<br />
<br />
<pre class="pre-scrollable">
import posts from "../../posts.json";

const Post = (props) =&gt; {
  return (
    &lt;div&gt;
      &lt;h1&gt;{props.post.title}&lt;/h1&gt;
      &lt;p&gt;{props.post.content}&lt;/p&gt;
    &lt;/div&gt;
  );
};

Post.getInitialProps = ({ query }) =&gt; {
  return {
    post: posts[query.id],
  };
};

export default Post;

</pre>
<br />
<br/ >
Теперь ошибки не будет, и SSR будет работать как положено, как вы можете видеть, если посмотреть View Page Source в консоли:
<br />
<br/ >
<div class="separator" style="clear: both; text-align: center;"><a href="https://3.bp.blogspot.com/-AbK-j5wQM5o/Xu9eoSA75uI/AAAAAAAAGcE/CI8uhhj_c005P8VbMIugZlvCBNjANUdrQCLcBGAsYHQ/s1600/next-32.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://3.bp.blogspot.com/-AbK-j5wQM5o/Xu9eoSA75uI/AAAAAAAAGcE/CI8uhhj_c005P8VbMIugZlvCBNjANUdrQCLcBGAsYHQ/s640/next-32.jpg" width="640" height="242" data-original-width="600" data-original-height="227" /></a></div>
<br />
<br/ >
Функция <code>getInitialProps</code> будет выполняться на стороне сервера, а также на стороне клиента, когда мы перейдем на новую страницу, используя компонент <code>Link</code>, как мы это делали.

Важно отметить, что <code>getInitialProps</code> получает в объекте контекста, который он получает, в дополнение к объекту запроса - <code>query</code> эти другие свойства:
<ul>
<li><code>pathname</code>: <code>path</code> раздел пути URL</li>
<li><code>asPath</code> - Строка фактического пути (включая запрос) отображается в браузере</li>
</ul>
что в случае вызова <mark>http://localhost:3001/blog/test</mark> приведет соответственно к:
<ul>
<li><code>/blog/[id]</code></li>
<li><code>/blog/test</code></li>
</ul>
И в случае рендеринга на стороне сервера он также получит:

<ul>
<li><code>reg</code> -  HTTP request object (HTTP - объект запроса)</li>
<li><code>res</code> - HTTP response object (HTTP - объект ответа)</li>
<li><code>err</code> - error object (объект ошибки)</li>
</ul>
<code>req</code> и <code>res</code> будут вам знакомы, если вы выполняли какую-либо кодировку Node.js. Если забыли, то стоит посмотреть <a href="https://abcinblog.blogspot.com/p/blog-page_15.html#jsphp" target="_blank" rel="nofollow noopener" title="мои статьи по работе с Node.js">мои статьи по работе с Node.js</a>
<br />
<br/ >

<h2 id="css">CSS</h2>
Как нам оформить компоненты React в Next.js?
<br />
<br/ >
У нас для этого много свободы и вариантов, поэтому мы можем использовать любую библиотеку, какую пожелаем.
<br />
<br/ >
Но Next.js поставляется со встроенным <mark>styled-jsx</mark>, потому что это библиотека, созданная теми же людьми, которые работают над Next.js
<br />
<br/ >
И это довольно крутая библиотека, которая предоставляет нам ограниченный CSS, который отлично подходит для сопровождения, потому что CSS влияет только на компонент, к которому он применяется.
<br />
<br/ >
Я думаю, что это отличный подход при написании CSS, без необходимости применять дополнительные библиотеки или препроцессоры, которые увеличивают сложность.
<br />
<br/ >
Чтобы добавить CSS в компонент React в Next.js, мы вставляем его во фрагмент кода в JSX, который начинается с
<br />
<br />
<pre class="pre-scrollable">
&lt;style jsx&gt;{`
</pre>
<br />
<br/ >
и заканчивается
<br />
<br />
<pre class="pre-scrollable">
`}&lt;/style&gt;
</pre>
<br />
<br/ >
Внутри этих странных блоков мы пишем простой CSS, как мы это делаем в файле <mark>file.css</mark>:
<br />
<br />
<pre class="pre-scrollable">
&lt;style jsx&gt;{`
  h1 {
    font-size: 3rem;
  }
`}&lt;/style&gt;;

</pre>
<br />
<br/ >
Вы пишете это внутри JSX, вот так:
<br />
<br />
<pre class="pre-scrollable">
const Index = () =&gt; (
  &lt;div&gt;
    &lt;h1&gt;Home page&lt;/h1&gt;

    <span class="red">&lt;style jsx&gt;{`
      h1 {
        font-size: 3rem;
      }
    `}&lt;/style&gt;</span>
  &lt;/div&gt;
);

export default Index;

</pre>
<br />
<br/ >
Внутри блока мы можем использовать интерполяцию для динамического изменения значений. Например, здесь мы предполагаем, что родительский компонент передает размер - <code>size</code> в  <code>props</code>, и мы используем его в блоке <code>styled-jsx</code>:
<br />
<br />
<pre class="pre-scrollable">
const Index = (props) =&gt; (
  &lt;div&gt;
    &lt;h1&gt;Home page&lt;/h1&gt;

    &lt;style jsx&gt;{`
      h1 {
        font-size: ${props.size}rem;
      }
    `}&lt;/style&gt;
  &lt;/div&gt;
);

</pre>
<br />
<br/ >
Если вы хотите применить некоторые CSS глобально, не ограничивая область действия компонента, вы добавляете ключевое слово <code>global</code> к тегу <code>style</code>:

<br />
<br />
<pre class="pre-scrollable">
&lt;style jsx global&gt;{`
  body {
    margin: 0;
  }
`}&lt;/style&gt;;

</pre>
<br />
<br/ >
Если вы хотите импортировать внешний CSS-файл в компонент Next.js, вы должны сначала установить <mark>@zeit/next-css</mark>:
<br />
<br />
<div class="cmd">
npm install @zeit/next-css<br />
#or<br />
yarn add @zeit/next-css<br /> 
</div>
<br />
<br />
а затем создайте файл конфигурации в корневом каталоге проекта с именем <mark>next.config.js</mark> с таким содержимым:
<br />
<br />
<pre class="pre-scrollable">
const withCSS = require('@zeit/next-css')
module.exports = withCSS()
</pre>
<br />
<br/ >
После перезапуска приложения Next вы можете импортировать CSS, как это обычно делается с библиотеками или компонентами JavaScript:
<br />
<br />
<pre class="pre-scrollable">
import '../style.css'
</pre>
<br />
<br/ >
Вы также можете импортировать файл SASS напрямую, используя вместо этого библиотеку <mark>@zeit/next-sass</mark>.

<br />
<br />
<h2 id="head-tag">Заполнение тега <code>head</code> пользовательскими тегами</h2>
С любого компонента страницы Next.js вы можете добавить информацию в заголовок страницы.

<br />
<br />
Это удобно, когда:

<br />
<br />
<ul>
<li>Вы хотите настроить заголовок страницы</li>
<li>Вы хотите изменить метатег</li>
</ul>

<br />
<br />
Как ты можешь это сделать?

<br />
<br />
Внутри каждого компонента вы можете импортировать компонент <code>Head</code> из <code>next/head</code> и включить его в вывод JSX вашего компонента:
<br />
<br />
<pre class="pre-scrollable">

import Head from "next/head";

const House = (props) =&gt; (
  &lt;div&gt;
    &lt;Head&gt;
      &lt;title&gt;The page title&lt;/title&gt;
    &lt;/Head&gt;
    {/* the rest of the JSX */}
  &lt;/div&gt;
);

export default House;

</pre>
<br />
<br/ >
Вы можете добавить любой HTML-тег, который хотите отображать в разделе <code>&lt;head&gt;</code> страницы.

<br />
<br />
При монтировании компонента Next.js будет следить за тем, чтобы теги внутри <code>Head</code> добавлялись в заголовок страницы. То же самое при размонтировании компонента, Next.js позаботится об удалении этих тегов.

<br />
<br />

<h2 id="wrapper">Добавление компонента-оболочки</h2>
Все страницы на вашем сайте выглядят более или менее одинаково. Там ест окно браузера, общий базовый слой, и вы просто хотите изменить то, что внутри.

<br />
<br />
Там есть навигационная панель, боковая панель, а затем фактический контент.

<br />
<br />
Как вы строите такую систему в Next.js?
<br />
<br />
Есть 2 способа. Один из них использует компонент высшего порядка (НОС - <a href="" target="_blank" rel="nofollow noopener" title="">Higher Order Component</a>, создав компонент  <mark>component/Layout.js</mark>:
<br />
<br />
<mark>component/Layout.js</mark>
<pre class="pre-scrollable">
export default (Page) =&gt; {
  return () =&gt; (
    &lt;div&gt;
      &lt;nav&gt;
        &lt;ul&gt;....&lt;/ul&gt;
      &lt;/hav&gt;
      &lt;main&gt;
        &lt;Page /&gt;
      &lt;/main&gt;
    &lt;/div&gt;
  );
};

</pre>
<br />
<br/ >
Там мы можем импортировать отдельные компоненты для заголовка-<mark>heading</mark> и / или боковой панели - <mark>sidebar</mark>, а также можем добавить весь необходимый нам CSS.
<br />
<br/ >
И вы используете его на каждой странице, как это:
<br />
<br />
<pre class="pre-scrollable">
import withLayout from "../components/Layout.js";

const Page = () =&gt; &lt;p&gt;Here's a page!&lt;/p&gt;;

export default withLayout(Page);

</pre>
<br />
<br/ >
Но я обнаружил, что это работает только для простых случаев, когда вам не нужно вызывать <code>getInitialProps ()</code> на странице.
<br />
<br/ >
Почему?
<br />
<br/ >
Потому что <code>getInitialProps ()</code> вызывается только на компоненте страницы. Но если мы экспортируем Компонент Высшего Порядка с помощью <code>Layout ()</code> со страницы, <code>Page.getInitialProps ()</code> не вызывается. <code>withLayout.getInitialProps ()</code> будет.
<br />
<br/ >
Чтобы избежать ненужного усложнения нашей кодовой базы, альтернативный подход заключается в использовании <code>props</code>:
<br />
<br />
<pre class="pre-scrollable">
export default (props) =&gt; (
  &lt;div&gt;
    &lt;nav&gt;
      &lt;ul&gt;....&lt;/ul&gt;
    &lt;/hav&gt;
    &lt;main&gt;{props.content}&lt;/main&gt;
  &lt;/div&gt;
);

</pre>
<br />
<br/ >
и теперь на наших страницах мы используем это так:
<br />
<br />
<pre class="pre-scrollable">
import Layout from "../components/Layout.js";

const Page = () => &lt;Layout content={&lt;p>Here's a page!&lt;/p>} />;

</pre>
<br />
<br/ >
Этот подход позволяет нам использовать <code>getInitialProps ()</code> из нашего компонента страницы, с единственным недостатком - писать JSX компонента внутри <code> content props</code>:




<br />
<br />
<pre class="pre-scrollable">
import Layout from "../components/Layout.js";

const Page = () =&lt; &gt;Layout content={&gt;p&lt;Here's a page!&gt;/p&lt;} /&lt;;

Page.getInitialProps = ({ query }) =&lt; {
  //...
};

</pre>
<br />
<br/ >
<h2 id="api">API-маршруты</h2>
Помимо создания маршрутов страниц, что означает, что страницы передаются в браузер как веб-страницы, Next.js может создавать маршруты API.
<br />
<br/ >
Это очень интересная функция, поскольку она означает, что Next.js можно использовать для создания внешнего интерфейса для данных, которые хранятся и извлекаются самим Next.js, передавая JSON через запросы выборки.
<br />
<br/ >
Маршруты API (API routes) находятся в папке <mark>/pages/api/</mark> и сопоставляются с конечной точкой <mark>/api</mark>.
<br />
<br/ >
Эта функция очень полезна при создании приложений.
<br />
<br/ >
На этих маршрутах мы пишем код Node.js (а не код React). Это смена парадигмы, вы переходите с внешнего интерфейса на внутренний, но очень плавно.
<br />
<br/ >
Предположим, у вас есть файл <mark>/pages/api/comments.js</mark>, целью которого является возвращение комментариев к записи блога в формате JSON.
<br />
<br/ >
Допустим, у вас есть список комментариев, хранящихся в файле <mark>comments.json</mark>:
<br />
<br />
<mark>/pages/api/comments.js</mark>
<pre class="pre-scrollable">
[
  {
    "comment": "First"
  },
  {
    "comment": "Nice post"
  }
]
</pre>
<br />
<br/ >
Вот пример кода, который возвращает клиенту список комментариев:
<br />
<br />
<mark>/pages/api/comments.js</mark>
<pre class="pre-scrollable">
import comments from './comments.json'

export default (req, res) =&gt; {
  res.status(200).json(comments)
}
</pre>
<br />
<br/ >
Он будет прослушивать URL-адрес <mark>/api/comments</mark> для запросов GET, и вы можете попробовать вызвать его с помощью браузера:
<br />
<br/ >
<div class="separator" style="clear: both; text-align: center;"><a href="https://1.bp.blogspot.com/-Myg0mkKGRU4/Xu91Qq6BUCI/AAAAAAAAGcQ/gbClOTpcFfsNGicgJIY__FXWUYM8elYvgCLcBGAsYHQ/s1600/next-33.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-Myg0mkKGRU4/Xu91Qq6BUCI/AAAAAAAAGcQ/gbClOTpcFfsNGicgJIY__FXWUYM8elYvgCLcBGAsYHQ/s640/next-33.jpg" width="640" height="583" data-original-width="914" data-original-height="833" /></a></div>
<br />
<br/ >
Маршруты API также могут использовать динамическую маршрутизацию, например страницы, использовать синтаксис <code>[]</code> для создания динамического маршрута API, например <mark>/pages/api/comments/[id].js</mark>, который будет извлекать комментарии, относящиеся к идентификатору записи.
<br />
<br/ >
Внутри <mark>[id].js</mark> вы можете получить значение <code>id</code>, посмотрев его внутри объекта <code>req.query</code>:

<br />
<br />
<pre class="pre-scrollable">
import comments from '../comments.json'

export default (req, res) =&gt; {
  res.status(200).json({ post: req.query.id, comments })
}
</pre>
<br />
<br/ >
Вот вы можете увидеть приведенный выше код в действии:
<br />
<br/ >
<div class="separator" style="clear: both; text-align: center;"><a href="https://2.bp.blogspot.com/-W7bH8PSptUo/Xu92NGWfNbI/AAAAAAAAGcY/PrBnhF9MCSEUB4wi7KKiCQrLOIoicKObgCLcBGAsYHQ/s1600/next-34.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-W7bH8PSptUo/Xu92NGWfNbI/AAAAAAAAGcY/PrBnhF9MCSEUB4wi7KKiCQrLOIoicKObgCLcBGAsYHQ/s640/next-34.jpg" width="640" height="311" data-original-width="1002" data-original-height="487" /></a></div>

<br />
<br/ >
На динамических страницах вам нужно будет импортировать <code>useRouter</code> из <code>next/router</code>, затем получить объект <code>router</code> с помощью <code>const router = useRouter ()</code>, и тогда мы сможем получить значение <code>id</code> с помощью <code>router.query.id</code>.
<br />
<br/ >
На стороне сервера все проще, так как запрос привязан к объекту запроса.
<br />
<br/ >
Если вы делаете запрос POST, все работает одинаково - все проходит через экспорт по умолчанию.
<br />
<br/ >
Чтобы отделить POST от GET и других методов HTTP (PUT, DELETE), найдите значение <code>req.method</code>:
<br />
<br />
<pre class="pre-scrollable">
export default (req, res) =&gt; {
  switch (req.method) {
    case 'GET':
      //...
      break
    case 'POST':
      //...
      break
    default:
      res.status(405).end() //Method Not Allowed
      break
  }
}
</pre>
<br />
<br/ >
В дополнение к <code>req.query</code> и <code>req.method</code>, которые мы уже видели, мы имеем доступ к cookie-файлам, ссылаясь на <code>req.cookies</code>, тело запроса в <code>req.body</code>.
<br />
<br/ >
Под капотом все это работает на Micro, библиотеке, которая поддерживает асинхронные HTTP-микросервисы, созданной той же командой, которая создала Next.js.
<br />
<br/ >
Вы можете использовать любое промежуточное ПО <a href="https://github.com/vercel/micro" target="_blank" rel="nofollow noopener" title="Micro official on gitHub">Micro</a> в наших маршрутах API, чтобы добавить больше функциональности.
<br />
<br/ >
<h2 id="run">Выполнять код только на стороне сервера или на стороне клиента</h2>
В ваших компонентах страницы вы можете выполнить код только на стороне сервера или на стороне клиента, проверив свойство окна.
<br />
<br/ >
Это свойство существует только внутри браузера, поэтому вы можете проверить
<br />
<br />
<pre class="pre-scrollable">
if (typeof window === 'undefined') {

}
</pre>
<br />
<br/ >
и добавьте серверный код в этот блок.
<br />
<br/ >
Точно так же вы можете выполнить код на стороне клиента, только проверив
<br />
<br />
<pre class="pre-scrollable">
if (typeof window !== 'undefined') {

}
</pre>
<br />
<br/ >
<div class="alert alert-info">
JS Совет: здесь мы используем оператор <code>typeof</code>, потому что мы не можем обнаружить значение, которое не определено другими способами. Мы не можем сделать <code>if (window === undefined)</code>, потому что мы получили бы ошибку "окно не определено" - ("window is not defined" runtime error) во время выполнения.
</div>
<br />
<br/ >
Next.js, как оптимизация во время сборки, также удаляет код, который использует эти проверки из пакетов. Пакет на стороне клиента не будет включать содержимое, заключенное в блок <code>if (typeof window === 'undefined') {}</code>.
<br />
<br/ >
<h2 id="deploy">Развертывание-Deploying рабочей версии</h2>
Развертывание приложения всегда остается последним в руководствах.
<br />
<br/ >
Здесь я хочу представить его на ранней стадии, просто потому, что развернуть приложение Next.js настолько просто, что мы можем погрузиться в него сейчас, а затем перейти к другим более сложным темам.
<br />
<br/ >
Помните, в главе <a href="#install" target="_blank" rel="nofollow noopener" title="">«Как установить Next.js»</a> я говорил вам добавить эти 3 строки в раздел скрипта package.json:
<br />
<br/ >
<pre class="pre-scrollable">
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
</pre>
<br />
<br/ >
Мы использовали <code>npm run dev</code> до сих пор, чтобы вызвать следующую локально установленную команду в <code>node_modules/next/dist/bin/next</code>. Это запустило сервер разработки, который предоставил нам исходные карты и горячую перезагрузку кода, две очень полезные функции при отладке.
<br />
<br/ >
Эту же команду можно вызвать для создания веб-сайта с флагом сборки, запустив команду <code>npm run build</code>. Затем эту же команду можно использовать для запуска производственного приложения, передающего флаг запуска, путем запуска <code>npm run start</code>.
<br />
<br/ >
Эти 2 команды - те, которые мы должны вызывать для успешного развертывания рабочей версии нашего сайта локально. Рабочая версия высоко оптимизирована и не содержит исходных карт и других вещей, таких как горячая перезагрузка кода, которая не будет полезна для наших конечных пользователей.
<br />
<br/ >
Итак, давайте создадим производственное развертывание нашего приложения. Постройте это, используя:
<br />
<br/ >
<div class="cmd">
npm run build
</div>
<br />
<br/ >
<div class="separator" style="clear: both; text-align: center;"><a href="https://4.bp.blogspot.com/-ILaGyUgV12I/Xu-MbNjrKfI/AAAAAAAAGck/0_Z_hlrpsjkoAt1axPPx-FTe62ts-mRvgCLcBGAsYHQ/s1600/next-35.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://4.bp.blogspot.com/-ILaGyUgV12I/Xu-MbNjrKfI/AAAAAAAAGck/0_Z_hlrpsjkoAt1axPPx-FTe62ts-mRvgCLcBGAsYHQ/s640/next-35.jpg" width="640" height="448" data-original-width="600" data-original-height="420" /></a></div>
<br />
<br/ >
Выходные данные команды говорят нам, что некоторые маршруты (<code>/</code> и <code>/blog</code> теперь представлены в виде статического HTML, а <code>/blog/[id]</code> будет обслуживаться серверной частью Node.js.
<br />
<br/ >
Затем вы можете запустить <code>npm run start</code> для локального запуска рабочего сервера:
<br />
<br/ >
<div class="separator" style="clear: both; text-align: center;"><a href="https://4.bp.blogspot.com/-SZ1Cdin-Dmw/Xu-NXCeDwXI/AAAAAAAAGcs/PmPHCRHTg7811het-fbETAHqsOASOqLGACLcBGAsYHQ/s1600/next-36.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://4.bp.blogspot.com/-SZ1Cdin-Dmw/Xu-NXCeDwXI/AAAAAAAAGcs/PmPHCRHTg7811het-fbETAHqsOASOqLGACLcBGAsYHQ/s640/next-36.jpg" width="640" height="155" data-original-width="600" data-original-height="145" /></a></div>

<br />
<br/ >
Идем на <mark>http://localhost:3000</mark> (кстати, обратите внимание, что именно 3000, а не 3001) и посмотрим нам локальную версию приложения.
<br />
<br/ >
<h2 id="deploy-now">Развертывание на Now</h2>

В предыдущей главе мы развернули приложение Next.js локально.
<br />
<br/ >
Как мы развернем его на реальном веб-сервере, чтобы другие люди могли получить к нему доступ?
<br />
<br/ >
Один из самых простых способов развертывания приложения Next - через платформу Now, созданную Zeit, той же компанией, которая создала проект Open Source Next.js. Вы можете использовать сейчас для развертывания приложений Node.js, статических веб-сайтов и многого другого.
<br />
<br/ >
Теперь процесс развертывания и распространения приложения становится очень, очень простым и быстрым, и в дополнение к приложениям Node.js они также поддерживают развертывание Go, PHP, Python и других языков.
<br />
<br/ >
Вы можете думать об этом как о «облаке», поскольку вы на самом деле не знаете, где будет развернуто ваше приложение, но вы знаете, что у вас будет URL-адрес, по которому вы сможете добраться до него.
<br />
<br/ >
Теперь вы можете начать пользоваться бесплатным щедрым планом, который в настоящее время включает 100 ГБ хостинга, 1000 вызовов функций без сервера в день, 1000 сборок в месяц, 100 ГБ пропускной способности в месяц и одно местоположение CDN. Страница с ценами помогает получить представление <a href="https://vercel.com/pricing" target="_blank" rel="nofollow noopener" title="pricing page Now">о расходах</a>, если вам нужно больше.
<br />
<br/ >
Лучший способ начать использовать Now - использовать официальный CLI Now:
<br />
<br/ >
<div class="cmd">

npm install -g now

</div>
<br />
<br />
Как только команда станет доступна, запустите
<br />
<br/ >
<div class="cmd">

now login

</div>
<br />
<br />
и приложение спросит вас о вашей электронной почте.
<br />
<br/ >
Если вы еще не зарегистрировались, создайте учетную запись на <a href="https://zeit.co/signup" target="_blank" rel="nofollow noopener" title="Регистрация на Now">https://zeit.co/signup</a>, прежде чем продолжить, а затем добавьте свою электронную почту в клиент CLI.
<br />
<br/ >
После этого из корневой папки проекта Next.js запустите
<br />
<br/ >
<div class="cmd">

now

</div>
<br />
<br />
и приложение будет немедленно развернуто в облаке Now, и вам будет предоставлен уникальный URL-адрес приложения:
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://1.bp.blogspot.com/-ZvfdnqAl-Hg/Xu-SN8LE0wI/AAAAAAAAGc4/Tg4MVnL6ZqImSqzva2OjzZk-B0PJhgz6QCLcBGAsYHQ/s1600/next-37.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-ZvfdnqAl-Hg/Xu-SN8LE0wI/AAAAAAAAGc4/Tg4MVnL6ZqImSqzva2OjzZk-B0PJhgz6QCLcBGAsYHQ/s640/next-37.jpg" width="640" height="283" data-original-width="962" data-original-height="426" /></a></div>
<br />
<br />
Почему так много?
<br />
<br />

Первый - это URL, идентифицирующий развертывание. Каждый раз, когда мы разворачиваем приложение, этот URL будет меняться.
<br />
<br />

Вы можете протестировать сразу, изменив что-то в коде проекта и снова запустив сейчас:
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://2.bp.blogspot.com/-jehmmqgFw8Q/Xu-SzWgi-pI/AAAAAAAAGdA/hUNaBr5SOCsI_qNqu-Tjh7NstX_dwEqDQCLcBGAsYHQ/s1600/next-38.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-jehmmqgFw8Q/Xu-SzWgi-pI/AAAAAAAAGdA/hUNaBr5SOCsI_qNqu-Tjh7NstX_dwEqDQCLcBGAsYHQ/s640/next-38.jpg" width="640" height="220" data-original-width="962" data-original-height="330" /></a></div>
<br />
<br />
Другие 2 URL не изменятся. Первый случайный, второй - имя вашего проекта (по умолчанию это папка текущего проекта, имя вашей учетной записи, а затем now.sh.
<br />
<br />
Если вы посетите URL, вы увидите приложение, развернутое в производство.
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://2.bp.blogspot.com/-ECLqamOHGO4/Xu-TRE_WeEI/AAAAAAAAGdI/ZgHa7TsngW4zTCZsXDTH6_3fh7d4NXN0QCLcBGAsYHQ/s1600/next-39.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-ECLqamOHGO4/Xu-TRE_WeEI/AAAAAAAAGdI/ZgHa7TsngW4zTCZsXDTH6_3fh7d4NXN0QCLcBGAsYHQ/s640/next-39.jpg" width="640" height="390" data-original-width="481" data-original-height="293" /></a></div>
<br />
<br />
Вы можете настроить сейчас, чтобы обслуживать сайт в своем собственном домене или поддомене, но я не буду сейчас углубляться в это.
<br />
<br />
Субдомена <mark>now.sh</mark> достаточно для тестирования.
<br />
<br />

<h2 id="analiz">Анализируем комплекты приложений</h2>
Next.js предоставляет нам способ проанализировать сгенерированные пакеты кода.
<br />
<br />
Откройте файл <mark>package.json</mark> приложения и в разделе скриптов добавьте эти 3 новые команды:
<br />
<br />
<pre class="pre-scrollable">
"analyze": "cross-env ANALYZE=true next build",
"analyze:server": "cross-env BUNDLE_ANALYZE=server next build",
"analyze:browser": "cross-env BUNDLE_ANALYZE=browser next build"
</pre>
<br />
<br/ >
вот так:
<br />
<br />
<pre class="pre-scrollable">
{
  "name": "firstproject",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "next -p 3001",
    "build": "next build",
    "start": "next start",
    <span class="red">"analyze": "cross-env ANALYZE=true next build",
    "analyze:server": "cross-env BUNDLE_ANALYZE=server next build",
    "analyze:browser": "cross-env BUNDLE_ANALYZE=browser next build"</span>
  },
  "dependencies": {
    "next": "^9.4.4",
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  }
}

</pre>
<br />
<br/ >
затем установите эти 2 пакета:
<br />
<br />
<div class="cmd">
npm install --dev cross-env @next/bundle-analyzer<br />
#or<br />
yarn add cross-env @next/bundle-analyzer --dev<br />
</div>
<br />
<br />
Создайте файл <mark>next.config.js</mark> в корне проекта со следующим содержимым:
<br />
<br />
<mark>next.config.js</mark>
<pre class="pre-scrollable">
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});

</pre>
<br />
<br/ >
Теперь запустим:
<br />
<br />
<div class="cmd">
npm run analyze<br />
# or<br />
yarn run analyze<br />
</div>
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://4.bp.blogspot.com/-0nEmhrJZruI/Xu-bwgTlH4I/AAAAAAAAGdU/rk3a5oLYZdQOqy7hBHVrThUckp3SXD48gCLcBGAsYHQ/s1600/next-40.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://4.bp.blogspot.com/-0nEmhrJZruI/Xu-bwgTlH4I/AAAAAAAAGdU/rk3a5oLYZdQOqy7hBHVrThUckp3SXD48gCLcBGAsYHQ/s640/next-40.jpg" width="640" height="315" data-original-width="600" data-original-height="295" /></a></div>

<br />
<br />
Это должно открыть 2 страницы в браузере. Одну для клиентских пакетов и другую для серверных:

<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://2.bp.blogspot.com/-i_-7IOBMa6I/Xu-c2UCU96I/AAAAAAAAGdc/L4ex8FVi2_IQGD0Kp6LMfT73ZsiDvTxgwCLcBGAsYHQ/s1600/next-41.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-i_-7IOBMa6I/Xu-c2UCU96I/AAAAAAAAGdc/L4ex8FVi2_IQGD0Kp6LMfT73ZsiDvTxgwCLcBGAsYHQ/s640/next-41.jpg" width="640" height="323" data-original-width="600" data-original-height="303" /></a></div>
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://4.bp.blogspot.com/-NkdOMrtDpMo/Xu-c9XLOH9I/AAAAAAAAGdg/36fYbpjrMUYdWqH3zthGevlR2HhIbdCygCLcBGAsYHQ/s1600/next-42.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://4.bp.blogspot.com/-NkdOMrtDpMo/Xu-c9XLOH9I/AAAAAAAAGdg/36fYbpjrMUYdWqH3zthGevlR2HhIbdCygCLcBGAsYHQ/s640/next-42.jpg" width="640" height="359" data-original-width="600" data-original-height="337" /></a></div>

<br />
<br />
Это невероятно полезно. Вы можете проверить, что занимает больше всего места в пакетах, а также использовать боковую панель для исключения пакетов, чтобы упростить визуализацию меньших:
<br />
<br />
<div class="separator" style="clear: both; text-align: center;"><a href="https://4.bp.blogspot.com/-1UAzQT47tcU/Xu-dh0ynqbI/AAAAAAAAGds/phoeWoIzFGcuCjrPo2RArQ27rDPfqtHzgCLcBGAsYHQ/s1600/next-43.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://4.bp.blogspot.com/-1UAzQT47tcU/Xu-dh0ynqbI/AAAAAAAAGds/phoeWoIzFGcuCjrPo2RArQ27rDPfqtHzgCLcBGAsYHQ/s640/next-43.jpg" width="640" height="321" data-original-width="600" data-original-height="301" /></a></div>
<br />
<br />
<h2 id="lazy">Ленивая загрузка модулей.</h2>
Возможность визуально анализировать пакет великолепна, потому что мы можем очень легко оптимизировать наше приложение.
<br />
<br />
Скажем, нам нужно загрузить библиотеку Moment в наши записи в блоге. Погнали:
<br />
<br />
<div class="cmd">
npm install moment<br />
# or<br />
yarn add moment<br />
</div>
<br />
<br />
включить его в проект.
<br />
<br />
Теперь давайте смоделируем тот факт, что он нам нужен на двух разных маршрутах: <mark>/blog</mark> и  <mark>/blog/[id]</mark>.
<br />
<br />
Мы импортируем его в <mark>pages/blog/[id].js</mark>:
<br />
<br />
<pre class="pre-scrollable">
import moment from 'moment'

...

const Post = props =&gt; {
  return (
    &lt;div&gt;
      &lt;h1&gt;{props.post.title}&lt;/h1&gt;
      &lt;p&gt;Published on {moment().format('dddd D MMMM YYYY')}&lt;/p&gt;
      &lt;p&gt;{props.post.content}&lt;/p&gt;
    &lt;/div&gt;
  )
}
</pre>
<br />
<br/ >
Я просто добавляю сегодняшнюю дату, как пример.
<br />
<br/ >
Это будет включать <mark>Moment.js</mark> в комплект страницы поста блога, как вы можете увидеть, запустив <code>npm run analyze</code>:
<br />
<br/ >
<div class="separator" style="clear: both; text-align: center;"><a href="https://1.bp.blogspot.com/-P3v-xmaTTQM/XvBmK0Qj_KI/AAAAAAAAGd4/4TqqVQ6KIRMoCgBStlDzZ-JwpthYpS-FQCLcBGAsYHQ/s1600/next-44.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-P3v-xmaTTQM/XvBmK0Qj_KI/AAAAAAAAGd4/4TqqVQ6KIRMoCgBStlDzZ-JwpthYpS-FQCLcBGAsYHQ/s640/next-44.jpg" width="640" height="286" data-original-width="600" data-original-height="268" /></a></div>

<br />
<br/ >
Обратите внимание, что теперь у нас есть желтая запись в <mark>/blog/[id]</mark>, маршрут, к которому мы добавили <mark>Moment.js</mark>!
<br />
<br/ >
Он довольно сильно увеличился. И это потому, что сама библиотека Moment.js имеет размер 349 КБ.
<br />
<br/ >
Визуализация клиентских пакетов теперь показывает нам, что больший пакет - это страница, которой раньше было очень маленькой. И 99% его кода - это <mark>Moment.js</mark>.
<br />
<br/ >
<div class="separator" style="clear: both; text-align: center;"><a href="https://4.bp.blogspot.com/-fttwNYdqLlw/XvBp6YL0mDI/AAAAAAAAGeE/sgfFJyMBX1ArjPszU0FcG92hwgJQyo5YgCLcBGAsYHQ/s1600/next-45.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://4.bp.blogspot.com/-fttwNYdqLlw/XvBp6YL0mDI/AAAAAAAAGeE/sgfFJyMBX1ArjPszU0FcG92hwgJQyo5YgCLcBGAsYHQ/s640/next-45.jpg" width="625" height="640" data-original-width="573" data-original-height="587" /></a></div>
<br />
<br/ >
Каждый раз, когда мы загружаем сообщение в блоге, мы собираемся передать весь этот код клиенту. Что не идеально.
<br />
<br/ >
Одним из исправлений было бы поискать библиотеку меньшего размера, поскольку <mark>Moment.js</mark> не известен своей легковесностью (особенно из коробки со всеми включенными локалями), но давайте предположим ради примера, что мы должны использовать именно её.
<br />
<br/ >
Вместо этого мы можем отделить весь код <mark>Moment.js</mark> в отдельный пакет.
<br />
<br/ >
Как? Вместо того, чтобы импортировать Moment на уровне компонента, мы выполняем асинхронный импорт внутри <code>getInitialProps</code> и вычисляем значение для отправки компоненту.
<br />
<br/ >
Помните, что мы не можем вернуть сложные объекты внутри возвращенного объекта <code>getInitialProps ()</code>, поэтому мы вычисляем дату внутри него:
<br />
<br />
<pre class="pre-scrollable">
import posts from "../../posts.json";

const Post = (props) =&gt; {
  return (
    &lt;div&gt;
      &lt;h1&gt;{props.post.title}&lt;/h1&gt;
      &lt;p&gt;Published on {props.date}&lt;/p&gt;
      &lt;p&gt;{props.post.content}&lt;/p&gt;
    &lt;/div&gt;
  );
};

Post.getInitialProps = async ({ query }) =&gt; {
  const moment = (await import("moment"))<span class="red">.default()</span>;
  return {
    date: moment.format("dddd D MMMM YYYY"),
    post: posts[query.id],
  };
};

export default Post;

</pre>
<br />
<br/ >

Видите этот специальный вызов <code>.default ()</code> после импорта? Это необходимо для ссылки на экспорт по умолчанию в динамическом импорте (см. <a href="https://v8.dev/features/dynamic-import" target="_blank" rel="nofollow noopener" title="dynamic-import">Https://v8.dev/features/dynamic-import</a>)   
<br />
<br/ >
Теперь, если мы снова запустим <code>npm run analyze</code>, мы увидим это:
<br />
<br/ >
<div class="separator" style="clear: both; text-align: center;"><a href="https://1.bp.blogspot.com/-uzeKxmUcNDA/XvBr37OeHVI/AAAAAAAAGeg/QUgjCjiD_2wUPpWduYEVj7GZ9zF56cZ2gCLcBGAsYHQ/s1600/next-46.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-uzeKxmUcNDA/XvBr37OeHVI/AAAAAAAAGeg/QUgjCjiD_2wUPpWduYEVj7GZ9zF56cZ2gCLcBGAsYHQ/s640/next-46.jpg" width="640" height="290" data-original-width="600" data-original-height="272" /></a></div>

<br />
<br/ >
Наш пакет <mark>/blog/[id]</mark> снова очень маленький, так как Moment был перемещен в собственный файл пакета, загружаемый браузером отдельно.
<br />
<br/ >

<h2 id="where">Куда идти дальше?</h2>
Есть еще много информации о Next.js. Я не говорил об управлении сессиями пользователей с помощью входа в систему, без сервера, управлении базами данных и так далее.
<br />
<br/ >
Цель этого Руководства не состоит в том, чтобы научить вас всему, но вместо этого оно призвано постепенно познакомить вас со всей мощью Next.js.
<br />
<br/ >
Следующий шаг, который я рекомендую, - внимательно прочитать официальную документацию Next.js, чтобы узнать больше обо всех функциях и возможностях, о которых я не говорил, и взглянуть на все дополнительные функции, представленные плагинами Next.js. некоторые из которых довольно удивительны.
<br />
<br/ >










<br />
<br />

<div class="course">
Хотите освоить самые современные методы написания React приложений? Надоели простые проекты? Нужны курсы, книги, руководства, индивидуальные занятия по React и не только? Хотите стать разработчиком полного цикла, освоить стек MERN, или вы только начинаете свой путь в программировании, и не знаете с чего начать, то пишите через форму связи, подписывайтесь на мой канал в Телеге, вступайте в группу на Facebook.
</div>
<br />
<br/ >

Удачного кодирования!
<br />
<br/ >
<hr/>
<br />
<br/ >
<small>Выражаю особую благодарность <a href="https://www.freecodecamp.org/news/the-next-js-handbook/#adding-a-second-page-to-the-site" target="_blank" rel="nofollow noopener" title="Flavio Copes - The Next.js Handbook">Flavio Copes</a>, который вдохновил меня на этот труд.</small>






<a href="https://www.freecodecamp.org/news/the-next-js-handbook/#adding-a-second-page-to-the-site" target="_blank" rel="nofollow noopener" title=""></a>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
<div class="separator" style="clear: both; text-align: center;">

<a href="https://4.bp.blogspot.com/-sW9eHmrO80c/Wtit6bDdy2I/AAAAAAAAEZE/nUyh3g6qelwQThPmkWaRBQzfU6WFnbecwCLcBGAs/s320/sign.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" src="https://4.bp.blogspot.com/-sW9eHmrO80c/Wtit6bDdy2I/AAAAAAAAEZE/nUyh3g6qelwQThPmkWaRBQzfU6WFnbecwCLcBGAs/s320/sign.pngg"style="border: none; box-shadow: none;"
 /></a></div>
</div>
<!--https://3.bp.blogspot.com/-Q0f3O0b9xlE/Vs8FJveN2EI/AAAAAAAAHlg/Zz4507IKMGs/s1600/Screenshot%2B%25281%2529.png-->
<br />
<div>
Телеграм канал - <b>Full Stack JavaScript Developer</b>
<a href="https://t.me/full_stack_js" target="_blank" title="Full Stack JavaScript Developer">
<img border="0" src="https://1.bp.blogspot.com/-tOcYPJd8l40/XFrwQkgdRdI/AAAAAAAARW8/95top3bo8L09E4qGNSdIu7N2sx4AX50iACLcBGAs/s1600/gallery-1.png" width="75" height="69" />
</a>
<hr />
<!--Start DONATE-->
Помочь проекту (любая валюта).
<a href="https://secure.wayforpay.com/button/b6f1315a47a45" style="display:inline-block!important;background:#0488cd;background-size:cover;width: 256px!important;height:54px!important;border:none!important;border-radius:14px!important;padding:18px!important;text-decoration:none!important;box-shadow:3px 2px 8px rgba(71,66,66,0.22)!important;text-align:center!important;outline:none!important;" onmouseover="this.style.opacity='0.8';" onmouseout="this.style.opacity='1';">                <span style="font-family:Verdana,Arial,sans-serif!important;font-weight:bold!important;font-size:14px!important;color:#ffffff!important;line-height:18px!important;vertical-align:middle!important;">DONATE</span></a>
<!--END DONATE-->
