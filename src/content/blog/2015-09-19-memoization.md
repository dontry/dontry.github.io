---
layout: post
title: Memoization (JS the good parts)
tags:
  - JS
---

Functions can use objects to remember the results of previous operations, making it possible to avoid unnecessary work. This optimization is called memoization. JavaScript’s objects and arrays are very convenient for this.

In JavaScript we can keep our momoized results in a memo array by using closure feature. When our function is called, it first looks to see if it already knows the result. If it does, it can immediately return it.

```javascript
var fibonnaci = (function() {
  var memo = [0, 1];
  var fib = function(n) {
    var result = memo[n];
    if (typeof memo[n] !== 'number') {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
})();
```

This function substantially reduce the amount of work.

We can generalize this by making a function that helps us make memoized functions.

####The memoized function:

```javascript
    var memoizer = function(memo fundamental){
        var shell = function(n){
            var result = memo[n];
            if(typeof result !== 'number'){
                result = fundamental(shell, n);
                memo[n] = result;
            }
            return result;
        };
        return shell;
    };
```

Now we can define fibonacci with the memoizer:

```javascript
var fibonacci = memoizer([0, 1], function(shell, n) {
  return shell(n - 1) + shell(n - 2);
});
```

Besides, we can produce a memoizing factorial function:

```javascript
var factorial = memoizer([1, 1], function(shell, n) {
  return n * shell(n - 1);
});
```
