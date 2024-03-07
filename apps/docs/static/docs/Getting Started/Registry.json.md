# Registry.json

**Zero-ui** maintains a `registry.json` file that stores information about various components. The schema for this file is defined in TypeScript as follows:

```typescript
type Variant = {
    files: string[];
    packages?: string[];
    icons?: string[];
    variants?: string[];
    entry: string;
};

type RegistryType = {
    [component: string]: {
       [variant: string]: Variant;
   };
};
```

## Structure Overview:

1. The `registry.json` file contains different component names as properties.
2. Each component has various variant names as properties.
3. Each variant includes a list of file dependencies, representing the different Svelte components used by the variant.
4. Optionally, each variant may have a list of package dependencies.
5. Optionally, each variant may specify a list of icon dependencies.
6. Variants may also have dependencies on different components' variants (e.g., the alert/dialog variant depend on the dialog/default variant).
7. The entry property within each variant points to the designated entry component.

## Local copy

The **Cli** will create for you a local copy of the registry which contains only the components you chosen.