import styles from "./AdminSideNav.module.css"
import clipboardSvg from '../../../../assets/images/clipboard.svg'
import signOutSvg from '../../../../assets/images/logout.svg'
type Props = {}

const AdminSideNav = (props: Props) => {
	return (
		<div className={`${styles.adminSideNavContainer}`}>
			<div className={`text-center pt-3`}><h3 className={`${styles.title} text-white`}>Micro</h3></div>
			<div className={`${styles.iconsContainer}`}>
				<img width="40" height="40" src={clipboardSvg} alt="clipboard"/>
				<div className={`${styles.signOutIcon}`}>
					<img width="40" height="40" src={signOutSvg} alt="signout"/>
				</div>
			</div>
		</div>
	)
}

export default AdminSideNav