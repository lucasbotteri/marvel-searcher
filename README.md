## Production:

https://marvel-searcher-pi.vercel.app/

## Setting up project for local

1 - Create `.env` file with correct enviroments variables (just copy and paste the ones in `example.env`)
2 -`yarn install`
3- `yarn start`
4- Go to [http://localhost:3000](http://localhost:3000)
5- Enjoy the app!

### Linter and Formatter

We recommend to use VS extension to help you coding because they will run before pushing your code using Huksy and wont let you push if some of the scripts fails

### Enviroment variables

Check `example.env` file to know what enviroment variables do you need and check [create-react-app](https://create-react-app.dev/docs/adding-custom-environment-variables/#what-other-env-files-can-be-used) to know which env file name do you need to create.

## Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
