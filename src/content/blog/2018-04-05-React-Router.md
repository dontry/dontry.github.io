---
date: '2018-06-21T03:15:59.165Z'
title: 'React Router Essential'
tags:
  - REACT-ROUTER
  - REACT
excerpt: 'The core concepts of React Router'
---

### <BrowserRouter>

A `<Router>` uses the HTML5 history API (`pushState`, `replaceState` and the `popstate` event) to keep your UI in sync with the URL.

##### basename: string

The base URL for all locations. If your app is served from a sub-directory on your server, you’ll want to set this to the sub-directory. A properly formatted basename should have a leading slash, but no trailing slash.

##### forceRefresh: bool

If true, the router will use full page refreshes on page navigation. You probably only want this in browsers that don’t support the HTML5 history API.

##### keyLength: number

The length of location.key. Defaults to 6

---

### <Route>

##### Route render methods

There are 3 ways to render something with a <Route>:

- `<Route component>`
- `<Route render>`
- `<Route children>`

Each is useful in different circumstances. You should use only one of these props on a given <Route>. See their explanations below to understand why you have 3 options. Most of the time you’ll use component.

##### component

A React component to render only when the location matches. It will be rendered with route props.

The router uses React.createElement to create a new React element every render.

##### render: function

This allows for convenient inline rendering and wrapping without the undesired remounting explained above.Instead of having a new React element created for you using the component prop, you can pass in a function to be called when the location matches. The render prop receives all the same route props (match, location and history) as the component render prop.

```jsx
<Route path="/home" render={() => <div>Home</div>} />;
// wrapping/composing
// You can spread routeProps to make them available to your rendered Component
const FadingRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={routeProps => (
      <FadeIn>
        <Component {...routeProps} />
      </FadeIn>
    )}
  />
);
```

##### children: function

Sometimes you need to render whether the path matches the location or not. In these cases, you can use the function children prop. It works exactly like render except that **it gets called no matter there is a match or not.**

This could be useful for animations:

```jsx
<Route children={({ match, ...rest }) => (
  {/* Animate will always render, so you can use lifecycles
      to animate its child in and out */}
  <Animate>
    {match && <Something {...rest}/>}
  </Animate>
)}/>
```

Warning: Both <Route component> and <Route render> take precedence over <Route children> so don’t use more than one in the same <Route>.

```jsx
<ul>
  <ListItemLink to="/somewhere" />
  <ListItemLink to="/somewhere-else" />
</ul>;

const ListItemLink = ({ to, ...rest }) => (
  <Route
    path={to}
    children={({ match }) => (
      <li className={match ? 'active' : ''}>
        <Link to={to} {...rest} />
      </li>
    )}
  />
);
```

---

### `<Prompt>`

Used to prompt the user before navigating away from a page. When your application enters a state that should prevent the user from navigating away (like a form is half-filled out), render a <Prompt>.

```jsx
<Prompt when={formIsHalfFilledOut} message="Are you sure you want to leave?" />
```

Could be useful for animations:

```jsx
<Route children={({ match, ...rest }) => (
  {/* Animate will always render, so you can use lifecycles
      to animate its child in and out */}
  <Animate>
    {match && <Something {...rest}/>}
  </Animate>
)}/>
```

---

### `<HashRouter>`

A `<Router>` that uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.

---

### `<NavLink>`

A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.

##### activeClassName: string

The class to give the element when it is active. The default given class is active. This will be joined with the className prop.

```jsx
<NavLink to="/faq" activeClassName="selected">
  FAQs
</NavLink>
```

##### activeStyle: object

The styles to apply to the element when it is active.

```jsx
<NavLink
  to="/faq"
  activeStyle={{
    fontWeight: 'bold',
    color: 'red',
  }}
>
  FAQs
</NavLink>
```

---

### history

The term “history” and "history object" in this documentation refers to the history package, which is one of only 2 major dependencies of React Router (besides React itself), and which provides several different implementations for managing session history in JavaScript in various environments.The following terms are also used:

- “browser history” - A DOM-specific implementation, useful in web browsers that support the HTML5 history API
- “hash history” - A DOM-specific implementation for legacy web browsers
- “memory history” - An in-memory history implementation, useful in testing and non-DOM environments like React Native

history objects typically have the following properties and methods:

- length - (number) The number of entries in the history stack
- action - (string) The current action (PUSH, REPLACE, or POP)
- location - (object) The current location. May have the following properties:
  - pathname - (string) The path of the URL
  - search - (string) The URL query string
  - hash - (string) The URL hash fragment
  - state - (object) location-specific state that was provided to e.g. push(path, state) when this location was pushed onto the stack. Only available in browser and memory history.
- push(path, [state]) - (function) Pushes a new entry onto the history stack
- replace(path, [state]) - (function) Replaces the current entry on the history stack
- go(n) - (function) Moves the pointer in the history stack by n entries
- goBack() - (function) Equivalent to go(-1)
- goForward() - (function) Equivalent to go(1)
- block(prompt) - (function) Prevents navigation (see the history docs)

---

### location

Locations represent where the app is now, where you want it to go, or even where it was. It looks like this:

```js
{
  key: 'ac3df4', // not with HashHistory!
  pathname: '/somewhere'
  search: '?some=search-string',
  hash: '#howdy',
  state: {
    [userDefined]: true
  }
}
```

The router will provide you with a location object in a few places:

- Route component as this.props.location
- Route render as ({ location }) => ()
- Route children as ({ location }) => ()
- withRouter as this.props.location

It is also found on history.location but you shouldn’t use that because its mutable. You can read more about that in the history doc.A location object is never mutated so you can use it in the lifecycle hooks to determine when navigation happens, this is really useful for data fetching and animation.

---

### match

A match object contains information about how a **<Route path>** matched the URL. match objects contain the following properties:

- params - (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path
- isExact - (boolean) true if the entire URL was matched (no trailing characters)
- path - (string) The path pattern used to match. Useful for building nested <Route>s
- url - (string) The matched portion of the URL. Useful for building nested <Link>s
-

```js
`${match.url}/relative-path`;
```

You’ll have access match objects in various places:

- Route component as this.props.match
- Route render as ({ match }) => ()
- Route children as ({ match }) => ()
- withRouter as this.props.match
- matchPath as the return value

If a Route does not have a path, and therefore always matches, you’ll get the closest parent match. Same goes for withRouter.

### null match

null matches A <Route> that uses the children prop will call its children function even when the route’s path does not match the current location. When this is the case, the match will be null. Being able to render a <Route>'s contents when it does match can be useful, but certain challenges arise from this situation.

The default way to “resolve” URLs is to join the match.url string to the “relative” path. `${match.url}/relative-path`

If you attempt to do this when the match is null, you will end up with a TypeError. This means that it is considered unsafe to attempt to join “relative” paths inside of a <Route> when using the children prop.

---

### matchPath

This lets you use the same matching code that <Route> uses except outside of the normal render cycle, like gathering up data dependencies before rendering on the server.import { matchPath } from 'react-router'

```js
const match = matchPath('/users/123', {
  path: '/users/:id',
  exact: true,
  strict: false,
});
```

##### pathname

The first argument is the pathname you want to match. If you're using this on the server with Node.js, it would be req.path.

##### props

The second argument are the props to match against, they are identical to the matching props Route accepts:

---

### withRouter

You can get access to the history object's properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders

```jsx
// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    const { match, location, history } = this.props

    return (
      <div>You are now at {location.pathname}</div>
    )
  }
}

withRouter(connect(...)(MyComponent))
// or
compose(
  withRouter,
  connect(...)
)(MyComponent)

// This does not
connect(...)(withRouter(MyComponent))
// nor
compose(
  connect(...),
  withRouter
)(MyComponent)
```

---

### Takeaways:

1. Using withRouter, we can access **history**, **match** and **location** props.
2. There are 3 ways for rendering with a `<Route>`
   - `<Route component>` easiest, mount a new component everytime when the path is matched
   - `<Route render>` convenient inline rendering without undesired remounting.
   - `<Route children>` render no matter if it matches the path
3. `<NavLink>` will add styling attributes when it matches the current URL
