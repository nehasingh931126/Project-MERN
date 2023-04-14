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

