import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './SignIn.module.css'
import useAuth from '../../../hooks/useAuth'

type Props = {}

const SignIn = (props: Props) => {
	const [signInErrors, setSignInErrors] = useState<string[]>([])

	const { signIn } = useAuth({});
  const navigate = useNavigate();

	return (
		<Formik
			initialValues={{email: '', password: ''}}
			validationSchema={Yup.object({
				email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(8, 'Min. 8 characters').required('Required'),
			})}
			onSubmit={async (values, { setSubmitting }) => {
				setSignInErrors([])
				setSubmitting(false)
				const signInResults: any = await signIn(values)
				const signInUser = signInResults?.user
				!signInUser ? setSignInErrors([signInResults?.response?.data?.message]) : navigate('/dashboard')
			}}
		>
			{(formik) => (
				<form className={`${styles.signInContainer}`} onSubmit={formik.handleSubmit}>
					<h2 className={`text-center my-3`}>Sign in to your Micro account</h2>
					<hr/>
					<div className={`${styles.signInButtonGroup} mt-4`}>
						<div className={`d-flex flex-column mb-3`}>
							<label htmlFor="email">Email address</label>
							<input {...formik.getFieldProps('email')} className={`px-2 py-1`} name="email" type="email" placeholder="example@email.com"/>
							{formik.touched.email && formik.errors.email ? (
								<div className={`text-danger`}>{formik.errors.email}</div>
							) : null}
						</div>
						<div className={`d-flex flex-column mb-3`}>
							<label htmlFor="password">Email address</label>
							<input {...formik.getFieldProps('password')} className={`px-2 py-1`} name="password" type="password" placeholder="Password"/>
								{formik.touched.password && formik.errors.password ? (
									<div className={`text-danger`}>{formik.errors.password}</div>
								) : null}
						</div>
						<div className={`d-flex flex-column mb-4`}>
							{signInErrors.length > 0 && signInErrors.map((errorMessage, index) => (
								<span key={index} className={`d-block text-danger`}>{errorMessage}</span>
							))}
						</div>
						<button type="submit" className={`${styles.signInButton} mb-2 py-1`}>Sign in</button>
						<div className={`d-flex justify-content-center`}>
							<Link to={'/sign-up'}>Need an account? Create on here</Link>
						</div>
					</div>
				</form>
			)}
		</Formik>
	)
}

export default SignIn