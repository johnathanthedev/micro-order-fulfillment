import { Link } from 'react-router-dom'
import styles from './SignUp.module.css'

type Props = {}

const SignUp = (props: Props) => {
	return (
		<div className={`${styles.signUpWrapper}`}>
			<div className={`${styles.signUpContainer}`}>
				<h2 className={`text-center my-3`}>Sign up for a Micro account</h2>
				<hr/>
				<div className={`${styles.signUpButtonGroup} mt-4`}>
					<div className={`d-flex flex-column mb-3`}>
						<label htmlFor="email">Email address</label>
						<input name="email" type="email" placeholder="example@email.com"/>
					</div>
					<div className={`d-flex flex-column mb-3`}>
						<label htmlFor="password">Password</label>
						<input name="password" type="password" placeholder="Min. 8 characters"/>
					</div>
					<div className={`d-flex flex-column mb-4`}>
						<label htmlFor="passwordConfirmation">Password confirmation</label>
						<input name="passwordConfirmation" type="password" placeholder="Min. 8 characters"/>
					</div>
					<button className={`${styles.signUpButton} mb-2`}>Sign up</button>
					<Link className={`d-block text-center`} to={'/'}>Already have an account? Sign in here</Link>
				</div>
			</div>
		</div>
	)
}

export default SignUp