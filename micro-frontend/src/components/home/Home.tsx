import styles from './Home.module.css'
import SignIn from './SignIn/SignIn'

type Props = {}

const Home = (props: Props) => {
	return (
		<div className={`${styles.homeContainer}`}>
			<SignIn/>
		</div>
	)
}

export default Home