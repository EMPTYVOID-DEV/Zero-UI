# Installation

This guide walks you through using the **Zero-UI** command-line tool (CLI) to add its components to your project.

#### 1. Run the CLI:

Open your terminal and type the following command:

```Bash
pnpm dlx zero-ui-cli
```

#### 2. Follow the prompts:

The CLI will ask two questions:

- **Where to place components:** Tell the CLI where you want the components placed. By default, they go in `src/lib/zeroUi`.
- **Using TypeScript or JSDoc:** Let the CLI know if you're using TypeScript or JSDoc by answering yes or no. This affects whether a `types.d.ts` file is copied.
#### 3. Choose components:

Pick the specific component variations you want from the list provided by the CLI.
#### 4. Installation and copying:

The CLI will automatically load the necessary files and install any required packages.
#### 5. Import theme.css:

Make sure to import `theme.css` globally. For Sveltekit users, simply import it in `+layout.svelte`.

