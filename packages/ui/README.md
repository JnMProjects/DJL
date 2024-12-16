# @jackatdjl/djl-ui

A UI Package for Easy Building with Tailwind CSS

**Installation**

To use this package, you'll need to install it along with Tailwind CSS. Here are the installation commands for popular package managers:

- npm: `npm install @jackatdjl/djl-ui`
- yarn: `yarn add @jackatdjl/djl-ui`
- pnpm: `pnpm add @jackatdjl/djl-ui`

**Setting Up Tailwind CSS**

1. Install Tailwind CSS: [Visit the Tailwind CSS website](https://tailwindcss.com/docs/installation) for installation instructions.
2. Initialize Tailwind CSS: Run `npx tailwind init` to create a `tailwind.config.js` file.
3. Create a `globals.css` file (depending on your framework) and add your custom color scheme.
4. Visit [RealtimeColors.com](https://realtimecolors.com) to create a color scheme you like. Export it under the "Custom Code" tab with the "Shadcn" preset.
5. Paste the exported code into your `globals.css` file.
6. Add Tailwind utilities to the top of your `globals.css` file if not already added by `tw init`.
7. Rename `tailwind.config.js` to `tailwind.config.ts` and replace its content with:

```ts
import { default as config } from "@jackatdjl/djl-ui/tailwind";

export default config;
```

**Contribution**

To contribute to this project, follow these steps:

1. Clone the repository: `git clone https://github.com/JackatDJL/djl-ui.git`
2. Enable Corepack if not already enabled.
3. Install dependencies: `yarn`
4. Start the development environment: `yarn dev`

This will start:

- **TsUP**: A tool for building and managing TypeScript projects.
- **Storybook**: A tool for testing and developing UI components in isolation.
- **Next.js App**: A Next.js application that will serve as the official documentation soon.

For more information on these projects, visit their websites:

- [TsUP](https://tsup.dev)
- [Storybook](https://storybook.js.org)
- [Next.js](https://nextjs.org)

**The Story**

I'm passionate about React, Next.js, and component-based development. Like many developers, I started with a tutorial and learned about Shadcn. While Shadcn is great, I realized that copying and adjusting code between projects can become cumbersome. After experiencing this firsthand, I decided to create my own package to simplify the process.

... Long story short, I'm finally done!

Thank you for reading, and I hope you find this package helpful in your projects.
