---
date: '2019-06-14'
title: 'React component lifecycle'
excerpt: 'React component lifecycle is a very important part of React. I created a demo to illustrate how it works with full details'
tags:
  - REACT
---

React component provides several "lifecycle methods" that you can hook in at particular times. This [lifecycle diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram) is very useful that you can use it as a cheat sheet for reference. Recently, I ran into a very complex component that I found it hard to wrap my head around . The most difficult part of that component is asynchronously fetching data in _componentDidUpdate_ method in certain conditions. At the same time, _shouldComponentUpdate_ method should be used properly to avoid redundant rendering. Therefore, I created a demo to simplify the props and state and retain the core logic. This demo has a button. When the button is clicked, the demo generates a random number consecutively ranging from 0 to 5 until the difference between current number and previous number is not greater than 1 or it throws an error.

<iframe src="https://codesandbox.io/embed/silly-shannon-1m5ne?fontsize=14" title="React complicate lifecycle" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

I made use of a few _console_ APIs to illustrate what happens in every lifecycle method and when they are called. Specially _console.groupStart()_ and _console.groupEnd()_ help me to visualize what happened in each method and cycle.

![console](images/react-lifecycle-log.png)

Let's go through how _this.setState_ works asynchronously. When the _loading_ is set to true in _componentDidUpdate_ method, it immediately goes to _shouldComponentUpdate_. If the condition is true, then it jumps to the _render_ method.

![update_number](images/react-lifecycle-updatenumber.png)

You can notice that **the Promise callback of updating number runs outside _didComponentUpdate_ method**. This state update then triggers another round of component rendering. Due to the nature of asynchronous update, you should always get a previous component state from the _this.setState_ callback arguments instead of using _this.state_.
Otherwise, you may not get the consistent state for update.

```javascript
this.setState(prevState => ({
  number: number,
  status: [...prevState.status, number],
  loading: false,
}));
```

The last thing should be noted is the [_componentDidCatch_](https://reactjs.org/docs/react-component.html#componentdidcatch) method and the [_ErrorBoundary_](https://reactjs.org/docs/error-boundaries.html) component. I found the component didn't catch the error thrown by its child component which got me confused. I later found the [answer](https://github.com/facebook/react/issues/11334). What it says is that error boundaries only catch errors in lifecycle methods. If the error occurs in a Promise callback, it technically doesn't happen inside the lifecycle methods. So the error boundary won't catch it. In this case, you are supposed to handle the error for the Promise callback within the scope.
