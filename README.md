# web-component

1. custom component

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

2. props

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
3. scoped style
```html
<!-- custom component -->
<template id="app-main">
  <!-- scoped style -->
  <style>
  p {
    color: blue;
  }
  </style>
  <hr />
  <p>Hello</p>
  <slot></slot>
  <hr />
</template>

<template id="app-root">
  <header><p>Header</p></header>
  <app-main><p>WebComponent!</p></app-main>
  <footer>Footer</footer>
</template>

<!-- instance -->
<app-root />
```
