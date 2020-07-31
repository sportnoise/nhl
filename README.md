<a href="https://sportnoise.github.io/nhl/dist/index.html">Главная страница</a><br>
<a href="https://sportnoise.github.io/nhl/dist/index-window.html">Главная страница (с окнами)</a><br>
<a href="https://sportnoise.github.io/nhl/dist/soon.html">Скоро всё заработает</a><br>
<a href="https://sportnoise.github.io/nhl/dist/404.html">404</a><br>
<a href="https://sportnoise.github.io/nhl/dist/protocols.html">Протоколы СДК</a><br>
<a href="https://sportnoise.github.io/nhl/dist/protocol.html">Протокол</a><br>

<hr>

Папка /dist - для разработчика. Содержит готовые файлы верски. Остальные файлы и папки служебные.

<hr>

<b>Подключены в JS:</b><br>
<ul>
    <li>jQuery и jquery.mousewheel.js</li>
    <li>Tippy - для всплывающих подсказок (https://atomiks.github.io/tippyjs/)</li>
    <li>Swiper - для слайдеров (https://swiperjs.com/)</li>
    <li>jScrollPane - для полосы прокрутки (http://jscrollpane.kelvinluck.com/)</li>
</ul>

<hr>

<b>Bootstrap используются только классы:</b><br>
<ul>
    <li>.container</li>
    <li>.row</li>
    <li>.col-*</li>
    <li>.d-*-none</li>
    <li>.d-*-inline-block</li>
    <li>.d-*-block</li>
    <li>.d-*-flex</li>
</ul>

<hr>

Tab-панели (.tabs-num и .tabs-panel) могут применться как простые ссылки, допустим для подгрузки ajax контента, так и для переключения вкладок. Для этого должны иметь класс *_active (.tabs-num_active и .tabs-panel_active) Пример кода:<br>

<div class="tabs-panel tabs-panel_active" data-for="some-tab">
    <a href="javascript:;" data-id="some-tab1" class="tabs-panel__link tabs-panel__link_active">Первая вкладка</a>
    <a href="javascript:;" data-id="some-tab2" class="tabs-panel__link">Вторая вкладка</a>
</div>

<div class="tabs-items" id="some-tab">
    <div class="tabs-items__item tabs-items__item_active" id="some-tab1">
        Содержимое первой вкладки
    </div>
    <div class="tabs-items__item" id="some-tab2">
        Содержимое второй вкладки
    </div>
</div>