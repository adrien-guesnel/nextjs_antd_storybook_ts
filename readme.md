# Next.js + Antd + Storybook + Typescript

Base project to develop your own react web application using :

- Next.js : a server side rendering (SSR) backend server
- Ant design : a complete UI design and React UI library
- Storybook : list and developing UI components
- Typescript : type your code to improve reliability and maintainability

## Getting Started

All configurations has already done, you have only to clone and start developping.

If you want to use this project as a template to create your new repo on Github, use the button "Use this template" at the top.

### Installing

Clone the project

```
git clone git@github.com:adrien-guesnel/nextjs_antd_storybook_ts.git
```

Intall all dependencies

```
// If you use npm
npm install
```

```
// If you use yarn
yarn install
```

### Launch servers

Start the next.js server in developper mode with hot reload

```
npm run dev
```

```
yarn dev
```

Access to your application : http://localhost:3000/

Start the storybook

```
npm run storybook
```

```
yarn storybook
```

Access to your storybook : http://localhost:9001/

## How organize your project

You can create endpoint of your site creating ts files in the pages folder.
This guideline is provided by next.js.

You can develop your react components in the folder components and creates stories files in the same folder to list your components by storybook.

## Example

The project is provided with an example to guide you.

You can delete it when you start your project.
