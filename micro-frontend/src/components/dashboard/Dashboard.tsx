import SideNav from "../shared/sideNav/SideNav"
import styles from "./Dashboard.module.css"

type Props = {}

const Dashboard = (props: Props) => {
	return (
		<div className={`${styles.dashboardWrapper}`}>
			<SideNav />
			<div className={`${styles.dashboardContainer}`}>
				<h2>Dashboard</h2>
			</div>
		</div>
	)
}

export default Dashboard