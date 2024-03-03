# Jsdoc

As mentioned earlier, **Zero-ui** components make use of JSDoc. However, to enable type checking and auto-completion, you need to have TypeScript installed and ensure that its server is running.

## JSDoc Comments

Components will include JSDoc comments to describe and type props, functions, and different variables. Additionally, the types are formatted following the guidelines provided in [jsdoc-typescript-reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html). This allows for constructs such as the following:

```js
/**@type {{title:string,description:string}[]}*/
export let accordionList = [];
```

## `types.d.ts`

All shared or complex types in Zero-ui are stored in the `types.d.ts` file and subsequently imported into the components.

```js
/**@type {import("../../types").asyncButtonAction}*/
export let action;
```
