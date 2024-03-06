# Introduction

**Zero-UI** offers a collection of well-crafted, reusable Svelte components. Easily add them to your project using a command-line tool (CLI). The CLI takes care of copying the chosen components, loading the styling file, and adding a `types.d.ts`  file for TypeScript or JSDoc users.

## Comparing Zero-UI to Shadcn-Svelte

[Shadcn-Svelte](https://www.shadcn-svelte.com) is a great component library, but it can be tricky to integrate into projects that don't use Sveltekit (e.g Laravel). Zero-UI aims to be simpler to use in these situations.

### Styling without Tailwind

Zero-UI utilizes plain CSS for styling instead of Tailwind CSS. This offers two advantages:

1. **Simplicity:** Those unfamiliar with Tailwind can easily customize the components' appearance using familiar CSS syntax.
2. **Leveraging Svelte:** Svelte itself offers built-in features that make writing basic CSS straightforward, reducing the need for additional tools.

### Using JSDoc

While TypeScript offers benefits, it can add complexity for libraries designed for easy integration. Zero-UI chooses **JSDoc** as an alternative, providing helpful information about the components without requiring users to adopt TypeScript. JSDoc offers similar features like type checking and autocompletion, making it a user-friendly choice.

### Theme Your Way

Similar to Shadcn-Svelte, Zero-UI allows you to customize the look and feel of your components using a `theme.css` file. However, Zero-UI uses more general CSS variables that apply to several components, providing a simpler and more flexible approach.
