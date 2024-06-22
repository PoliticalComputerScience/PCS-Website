# React Typescript Best Practices

How to keep your code clean, readable, scalable, and maintable. This doc should serve as a guide for writing code and be grounds for approving or rejecting a PR. This is a long list of things to check so buckle in and don't worry if you accidentally miss one of these standards in your first PR-- it's all part of the learning process 😊

## Table of Contents

- [Writing Accurate Code](#writing-accurate-code)
    - [Modern Code](#modern-code)
- [Project Structure](#project-structure)
- [Docs, Commenting, and Component Structure](#docs-commenting-and-component-structure)
    - [Interfaces](#interfaces)
    - [Constants](#constants)
    - [JSDocs Comments](#jsdocs-comments)
    - [The `index.ts` File](#the-indexts-file)
    - [TODO: Styling](#todo-styling)
- [TODO: Testing](#todo-testing)

## Writing Accurate Code
All code should be written using as much functionaly from the latest version of ECMAScript, which is ES14 (released in 2024) and should certainly not use functionality from before ES6. Here are some things to look out for in your code for keeping your code up to date and exercising best practices:

- When defining types for variables, don't use the `any` keyword. The only use case for the `any` keyword is when a library does not have types defined for TypeScript, but if that's the case, you probably shouldn't be using that library at all.
- Dependencies you add through `npm` should be used, well-known, and well maintained. If the last update was not recent, please don't use that dependency as it will contribute to an outdated package as certain aspects of our project evolve without that dependency. Relying on backwards compatibility is not a good idea.
- Delete all unused imports. These slow down our code.
- Please avoid importing everything from a file. Only import the variables and functions you need.
- Please use `camelCase` and `PascalCase` everywhere. Interfaces and Objects should be named using `PascalCase`, and all variables should be named using `camelCase`. The only use case for dashed names like `react-typescript-best-practices.md` is in markdown file names. Additionally, React component file names should be capitalized and other file names should be lowercase (following `camelCase`). Never use `snake_case`.
- All files should end with a new line.

### Modern Code

- Don't use commonJS. This essentially means to always use the `import` keyword rather than `require` and to use `export` and `export default` words instead of `module.exports`.
- Never use the `var` variable declaration. Always use `const` and `let` appropriately. By default, you should set all variables to `const` unless they are not final. Variables which are set to `let` and are not reassigned should be grounds for rejecting a PR.
- Don't use the `function` keyword unless absolutely necessary. There are seldom use cases for it, but always prefer the use of arrow functions. For example, instead of writing this first block, write the second block
```
... JSDoc comments
function squareNumber(num: number): number {
    return num * num;
} ;
```
```
... JSDoc comments
const squareNumber = (num: number): number => {
    return num * num;
};
```

## Project Structure
- Always define shared **static** resources in the `public` folder. This includes images, `JSON`, and `csv`. You should never have a `.ts` or `.tsx` file in the `public` folder
    - Contents in the `public` folder should always be accessed via absolute pathing (the folder can be accessed by starting a filepath with `/`, so `public/images/pcsLogo.jpg` can be accessed with `/images/pcsLogo.jpg`)
- All valid TypeScript code should be in the `src` folder and in the proper directory. This includes interfaces, helper functions, and constants.
- Pages should be as abstracted and readable as possible. This means to avoid adding eccess and repeat code into files that is not necessary, and you should take advantage of abstracting interface definitions, constants, and even helper functions into different files.
* We will hopefully move to absolute pathing soon, but there is still more set up to do with `jest` among other things, so it is fine to use relative pathing for now. Just make sure to access the `public` folder with a `/`.
Our project structure is defined like this:
```
app
├── public/
│   ├── data/
│   ├── images/
│   
├── src/
│   ├── components/
|   |   ├── buttons/
|   |   ├── forms/
|   |   └── etc./
│   ├── utils/
|   |   ├── constants/
|   |   └── interfaces/
│   ├── pages/
|   └── tests/
|
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── package.json
└── main.tsx <-- Entry point for the app
```

## Docs, Commenting, and Component Structure

React components should be commented and documented well, and types should be clearly defined. Here are some guidelines.

### Interfaces
Components with parameters should have types defined in an interface. That interface should NOT be defined at the top of the component file, but rather in the `/utils/interfaces/props.ts` file and exported. This makes it easier if multiple components need to use the same interface. 

When defining an interface for a React component, use the following structure:
```
/**
 * [Interface description]
 */
export interface [ReactComponentName]Props {
    /**
     * Prop description
     */
    [propName]: [type];

    /**
     * Prop description
     */
    [propName]: [type];
    ...
}
```
If an interface is used my multiple React components, then use a descriptive name in place of `ReactComponentName`.

### Constants
Avoid the use of magic strings within React components. A magic string is hardcoded text directly into the `HTML` content of the React component. An example of this is:
```
// ExampleItemCardReactComponent.tsx

...JSDocs
const ExampleItemCardReactComponent = () => {
        return (
            <div>
                <h1>This is a magic string that would be the header of an item card.</h1>
            </div>
        );
};
```
We should instead define it as such, with a comment describing it

```
// ~/utils/constants/exampleItemCardReactComponentConstants.ts

// The header content for the ExampleItemCardReactComponentConstants component
export const ITEM_CARD_HEADER = "This is no longer a magic string and it has a descriptive name to signify it is the header of an item card"

...

// ExampleItemCardReactComponent.tsx

import { ITEM_CARD_HEADER } from "path/to/utils/constants/exampleItemCardReactComponent.tsx";

...JSDocs
const ExampleItemCardReactComponent = () => {
        return (
            <div>
                <h1>{ITEM_CARD_HEADER}</h1>
            </div>
        );
};
```

This not only reduces clutter from component code, but it makes it more readable and makes string fields descriptive for future developers. It also encourages maintainability in case that constant is used in multiple places. The magic string was just an example, but abstracting other types into constants is good practice as well.

If a constant is inspecific to a single React component, then put it in the `~/utils/constants/globalConstants.ts` folder.

### JSDocs Comments
Remember that a React component is a function which returns an object which the DOM can render. As such, it should be commented like any normal function using JSDocs. If it has props as parameters, then that props should be destructured and commented as well. Here is an example for a button component:
```
import React from 'react';
import { ButtonProps } from "path/to/utils/interfaces/props.ts";

/**
 * A simple button component.
 *
 * @component
 * @param {ButtonProps} props - props for a Button component.
 * @param {string} text - The text to be displayed on the button.
 * @param {() => void} onClick - The click event handler.
 * @returns {JSX.Element} The rendered button component.
 *
 * @example
 * // Render a button with the text "Click Me"
 * <Button text={"Click Me"} onClick={() => console.log('Button clicked!')} />
 */
function Button({ text, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
```

Note that it may seem like we're using a magic string here in the form of `"Click Me"` and `"Button clicked!"` but because this is in a comment and an example for how to use the component rather than in the component function itself, no need to make up abstracted variables as that could create confusion.

A good rule of thumb for commenting is:
* Every component should have a comment
* It should use the `@component` annotation
* Both the props (if present) and destructed prop elements (if present) should be denoted with the `@param` annotation and should have type definitions
* You should create a short example which is descriptive enough for someone to know how to use the component. Use the `@example` annotation for this.
* Bonus points if you link relevant object definitions and websites with the `{@link}` annotation, but this isn't required.

If you create a PR with components that do not fit these guidelines, it will be rejected. For more information about JSDoc, you can read [here](https://jsdoc.app/).

### The `index.ts` File

To make our lives easier, we will also have an `index.ts` file per each `~/components/` subfolder. So for example, if we had the following structure in components:

```
├── components/
|   ├── buttons/
|   |   ├── ButtonComponentOne
|   |   |   ├── ButtonComponentOne.tsx
|   |   |   └── ButtonComponentOneTest.ts
|   |   ├── ButtonComponentTwo
|   |   |   ├── ButtonComponentTwo.tsx
|   |   |   └── ButtonComponentTwoTest.ts
|   |   ├── index.ts <-- present in every components subfolder
```
If we didn't have an `index.ts` file, then importing components would be a nightmare. For example, an import path may look like this:
```
import ButtonComponentOne from "path/to/components/buttons/ButtonComponentOne/ButtonComponentOne"
```

Yikes! We can definitely clean that up. Hopefully using absolute importing can be implemented soon, but at the very least, we should abstract this import through an `index.ts` file, which assumes the folder name for import statements. In this case, we would add the following lines to our `index.ts`:
```
// ~/buttons/index.ts

import ButtonComponentOne from "./ButtonComponentOne/ButtonComponentOne";
import ButtonComponentTwo from "./ButtonComponentTwo/ButtonComponentTwo";

export { ButtonComponentOne, ButtonComponentTwo };
```

With this change, we can now import those components as follows:
```
import ButtonComponentOne from "path/to/components/buttons";
```

Nice! That looks much clearner. This should be the standards for all `component` imports and exports in the components folder.

### TODO: Styling

## TODO: Testing









