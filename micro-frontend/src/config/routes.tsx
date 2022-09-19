import Dashboard from "../components/dashboard/Dashboard"
import Home from "../components/home/Home"

export const publicRoutes = [
	{
		path: '/',
		component: <Home/>,
	}
]

export const privateRoutes = [
	{
		path: '/dashboard',
		component: <Dashboard/>,
	}
]