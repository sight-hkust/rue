# Rue [![Build Status](https://travis-ci.org/sight-hkust/rue.svg?branch=master)](https://travis-ci.org/sight-hkust/rue)

Rue is a frontend web application for managing electronic health records
for doctors and physicians who works at the clinic and does field visit 
at the slum in Cambodia.

This project started out as the phase 4 of an on-going development of the
**Easymed** initiative.Easymed aims to provide a better user experience and
boost the productivity and efficiency at medical related informatics in 
combination of hardware and software.

## Project Overview & Structure

This application is built with Javascript frameworks like [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/) hence it is operated solely on the web browser of the client,
the backend services are provided by a self hosted [Parse Server](http://parseplatform.org/) instance, the perks of having `Parse` as the backend is to decouple and eliminates the need for setup process of having server side APIs, this entire project can be configure to run on different instance of Parse server and for development purposes we hosted ours using Docker images [here](https://hub.docker.com/r/parseplatform/).

Data models and APIs are structured at the frontend and you can read the code [here](https://github.com/sight-hkust/rue/blob/master/src/services/api/) to get a better understanding of the logistics.

The project development process follows the guides over at [https://opensource.guide/](https://opensource.guide/)

## Styles

The codebase of this project are mostly written in ECMAScript 2016 (a.k.a ES6/ES7) and it follows
the practices suggested by [Airbnb](https://github.com/airbnb/javascript) and we would also like 
to suggest that for every segment of non trivial code that we wrote, we document it using comments.

For React components we suggest the use of JSX style guide also from [Airbnb](https://github.com/airbnb/javascript/tree/master/react)

## Getting Started

This project is initialized with (`create-react-app`)[https://github.com/facebookincubator/create-react-app], so to get started.

First clone the repository:

`git clone https://github.com/sight-hkust/rue.git`

Assuming you already have node and npm / yarn for managing your node packages, go to the project directory:

`cd $PWD/rue`

and run

`npm install` or `yarn`

to install all the necessary dependencies for getting the project up and running.

### Starting development server

To runs the development server, simply do `npm start` or `yarn start`, your development web server
will be listening at [http://localhost:3000/](http://localhost:3000/)

* Remarks : the development server is integrated with the hot-reload feature, so it is not necessary to restart the server process each time you make a change to your code.

### Building the project for production environment

Building process can be start by running `npm run build` or `yarn build`, the generated assets and files
will be located at the `build` folder.

## How to contribute to this project

TBD...