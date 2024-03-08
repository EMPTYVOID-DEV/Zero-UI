# Theming 

For theming, **Zero-UI** relies on a `theme.css` file that includes a root selector with various CSS variables.
#### Colors

Following the 60-30-10 rule, Zero-UI uses colors with different shades (700, 600, 400, 300) through the `color-mix` CSS function.

```css
--primaryColor: #3498db;
```

The primary color is employed for hover and focus events, active states.

```css
--secondaryColor: #e74c3c;
```

The secondary color is exclusively reserved for crucial actions, such as those in button and link components.

```css
--backgroundColor: #ffffff;
--foregroundColor: #1a1a1a;
```

These variables represent the background and foreground colors of your application.

```css
--dangerColor: #ff0000;
--successColor: #27cf22;
--mutedColor: #505050;
```

These colors are used as support colors.

#### Font Sizes

Zero-UI incorporates a set of responsive fonts, primarily utilizing `small`, `body`, and `h4`.

```css
--h1: clamp(2rem, calc(2rem + ((1vw - 0.48rem) * 0.9722)), 2.5rem);
--h2: clamp(1.725rem, calc(1.725rem + ((1vw - 0.48rem) * 0.9722)), 2rem);
--h3: clamp(1.5rem, calc(1.5rem + ((1vw - 0.48rem) * 0.9722)), 1.725rem);
--h4: clamp(1.275rem, calc(1.275rem + ((1vw - 0.48rem) * 0.3472)), 1.5rem);
--body: clamp(1rem, calc(1rem + ((1vw - 0.48rem) * 0.1736)), 1.275rem);
--small: clamp(0.875rem, calc(0.875rem + ((1vw - 0.48rem) * 0.1736)), 1rem);
```

#### Font Family

Two font pairs are employed by Zero-UI, one for headers and another for body elements.

```css
--bodyFont: Verdana, Geneva, Tahoma, sans-serif;
--headerFont: Helvetica, sans-serif;
```

#### Border-radius

A global border-radius is applied to all components, although exceptions are made when a component has a static radius.

```css
--border-radius: 0.3rem;
```

#### Spacing

Zero-UI maintains consistent negative spacing (padding, gap) in increments of **0.25rem**. Notably, there is no global CSS variable for either padding or gap.

#### Global styles

Zero-UI leverages a standard set of global styles defined within `theme.css`. Exercise caution when introducing additional global styles, as they might inadvertently disrupt component presentation (e.g., word-break).

```css
:not(dialog) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

#### Dark Mode

Switching between dark and light mode in Zero-UI is as simple as toggling CSS variables. Additionally, SvelteKit hooks enable seamless theme setting from cookies.

```css
[data-theme='light']:root {
  --primaryColor: #3498db;
  --secondaryColor: #e74c3c;
  --backgroundColor: #ffffff;
  --foregroundColor: #000000;
  --dangerColor: #ff0000;
  --successColor: #27cf22;
  --mutedColor: #505050;
}

[data-theme='dark']:root {
  --primaryColor: #3498db;
  --secondaryColor: #e74c3c;
  --backgroundColor: #000000;
  --foregroundColor: #ffffff;
  --dangerColor: #ff0000;
  --successColor: #27cf22;
  --mutedColor: #b1b0b0;
}
```


```js
export async function handle({ event, resolve }) {
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => {
      let currentTheme = event.cookies.get('theme');
      if (!currentTheme) {
        currentTheme = 'dark';
        event.cookies.set('theme', currentTheme, {
          path: '/',
          httpOnly: false,
          maxAge: cookieMaxAge,
        });
      }
      return html.replace('data-theme=""', `data-theme="${currentTheme}"`);
    },
  });
  return response;
}
```