# Setting up the repository

1. `git clone` this repository.
2. Install NPM and run `npm install --save-dev jest` and `npm install frisby --save-dev` in folder `kursybankucentralnegopl/` to have Jest library, needed for tests in this project. Verify that `./node_modules` folder was created.
3. (Optional) Install Jest plugin for your IDE - for example, I use Visual Studio Code and use the `orta.vscode-jest` extension.
4. Run `npm run test` for running the tests.

# Additionals

- You can run `npm run coverage` to see what percentage of code is covered with unit tests.

- GitHub Actions CI is enabled - with each push for this repository, whole set of tests will be run.

# Sites that we have used to learn TDD

https://www.freecodecamp.org/news/a-quick-introduction-to-test-driven-development-with-jest-cac71cb94e50/

https://jestjs.io/docs/getting-started

https://www.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/tdd-with-jest

https://medium.com/swlh/jest-and-github-actions-eaf3eaf2427d

