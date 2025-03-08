# Zero-UI

**Zero-UI** is a simple and friendly library for Svelte UI components. It provides ready-to-use styles and customizable components, following the best practices of UI/UX design. You can effortlessly integrate Zero-UI into your Svelte projects without any complex setup.

## Key Features

1. **Easy to Use**

   - Copy-paste simplicity for a hassle-free experience.

2. **Modular Components**

   - Functional components with clear, local Svelte styles.
   - Simple integration with a modular structure.

3. **Customization Made Simple**

   - Focus on content and logic without dealing with complex style props.
   - Enjoy straightforward customization without unnecessary complications.

4. **Global Theme**

   - Define a global theme using CSS variables for colors, fonts, and more.
   - Adheres to the 60-30-10 color rule.

5. **Different Styles for Everyone**

   - Explore different component variants for various use-cases.
   - Examples include regular and async button styles.

6. **Easy Documentation**

   - Understand and use Zero-UI easily with clear JSDoc documentation.
   - Seamless integration with or without TypeScript.

7. **User-Friendly Design**

   - Crafted with a focus on user experience, ensuring responsiveness and an appealing look.

8. **Zero Setup Headache**

   - Install and use Zero-UI effortlessly with the Zero-UI CLI.
   - Load necessary elements into your project directory with a simple CLI command.

## Getting Started

```bash
pnpm dlx zero-ui-cli
```

## Styles

Add these css variables to your global css file

```css
:root {
  --primaryColor: #3498db;
  --secondaryColor: #e74c3c;
  --backgroundColor: #ffffff;
  --foregroundColor: #1a1a1a;
  --dangerColor: #ff0000;
  --successColor: #27cf22;
  --mutedColor: #505050;
  --h1: clamp(2rem, calc(2rem + ((1vw - 0.48rem) * 0.9722)), 2.5rem);
  --h2: clamp(1.725rem, calc(1.725rem + ((1vw - 0.48rem) * 0.9722)), 2rem);
  --h3: clamp(1.5rem, calc(1.5rem + ((1vw - 0.48rem) * 0.9722)), 1.725rem);
  --h4: clamp(1.275rem, calc(1.275rem + ((1vw - 0.48rem) * 0.3472)), 1.5rem);
  --body: clamp(1rem, calc(1rem + ((1vw - 0.48rem) * 0.1736)), 1.275rem);
  --small: clamp(
    0.875rem,
    calc(0.875remrem + ((1vw - 0.48rem) * 0.1736)),
    1rem
  );
  --border-radius: 0.3rem;
  --bodyFont: Verdana, Geneva, Tahoma, sans-serif;
  --headerFont: Helvetica, sans-serif;
}

/* These global styles are just standard now */
:not(dialog) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

## License

This project is licensed under the [MIT License](https://mit-license.org).
