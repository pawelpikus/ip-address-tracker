# IP address tracker solution built with React and Netlify Functions

  This is the solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend built with React, hosted on Netlify with continuous deployment from Github using Netlify function to hide the API secret keys. 

## Table of contents
-  [Overview](#overview)
-  [The challenge](#the-challenge)
-  [Screenshot](#screenshot)
-  [Links](#links)
- [Installation](#installation)
-  [My process](#my-process)
-  [Built with](#built-with)
-  [What I learned](#what-i-learned)
-  [Useful resources](#useful-resources)
-  [Author](#author)
-  [Acknowledgments](#acknowledgments)

## Overview

### The challenge
Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot
![](./src/images/screenshot.PNG)

### Links
- Solution repo: [Github](https://github.com/pawelpikus/ip-address-tracker)
- Solution URL: [Netlify](https://pawelpikus-ip-tracker.netlify.app/)

## Installation
### External API
In order for the project to work properly you need to create a free account for the following:
 - [Font Awsome](https://fontawesome.com/) 
 - [ipify API](https://www.ipify.org/)
 and
 - [Netlify](https://www.netlify.com/) if you want to go LIVE.
 
### Preparing local files:
 1. [Fork the repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo) into your Github account.
 2. Clone the forked repo to your local machine (Terminal):  `git clone https://github.com/[YOUR_GITHUB_USERNAME_HERE]/ip-address-tracker.git`
 3. Install dependencies (Terminal): `npm install`
 4. In the root folder of your project create a `.env` file. The file should contain two environment variables:
 - `API_TOKEN='[YOUR API KEY]'` - taken from Ipify.com account.
 - `API_URL='https://geo.ipify.org/api/v1?apiKey=' ` 
 6.  Test the app at localhost: 
 - `npm install netlify-cli -g`
 - `netlify dev`

### Deploying the app to Netlify from GitHub

1. `git push` the changes to Github.
2. Log in to your Netlify account and follow the process for linking a GitHub repository to Netlify for continuous deployment [as described in the documentation](https://docs.netlify.com/configure-builds/get-started/#basic-build-settings).
3. Copy the environment variables from `.env` file to the Netlify UI at *Site Settings* -> *Build&Deploy* -> *Environment* -> *Environment variables.*

  
## My process

### Built with
- Flexbox
- Mobile-first workflow
-  [React](https://reactjs.org/)
-  [Pigeon Map API](https://pigeon-maps.js.org/) - ReactJS maps without external dependencies
-  [ipify API](https://www.ipify.org/) - A Simple Public IP Address API
-  [Font Awsome](https://fontawesome.com/) - the web's most popular icon set and toolkit
- [Netlify Functions](https://docs.netlify.com/functions/overview/) - Netlify's developer-friendly way to use AWS’s serverless Lambda functions for running on-demand, server-side code without having to run a dedicated server.

### What I learned
I've practiced the use of Hooks (useState, useEffect) and calling APIs. Tried to validate the input value with <code>pattern</code> attribute but the regex I found on Stack Overflow doesn't seem to do a trick, at least for the domain names.

<<<<<<< HEAD
I used Netlify Functions to hide the API token on Netlify servers, i.e.: 
=======
I've practiced the use of Hooks (useState, useEffect) and calling APIs. Tried to validate the input value with <code>pattern</code> attribute but the regex I found on Stack Overflow doesn't seem to do the trick, at least for the domain names. 
>>>>>>> 2374b4fa7966e4c34cbf393d1d52911bf17503ad

 - I used the default function builder template called `token-hider` by running `netlify functions:create` command.
 - Learnt how o pass the queryStringParameters to build the URL.
 - Adjusted the template to query the api for the project.

## Useful resources

In order to understand the flow with Netlify functions, the following resources helped me a lot:

 - [This tutorial by Joseph Mawa](https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/)
 - [Netlify code sample - Token Hider](https://github.com/netlify/code-examples/tree/master/function_examples/token-hider)
 - [This post by Aadhi Keerthanan](https://aadhi.hashnode.dev/hide-api-keys-using-netlify-token-hider-function)
 - [A neat YT video on hiding API keys using Netlify functions by Dan Fletcher](https://www.youtube.com/channel/UCBab7VnuJvcBtp3CUvu_AHw)

## Author
  - Frontend Mentor - [@pawelpikus](https://www.frontendmentor.io/profile/pawelpikus)
  
## Acknowledgments
Thanks frontendmentor.io for super cool challenges!
