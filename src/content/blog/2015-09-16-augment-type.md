---
date: '2015-09-16'
layout: post
title: Augmenting types (JS the good parts)
tags:
 - JS
---

JavaScript allows us make new method available to the basic type lick arrays, strings, numbers, regular expressions, strings, functions.
For example, we can augment Function.prototype with a new method like this:

```javascript
Function.prototype.method = function (name, func) {
this.prototype[name] = func;
return this;
};
```

Morever, we can augment a specific type with a new method like this:

```javascript
Number.method('integer', function(){
    return Math[this < 0 ? 'ceiling' : 'floor'](this);
    });

document.writeln((-10/3).integer())
```

This method helps us convert a Number type to integer.