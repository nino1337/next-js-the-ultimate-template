This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) enriched with state of the art frameworks and features like typescript, storybook, emotion css, etc. See Features.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/livez](http://localhost:3000/api/hlivez). This endpoint can be edited in `pages/api/livez.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Features

### Next.js

- [Homepage](https://nextjs.org/)
- [Github Repository](https://github.com/vercel/next.js/)

[Next.js](https://nextjs.org/) on the other hand is used as our server side renderer. It uses nodejs to render React on the server, so make sure to have a host, that can run node.

### Typescript

- [Homepage](https://www.typescriptlang.org/)
- [Github Repository](https://github.com/microsoft/TypeScript)

TypeScript is a superset of JavaScript that compiles to clean JavaScript output.

### Jest

- [Homepage](https://jestjs.io/)
- [Github Repository](https://github.com/facebook/jest)

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

### React-testing-library

- [Homepage](https://testing-library.com/)
- [Github Repository](https://github.com/testing-library)

React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.

### Emotion Css

- [Homepage](https://emotion.sh/docs/introduction)
- [Github Repository](https://github.com/emotion-js/emotion)

Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.

### Tailwindcss

- [Homepage](https://tailwindcss.com/)
- [Github Repository](https://github.com/tailwindlabs/tailwindcss)

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. As an addition, with the help of [xwind](https://github.com/Arthie/xwind) everything is prepared, that tailwind-classes can be written into styled-components, to make your react components more slim. Unfortunately due to the fact, that tailwindcss can now be jit-compiled, xwind is not working correctly. 

### Storybook

- [Homepage](https://storybook.js.org/)
- [Github Repository](https://github.com/storybookjs/storybook)

Open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.

### Eslint, Prettier, Husky, lint-staged

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky#readme)

Using eslint, prettier and husky gives us the ability to equal code standards and linting across the team.

### Axios

- [Github Repository](https://github.com/axios/axios) 

Promise based HTTP client for the browser and node.js

## Mock mode

An out of the box working mock mode is implemented aswell, if your frontend is tightly coupled to an api, but where you also want to be able to start your app without the need of the api (e.g. the api is offline...). Make sure to adjust the response in the __mocks__ directory. 

To start in mock mode simply run

```yarn dev:mocks```

An env var will be set, that changes axios baseURL to ```http://localhost:3000/api/mocks```. 

If you now call ```http://localhost:3000/api/mocks/randomMythNames```, then a property with key *randomMythNames* is filtered out of the __mocks__/data.json and will be returned. 
