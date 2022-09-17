In this repo we are going to learn web automation using cypress.

Prerequises for this learning:
1. Node.js
2. npm package manager
3. cypress 10.0
4. Typescript/javascript basic knowledge


Installation:
1. Install Node.js LTS version from "https://nodejs.org/en/download/"
2. Install cypress using below command
   
   npm install cypress --save-dev

3. Use "npx cypress open" command to open the cypress test runner.

Here it contains following file structure

> cypress            -> main folder in which our whole codebase resides
  > downloads        -> 
  > e2e              -> this folder contains specs/filename.cy.js files where our flow resides
  > fixture          -> it contains static peice of data which can be used by our tests
  > plugins          -> plugins file is a special file that executes in Node before the project is loaded
  > support          -> this contains code to be included before your test runs
> cypress.config.js  -> this file is used to store any configuration specific to cypress

Here we are using "http://automationpractice.com/index.php" as our resource to automate
the following flows in it.

  1. Add to card and checkout flow
  2. Category selection flow -> women > Dresses > Summer Dresses
  3. Newsletter subscription flow

