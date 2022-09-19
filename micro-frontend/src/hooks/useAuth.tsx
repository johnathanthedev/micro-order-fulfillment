import authRequest from '../requests/authRequest'

type Props = {}

const useAuth = (props: Props) => {
	const signIn = async (signInObj: any) => {
		const signInUserObj = {
			user: signInObj
		}
		
		try {
			const { data: signInResponse } = await authRequest.signIn(signInUserObj)
			return signInResponse
		} catch (error) {
			return error
		}
	}
	return {
		signIn
	}
}

export default useAuth