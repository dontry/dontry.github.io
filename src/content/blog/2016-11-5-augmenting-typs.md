---
date: '2016-03-05'
layout: post
title: Augmenting types
tags:
 - JS
---

JavaScript allows us make new method available to a specific type.
For example, we can augment Function.prototype with a new method like this:

```javascript
Function.prototype.method = function(name, func){
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

This method help us convert a Number type to integer.
