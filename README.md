This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# React Router (v.4)

### By the end of this lesson you should...
* Understand what routing is
* Be able to implement React Router
* Know what each of these things are:
    * BrowserRouter
    * Route
    * Link / NavLink
    
### Why Routing?

Up until now you've been creating single page applications that conditionally render based on a boolean in state. Something along the lines of...

```
class SomeComponent extends Component {
  constructor() {
     super()
     this.state = {
         showWelcome: false
     }
  }
  
  render() {
     return (
         { this.state.showWelcome && <Welcome /> }
     )
  }
}
```

This works...but as our applications grow larger and we seek to render more components, these conditinal toggles can become difficult to manage. 

Enter [React Router](https://reacttraining.com/react-router/web/guides/philosophy)

**From the Docs**

React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering

**In a nutshell...**

React Router allows us to:

* Define which component(s) are rendering based on the URL pathname.
* Bookmark specific page/view within our application
* Utilize the `back` and `forward` buttons in our browser

##### Router

There are many high-level routers that come with the `react-router-dom` module:

* `<BrowserRouter>`
* `<HashRouter>`
* `<MemoryRouter>`
* `<NativeRouter>`
* `<StaticRouter>`

We will be focusing on **`BrowserRouter`** which is _A Router that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL._

Ultimately it will allow our users to bookmork specific paths and utilize their forward/back buttons. 

There are a few more tools we get with React Router that are important to know about:

### Route
The Route component is a key piece of React Router. Its most basic responsibility is to render some UI when a location matches the route’s path.
 
There are 3 ways to render something with a Route:
* `<Route component>`
* `<Route render>`
* `<Route children>`

Let's say we have a `Unicorns` component, here is what it would look like in each of these instances:

**Component**

```
<Route path='/unicorns' component={ Unicorns } />
```

**Render**

```
<Route path='/unicorns' render={ () => <Unicorns /> }
```
This also allows you to define and pass specific properties to a component dynamically. For example:

```
<Route path='/ideas/:id' render={({ match }) => {
  const idea = ideas.find(idea => idea.id === parseInt(match.params.id));
  
  if (idea) {
    return <ListItem match={match} {...idea} />;
  }
  
  return (<div>This idea does not exist! </div>);
}} />
```

Render differs slightly from Component, let's check out the [docs](https://reacttraining.com/react-router/web/api/Route/component) to see what they say about it.

**Children**

```
<Route path='/other-unicorns children={ () => <Unicorns /> } />
```


**Component > Render > Children**

`Component` supercedes `Render` which supercedes `Children` so be sure to only include one within a route.

All three of these are rendered with [route props](https://reacttraining.com/react-router/web/api/Route/Route-props), which include: 

* [match](https://reacttraining.com/react-router/web/api/match)
* [location](https://reacttraining.com/react-router/web/api/location)
* [history](https://reacttraining.com/react-router/web/api/history)

**Take 10 minutes to read about these**

---

### Link

_Provides declarative, accessible navigation around your application._

**Things to know:**

* Link can contain an open and closing tag or be a self-closing tag
* Link takes a `to` attribute as well as an optional `replace` attribute
* `to` tells the app which path to redirect to. This can be a string or an object
* `replace` is a boolean that when `true` will replace the current entry in the history stack instead of adding a new one

```
<Link to='/unicorns' />

<Link to='/unicorns'> Unicorns </Link>

```

---

### NavLink

_A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL._

It can take the following attributes:

* activeClassName: string
* activeStyle: object
* exact: bool
* strict: bool
* isActive: func
* location: object

**Read about each of these [here](https://reacttraining.com/react-router/web/api/NavLink)**

```
<NavLink to="/about">About</NavLink>
```

---

### Redirect

_Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do._

It can take the following attributes:

* to: string
* to: object
* push: bool
* from: string

```
<Redirect to="/not/unicorns"/>

```

---

### Switch

_Renders the **first** child <Route> or <Redirect> that matches the location. `<Switch>` is unique in that it renders a route **exclusively**. In contrast, every <Route> that matches the location renders **inclusively**_

```
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/:user" component={User}/>
  <Route component={NoMatch}/>
</Switch>
```

The [docs](https://reacttraining.com/react-router/web/api/Switch) do a great job of quickly showing what Switch is all about.

---

Enough talk, let's implement React Router!

* Clone this repo and `cd` into it
* npm i
* open your text editor

This application will provide us with a `Main` landing page as well as 3 routes to pages containing:
* Unicorns
* Puppies
* Sharks

Additionally we will add a dynamic route to dig deeper into a specific creatures cards.

First let's install `react-router-dom`

```
npm i -S react-router-dom
```

Next let's go import it and wrap it around our main entry point `App`:

```index.js

import { BrowserRouter } from 'react-router-dom'

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));

```



#### Resources:

* [React Router Training](https://reacttraining.com/react-router/web/guides/philosophy)