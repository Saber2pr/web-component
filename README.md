# web-component

```html
<!-- custom component -->
<template id="app-main">
  <hr />
  Hello
  <slot></slot>
  <hr />
</template>

<template id="app-root">
  <header>Header</header>
  <app-main>WebComponent!</app-main>
  <footer>Footer</footer>
</template>

<!-- instance -->
<app-root />
```

props...

```html
<!-- custom component -->
<template id="app-main">
  <hr />
  Hello
  <slot></slot>
  <hr />
</template>

<template id="app-root">
  <header style="{{ style }}">This is {{ title }}</header>
  <app-main>WebComponent!</app-main>
  <footer onclick="{{onclick}}">Footer</footer>
</template>

<!-- instance -->
<app-root title="Header" style="color: red;" onclick="alert('footer!!')" />
```
