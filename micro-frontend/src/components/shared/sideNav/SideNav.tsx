import { useState, useEffect } from 'react'
import useAuth from "../../../hooks/useAuth"
import GeneralSideNav from './generalSideNav/GeneralSideNav'
import AdminSideNav from "./adminSideNav/AdminSideNav"

type Props = {}

const SideNav = (props: Props) => {
	const [isCurrentUserAdmin, setIsCurrentUserAdmin] = useState<boolean>(false)

	const { fetchUserInfo } = useAuth({})
	
	useEffect(() => {
		const fetchUser = async () => {
			const userInfo = await fetchUserInfo()
			setIsCurrentUserAdmin(userInfo.user.admin)
		}
		fetchUser()
	}, [fetchUserInfo])
	
	return (
		isCurrentUserAdmin ? <AdminSideNav/> : <GeneralSideNav/>
	)
}

export default SideNav