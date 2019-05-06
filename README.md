# code-gov-fscp-react-component
FSCP Plugin for code-gov-web, built with Markdown and React

## Install

The repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://docs.npmjs.com/getting-started/installing-node), you can install `code-gov-fscp-react-component` with this command: 
```sh
$ npm i @code.gov/code-gov-fscp-react-component
```

## Usage

This package is meant to be used with the [code-gov-front-end](https://github.com/GSA/code-gov-front-end) project. Please follow the [configuration settings](https://github.com/GSA/code-gov-front-end/blob/master/CONFIGURATION.md#style) for the project.

## Link this package to edit Code.gov styles locally

You may want to view your changes in the code-gov-fscp-react-component repo on your local machine for testing. Follow these steps to do so:
1. Clone the latest version of the `code-gov-fscp-react-component` repository.
2. Run `npm install` to install the dependencies required for the package in the `code-gov-fscp-react-component` directory.
3. Run `npm link` in the root level of the `code-gov-fscp-react-component` directory on your local machine.
4. On the `code-gov-front-end` [project](https://github.com/GSA/code-gov-front-end#getting-started), clone the repository and run `npm install` if you haven’t done this already.
5. Run `npm link @code.gov/code-gov-fscp-react-component` in the root level of the code-gov-front-end directory on your local machine.

You are now using the latest version of the code.gov design system via your cloned version when running the `code-gov-front-end` site on your local machine. To stop using this version, run `npm unlink @code.gov/code-gov-fscp-react-component` from the root level of the `code-gov-front-end` directory.

# References:
 - https://github.com/WhiteHouse/source-code-policy
 - https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2016/m_16_21.pdf
