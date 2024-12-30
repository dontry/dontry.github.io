---
date: '2015-09-22'
layout: post
title: Inheritance (JS the good parts)
tags:
 - JS
---

Inheritance is a big topic in JavaScript. Unlike Java or C++ which are object-oriented languages and they can inherit other classes, JavaScript is a prototypal by nature. So the inheritance pattern in JavaScript is far more complicated for me. I still couldn't totally understand how inheritance pattern work after I finished this section.

Then I found a post which was very helpful. <em>[JavaScript Inheritance Patterns](http://davidshariff.com/blog/javascript-inheritance-patterns/)</em> introduces 3 different ways of how to implement inheritance in JavaScript.

#### Pseudoclassical pattern

 1. Invoke a constructor function.
 2. Point a child’s prototype to the parent’s prototype for inheritance to occur.

```javascript
/**
 * Point a child's prototype to a parent's prototype
 **/
var extendObj = function(childObj, parentObj){
    childObj.prototype = parentObj.prototype;
}
//base human object
var Human = function(){};
//inhertiable attributes / methods 
Human.prototype = {
    name: '',
    gender: '',
    planetOfBirth: 'Earth',
    sayGender: function(){
        alert(this.name + '\'s gender is ' + this.gender );
    },
    sayPlanet: function(){
        alert(this.name + ' was born on ' + this.planetOfBirth);
    }
};

//male
var Male = function(name){
    this.gender = 'Male';
    this.name = 'Davide';
};

//inherits human
extendObj(Male, Human);

var Female = function(name){
    this.name = name;
    this.gender = 'Female';
}

//inherits human
extendObj(Female, Human);

//new instances
var davide = new Male('David');
var jane = new Female('Jane');


david.sayGender(); // David says my gender is Male
jane.sayGender(); // Jane says my gender is Female

Male.prototype.planetOfBirth = 'Mars';
david.sayPlanet(); // David was born on Mars
jane.sayPlanet(); // Jane was born on Mars
```



#### Functional pattern
```javascript
var human = function(name){
    var that = {};

    that.name = name || '';
    that.gender = '';
    that.planetOfBirth = 'Earth';
    that.sayGender = function(){
        alert(that.name + '\'s gender is ' + that.gender);
    };
    that.sayPlanet = function(){
        alert(that.name + ' was born on ' + that.planetOfBirth);
    };
    return that;
}

var male = function (name){
    var that = human(name);
    that.gender = 'Male';
    return that;
}

var david = male('David');
var jane = female('Jane');

david.sayGender(); // David says my gender is Male
jane.sayGender(); // Jane says my gender is Female

david.planetOfBirth = 'Mars';
david.sayPlanet(); // David was born on Mars
jane.sayPlanet(); // Jane was born on Earth
```

#### Prototypal pattern
```javascript
(function () {
    'use strict';

    /***************************************************************
     * Helper functions for older browsers
     ***************************************************************/
    if (!Object.hasOwnProperty('create')) {
        Object.create = function (parentObj) {
            function tmpObj() {}
            tmpObj.prototype = parentObj;
            return new tmpObj();
        };
    }
    if (!Object.hasOwnProperty('defineProperties')) {
        Object.defineProperties = function (obj, props) {
            for (var prop in props) {
                Object.defineProperty(obj, prop, props[prop]);
            }
        };
    }
    /*************************************************************/

    var human = {
        name: '',
        gender: '',
        planetOfBirth: 'Earth',
        sayGender: function () {
            alert(this.name + ' says my gender is ' + this.gender);
        },
        sayPlanet: function () {
            alert(this.name + ' was born on ' + this.planetOfBirth);
        }
    };

    var male = Object.create(human, {
        gender: {value: 'Male'}
    });

    var female = Object.create(human, {
        gender: {value: 'Female'}
    });

    var david = Object.create(male, {
        name: {value: 'David'},
        planetOfBirth: {value: 'Mars'}
    });

    var jane = Object.create(female, {
        name: {value: 'Jane'}
    });

    david.sayGender(); // David says my gender is Male
    david.sayPlanet(); // David was born on Mars

    jane.sayGender(); // Jane says my gender is Female
    jane.sayPlanet(); // Jane was born on Earth
})();
```