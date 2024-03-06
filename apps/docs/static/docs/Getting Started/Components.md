# Components

**Zero-ui** components adhere to specific guidelines to ensure cleanliness and reusability:

### Variants

Each component may have multiple variants representing different use cases. If a component has only one variant, it will be named `default`. Variants can share child components but each has a different entry component. For example, consider the `theme` and `state` toggle.

### Props and Slots

Zero-ui uses props to handle logic and configure components. Notably, components won't receive props to customize styling. To populate components, Zero-ui employs props instead of slots to prevent the creation of large components. However, slots are still utilized when dynamic child components are necessary.

#### Type Prop

The `type` prop is special and used by multiple components. It defines the main color for the component. For instance, a button can exist in various states like disabled, passive, primary, secondary, and danger, each using a different main color.

### Events

In Zero-ui, variant entries can either forward DOM events or generate custom events. If a component requires handling around a particular event or is unable to forward the event, an action needs to be supplied.

### CSS Variables

Zero-ui components utilize global CSS variables and expose local CSS variables for properties that may vary between instances. Examples include `max-width` for a code block and `padding-block` and `padding-inline` for a button.

These can be easily overridden using Svelte CSS variable props:

```html
<MultiPageCode --max-height="400px" />
```

### Icons

Zero-ui houses all its icons within the `icons` folder, each represented as svelte component wrapping an **SVG** with a default width and height set to 24px. To avoid redundancy, every icon exposes a `--icon` CSS variable that components can override.

```css
svg path {
	fill: var(--icon, var(--primaryColor));
}
```

By default, the `--icon` CSS variable is set to `--primaryColor`.
