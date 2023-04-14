The folder structure will help in making the application easier to navigate


    - places --- components
             --- pages
    - users --- components
             --- pages
    - shared --- components

--------------------------------------------------------------------------------------------------------------------

react-router-dom: For the Routing
The routing helps in making the single page application to the multiple application
Switch in the React Router Dom: THis will basically tell once the route it gets it will not go on evaluating the other routes

import { BrowserRouter as Router, Route , Redirect, Switch } from "react-router-dom";
NavLink from React Router DOM


Redirect: This can be used when you donot match any of the routing


The Plan for the Application

/                   ------>     List of Users                       ----------> Always Reacable
/:uid/places        ------>     List of Places for Selected Users   ----------> Always Reacable
/authenticate       ------>     Signup +  Login forms               ----------> Only unauthenticated users
/places/new         ------>     New Place Form                      ----------> only authenticated
/places/:pid        ------>     Update Place Form                   ----------> only authenticated


About the Structure of the Project having a granular structure would be the best

--------------------------------------------------------------------------------------------------------------------

flex-wrap: wrap???
min-width: ???
rem:????
margin: 1rem;
text-decoration: none;: Remving the line form the Anchor link
@media()
font: inherit;
background: transparent
list-style: none;

<aside>??? What is this Element for 
--------------------------------------------------------------------------------------------------------------------

There are two main types of Components in React
1. presentational component : Dumb component Example: Card, Avatar
2. stateful components

It is totally normal to have way more presentational component then the stateful component

--------------------------------------------------------------------------------------------------------------------

Fragments: Just one Root element in any component THis acts as a ghost element
React Portals:
Why I need my side bar to be in the body not in the root how can I do it by Portal

Understanding Portals
Portals in react in the end a concept that allows us to project or render a react component in a differnet place 
than it would normally would be rendered

Here normally the sidebar will be rendered in the Main Navigation but I need to render in the body

--------------------------------------------------------------------------------------------------------------------

{drawerIsOpen(if this is true) &&  This will render}

--------------------------------------------------------------------------------------------------------------------

