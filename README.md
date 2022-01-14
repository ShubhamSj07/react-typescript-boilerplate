## A react-typescript boilerplate including

- `prettier`
- `eslint`
- `lint-staged`
- `husky`

# ![React Typescript Setup](https://img.shields.io/badge/React--Typescript-044289?style=flat)

[Docs](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup/)

- TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- Also a powerful compiler tool which converts typescript to javascript
- It also adds feature of idetifying errors at compile time rather than scratching our head at runtime🥲

# ![Prettier](https://img.shields.io/badge/Prettier-%23DB7093?style=flat)

[Docs](https://prettier.io/)

- An Code formatter
- Supports many languages
- Generate prettier rules [here](https://prettier.io/playground/)

# ![Eslint](https://img.shields.io/badge/Eslint-4B32C3?style=flat)

[Docs](https://eslint.org/)

- Find and fix problems in your JavaScript code making code more consistent.
- We already have `eslint` as an inner-dependency from react-scripts
- To init eslint config run & choose options accordingly

  ```
  npx eslint --init
  ```

<!-- ### Prettier plugin
- We can ask eslint to work with prettier using   ```eslint-config-prettier extension``` -->

# ![Lint-Staged](https://img.shields.io/badge/Lint--Staged-49C41C?style=flat)

[Docs](https://www.npmjs.com/package/lint-staged)

- Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style.

# ![Husky](https://img.shields.io/badge/Husky-yellow?style=flat)

[Docs](https://www.npmjs.com/package/husky)

- Whenever we inti Git in our project, it automatically comes with features called hooks.
- hooks ex: `pre-commit`, `pre-push`, etc.
- If we want to ensure before we actually create a commit using the `git commit`, that our code was properly `linted` and `formatted`, we could write a `pre-commit` Git hook.

# ![Installation](https://img.shields.io/badge/Installation-38427A?style=flat)

1. Clone / Download [this](https://github.com/ShubhamSj07/react-typescript-boilerplate) repo.
2. Inside the project open a terminal and run:

   ```
   yarn install
   ```

   This will install all the project dependencies.

3. To start the development server run:

   ```
   yarn start
   ```

4. Prettier commands

   - Run the below command to get a list of all unformatted code in the project.

     ```
     yarn run format:check
     ```

   - Run the below command to fix the unformatted code!

     ```
     yarn run format:fix
     ```

5. Eslint commands

   - We can run the below script present in package.json

     ```
     yarn run lint
     ```

6. Run parallel commands at once using [concurrently](https://www.npmjs.com/package/concurrently)

- #### Syntax

  ```
   concurrently \"yarn 1st-cmd\" \"yarn run  2st-cmd\" \"yarn run nth-cmd\""
  ```

7. Another great thing about lint-staged is that it automatically does the git add on the modified files. So, if we are doing prettier — write or eslint — fix, we don't have to stage the changes manually.

- #### We do format:fix & run our validate script on the staged files

- #### After `git add .` and `git commit -m "message"`

  the lint-staged kicks in and runs🚀

# ![Author](https://img.shields.io/badge/Author-FF3031?style=flat)

[![Twitter](https://img.shields.io/badge/follow-%40shubhamsj077-1DA1F2?style=flat&logo=Twitter)](https://twitter.com/shubhamsj077)

[![LinkedIn](https://img.shields.io/badge/connect-%40shubhamjadhav-%230077B5?style=flat&logo=LinkedIn)](https://www.linkedin.com/in/shubham-jadhav-77a588192/)
