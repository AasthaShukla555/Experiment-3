1. Aim:-

Implementing Routing in a Single Page Application (SPA)

3. Theory:-

In a traditional Multi-Page Application (MPA), clicking a link requests a new HTML file from the server, causing a visible refresh. In a Single Page Application (SPA), we use a routing library to intercept URL changes and swap components dynamically.

Key Components Used:

BrowserRouter: A provider component that keeps your UI in sync with the URL using the HTML5 History API.

Routes: A container that looks through all its child Route elements to find one whose path matches the current URL.

Route: Defines a mapping between a specific URL path (e.g., /cats) and the component that should render (e.g., <Cats />).

Link: Replaces the standard <a> tag. It allows users to navigate to different routes without triggering a browser reload, which is essential for the SPA experience.

3. Steps:-
   
Installation: Install the routing library by running npm install react-router-dom.

Configuration: In the main entry file (usually App.js or main.jsx), wrap the entire application in the <BrowserRouter> component.

Defining Routes: Use the <Routes> container to wrap individual <Route /> definitions. Assign a path (like /dogs) and an element (the component name) to each.

Creating Navigation: Implement a Navbar using the <Link> component to provide paths to the user.

Component Integration:

Map through animal data in Dogs.jsx and Cats.jsx.

Style the gallery using Dogs.css for a grid layout.

Interactive UI: Add an img-wrapper in the JSX to hold the image and a hidden description box that becomes visible (opacity: 1) on hover.

4. Conclusion:-
   
By utilizing react-router-dom, we successfully transformed a static React project into a functional SPA. The implementation of BrowserRouter, Routes, and Route allowed for instant page transitions, while the Link component maintained the application's state without a full page reload.

6. Learning Outcomes:-
   
Routing Logic: Mastered the ability to map URLs to specific UI components.

SPA Navigation: Understood the difference between standard hyperlinking and client-side routing using the <Link> component.

Layout Management: Learned how to maintain a consistent background and navbar while only swapping the gallery content.

Data Rendering: Practiced mapping arrays of objects to generate dynamic interactive cards.
