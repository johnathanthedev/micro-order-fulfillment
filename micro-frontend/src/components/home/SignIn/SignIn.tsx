import { Link } from 'react-router-dom'
import styles from './SignIn.module.css'

type Props = {}

const SignIn = (props: Props) => {
	return (
		<div className={`${styles.signInContainer}`}>
			<h2 className={`text-center my-3`}>Sign in to your Micro account</h2>
			<hr/>
			<div className={`${styles.signInButtonGroup} mt-4`}>
				<div className={`d-flex flex-column mb-3`}>
					<label htmlFor="email">Email address</label>
					<input name="email" type="email" placeholder="example@email.com"/>
				</div>
				<div className={`d-flex flex-column mb-4`}>
					<label htmlFor="password">Email address</label>
					<input name="password" type="password" placeholder="Password"/>
				</div>
				<button className={`${styles.signInButton} mb-2`}>Sign in</button>
				<Link className={`d-block text-center`} to={'/dashboard'}>Sign up</Link>
			</div>
		</div>
	)
}

export default SignIn