import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './SignUp.module.css'
import useAuth from '../../../hooks/useAuth'

type Props = {}

const SignUp = (props: Props) => {
	const [signUpErrors, setSignUpErrors] = useState<string[]>([])

	const { signUp } = useAuth({});

	return (
		<Formik
			initialValues={{email: '', password: '', passwordConfirmation: ''}}
			validationSchema={Yup.object({
				email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(8, 'Min. 8 characters').required('Required'),
        passwordConfirmation: Yup.string().oneOf(
          [Yup.ref('password'), null],
          'Passwords must match'
        ),
			})}
			onSubmit={async (values, { setSubmitting}) => {
				setSubmitting(false)
				const signUpResults = await signUp(values)
				const signUpUser = signUpResults?.reponse?.data?.user
				!signUpUser && setSignUpErrors([signUpResults?.response?.data?.message])
			}}
		>
			{(formik) => (
				<form className={`${styles.signUpWrapper}`} onSubmit={formik.handleSubmit}>
					<div className={`${styles.signUpContainer}`}>
						<h2 className={`text-center my-3`}>Sign up for a Micro account</h2>
						<hr/>
						<div className={`${styles.signUpButtonGroup} mt-4`}>
							<div className={`d-flex flex-column mb-3`}>
								<label htmlFor="email">Email address</label>
								<input {...formik.getFieldProps('email')} className={`px-2 py-1`} name="email" type="email" placeholder="example@email.com"/>
								{formik.touched.email && formik.errors.email ? (
									<div className={`text-danger`}>{formik.errors.email}</div>
								) : null}
							</div>
							<div className={`d-flex flex-column mb-3`}>
								<label htmlFor="password">Password</label>
								<input {...formik.getFieldProps('password')} className={`px-2 py-1`} name="password" type="password" placeholder="Min. 8 characters"/>
								{formik.touched.password && formik.errors.password ? (
									<div className={`text-danger`}>{formik.errors.password}</div>
								) : null}
							</div>
							<div className={`d-flex flex-column mb-3`}>
								<label htmlFor="passwordConfirmation">Password confirmation</label>
								<input {...formik.getFieldProps('passwordConfirmation')} className={`px-2 py-1`} name="passwordConfirmation" type="password" placeholder="Min. 8 characters"/>
								{formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
									<div className={`text-danger`}>{formik.errors.passwordConfirmation}</div>
								) : null}
							</div>
							<div className={`d-flex flex-column mb-4`}>
								{signUpErrors.length > 0 && signUpErrors.map((errorMessage, index) => (
									<span key={index} className={`d-block text-danger`}>{errorMessage}</span>
								))}
							</div>
							<button type="submit" className={`${styles.signUpButton} mb-2 py-1`}>Sign up</button>
							<Link className={`d-block text-center`} to={'/'}>Already have an account? Sign in here</Link>
						</div>
					</div>
				</form>
			)}
		</Formik>		
	)
}

export default SignUp