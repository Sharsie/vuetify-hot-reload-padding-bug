# Vuetify v-content padding bug
Hot reloading the app causes v-content to increment its padding

## Steps taken to create the minimum reproduction
```
vue create my-app
```
Manually select features (use Typescript, select defaults for everything else):   
- Check the features needed for your project: **Babel, TS, Linter**
- Use class-style component syntax? **Yes**
- Use Babel alongside TypeScript (required for modern mode, auto-detected 
polyfills, transpiling JSX)? **Yes**
- Pick a linter / formatter config: **TSLint**
- Pick additional lint features: (Press <space> to select, <a> to toggle all, 
<i> to invert selection) **Lint on save**
- Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? 
**In dedicated config files**
``` 
vue add vuetify
```
Select Configure (advanced) (do not use pre-made template, select defaults for
everything else):
- Use a pre-made template? (will replace App.vue and HelloWorld.vue) **No**
- Use custom theme? **No**
- Use custom properties (CSS variables)? **No**
- Select icon font **Material Design Icons**
- Use fonts as a dependency (for Electron or offline)? **No**
- Use a-la-carte components? **Yes**
- Select locale **English**

Add vuetify to tsconfig types to support A-la-carte (full install does not fix the problem)
```
    "types": [
      "webpack-env",
      "vuetify",
    ],
```

Rename `App.vue` to `App.tsx`, move `<template>` to `render()` function

Change import of App in `main.ts` from
```
import App from './App.vue';
```
to
```
import App from './App';
```

Accept hot reloading in `main.ts`
```
if ((module as any).hot) {
  (module as any).hot.accept();
}
```

Run the project using `npm run serve`

Make sure `<v-content>` has padding around it using either `<v-app-bar app>` or 
navigation drawer/footer

Check the padding of `<main>`

Trigger hot reload

Check the padding again 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
