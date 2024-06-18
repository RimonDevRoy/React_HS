/*
// REACT ROUTER CRASH COURSE

● Router is a third-party library.

● In a single-page React Application, routing refers to the process of navigating between different pages without triggering a full page reload. The application initially loads a single HTML page

● If "a" tag is used, the whole page reloads(refreshes) and DOM is re-painted. If "Link" tag is used, the page does not reload. For this reason, 'a' is not used in React.

● As we get different hooks for importing "React", similarly we get Link, NavLink etc. for importing "react-router-dom".

● Link and NavLink are basically the same, but NavLink provides some additional features over Link. 

● In place of 'href' we write 'to' in Link.

● We get "isActive", "isPending" and probably a few more as variables wrapped in an object in the argument section of the callback of className in NavLink. 'isActive' returns true if the NavLink is currently in the page of the NavLink at that moment. 

● It is prerable to write className inside a callback in NavLink.

● className can either be a string or a function that returns a string.

● We need to use <RouterProvider /> to use Router. We must compulsorily pass a prop named 'router' in order to make it work.

● We can make router by using "createBrowserRouter()" that belongs to 'react-router-dom'.

● A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom , a <Link> renders an accessible <a> element(transforms itself into <a> while rendering as per my speculation) with a real href that points to the resource it's linking to. This means that things like right-clicking a <Link> work as you'd expect. You can use <Link reloadDocument> to skip client side routing and let the browser handle the transition normally (as if it were an <a href>). <Link> is a router component. 

● Let us divide the webpage into 3 sections: Header, Main content and Footer. If the project has multiple pages like Home, About, Contact us etc., an optimized way is to keep the Header and Footer in place and just change the Main content in every page in the main.jsx file or a seperate Layout file and it will alter based when the user changes to different pages like:

On Home:
<Header />
<Home />
<Footer />

On About:
<Header />
<About />
<Footer />

And so on. But, a less optimized way is to call Header and Footer in every Main content component and render them in main.jsx or seperate layout file.

● The above work can be done by 'Outlet' component of 'react-router-dom'. This component acts as the variable component and wherever it is placed, that place acts as the variable component such as the Main Content component in this case.

● The seperate Layout file needs to be used in a specific syntax in the main.jsx file. If we don't want to make any extra file, we can import all the variable components and declare a function that returns each page with Routes and Outlet like the Layout file.

||| First Syntax |||

● In this, we call a function named "createBrowserRouter" and pass the routes wrapped in objects which are further wrapped in a single array.

● '/' path represents the path of top-level element. Here, we could specify the Layout file. Here, as it contains the <Outlet /> which acts as its child, we specify the variable components to take the place of <Outlet /> in the children array of it. See the first syntax. The full paths are to be given in the 'to' attribute of the components. For example, for 'about', the path in 'to' is to be given "/about".

● The paths given in the children elements are added after the path of the top-level element.

● If nothing is given in the path of a children(that is, path: "") in children array, the element specified there is the base element to show first. But, this is only when the path given in 'to' of NavLink of the base element(in this case Home).

||| Second Syntax |||

● In this, we call 'createRoutesFromElements' in the parameter of 'createBroswerRouter' and make the top-level Route and make all the children Routes inside it from the components. We may even nest grandchildren Routes if necessary.

● Only those Routes have children inside them that have <Outlet /> in them. We pass the path and element as attributes to <Route />(does not have <Outlet />) or <Route><Route />(has <Outlet />)

● For websites having multiple users, we can show details of different users by way of giving a User component and an user ID. Unique userID must be assigned  to each user. The variable for taking the userID must have the same name everywhere it is used. There is to be given ':' before it in the path. The value of the variable kept after ';' will be returned by useParams() hook. We can also those values from DB calls. Example:

user/:userid/children/:childrenorder...

● We can also take parameter values from the URL of page. The useParams() hook returns an object of key/value pairs of the dynamic params from the current URL(loosely the path of the component) that were matched by the <Route path>. Child routes inherit all params from their parent routes.

● We can also make Main Content components and not include them anywhere but manually write their path to access that.

● useEffect is called on initial render of the component using it and on re-renders of it due to updation of dependencies.

● The 'loader' attribute allows us to fetch info from API call or DB call. The fetching is initiated when the cursor is taken to the component of the 'Route'(Github or like that) even before clicking and initiation of useEffect(). The info is also stored in the cache. The fetch related code is to be written inside and returned from the callback that the 'loader' expects. The name of the object that should receive the info is to be written as { receiver_obj } in the argument section of the callback.

● If a method reference is passed, the returned code in the method is passed to useLoaderData() hook and it also returns it.

● Using 'loader' is more optimized than the other way of fetching.

● response.json() is a promise.

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

*/

