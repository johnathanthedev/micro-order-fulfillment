import Dashboard from "../components/dashboard/Dashboard"
import Home from "../components/home/Home"
import SignUp from "../components/home/SignUp/SignUp"

export const publicRoutes = [
	{
		path: '/',
		component: <Home/>,
	},
	{
		path: '/sign-up',
		component: <SignUp/>,
	}
]

export const privateRoutes = [
	{
		path: '/dashboard',
		component: <Dashboard/>,
	}
]