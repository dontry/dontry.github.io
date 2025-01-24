---
date: '2015-09-14'
layout: post
title: Global Variables (JS the good parts)
tags: 
 - JS
---

 

>From today on, I will write down some notes about the book <em>JavaScript The Good Parts</em>.

Global variables are horrible in JavaScript. If you don't use them wisely, they will lurk in your code until break down your application. Because when your unconciously create a local variable with the same name of the global variables, terrible things will happen. So in many cases, global variables should be avoided.

One way to minimize the use of global variables it to create a single global variable container.

```javascript
var MYAPP = {}
MYAPP.stooge = { 
    "first_name": "Joe"
    "last_name": "Howard"
}
MYAPP.flight = {
airline: "Oceanic",
number: 815,
departure:{
    IATA: "SYD",
    time: "2004-09-22",
    city: "Sydney"
},
arrival{
    IATA: "LAX",
    time: "2004-09-23",
    city: "Los Angeles"
}
};
```

By including your global footprint into a single name, it is significantly reducing the chance of bad interaction with other modules. And it is more readable, since MYAPP is like a namespace referring to its application.

