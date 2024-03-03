# Theming 

For theming, **Zero-ui** relies on a `theme.css` file that includes a root selector with various CSS variables.
#### Colors

Following the 60-30-10 rule, Zero-ui uses colors with different shades (700, 600, 400, 300) through the `color-mix` CSS function.

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

**Zero-ui** incorporates a set of responsive fonts, primarily utilizing `small`, `body`, and `h4`.

```css
--h1: clamp(2rem, calc(2rem + ((1vw - 0.48rem) * 0.9722)), 2.5rem);
--h2: clamp(1.725rem, calc(1.725rem + ((1vw - 0.48rem) * 0.9722)), 2rem);
--h3: clamp(1.5rem, calc(1.5rem + ((1vw - 0.48rem) * 0.9722)), 1.725rem);
--h4: clamp(1.275rem, calc(1.275rem + ((1vw - 0.48rem) * 0.3472)), 1.5rem);
--body: clamp(1rem, calc(1rem + ((1vw - 0.48rem) * 0.1736)), 1.275rem);
--small: clamp(0.875rem, calc(0.875rem + ((1vw - 0.48rem) * 0.1736)), 1rem);
```

#### Font Family

Two font pairs are employed by **Zero-ui**, one for headers and another for body elements.

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

**Zero-ui** maintains consistent negative spacing (padding, gap) in increments of **0.25rem**. Notably, there is no global CSS variable for either padding or gap.

#### Global styles

Try avoiding global styles that may break components styling.For example `margin` set to 0 will break the dialog element positioning.