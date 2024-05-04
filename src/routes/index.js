import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";
import Home from "../pages/home.page";

const router = createBrowserRouter([
	{
		path: "/",
		element : (<Home/>)
	}
])

createRoot(document.getElementById("root")).render(
	<RouterProvider router={router}/>
)