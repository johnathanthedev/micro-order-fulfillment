import authRequest from '../requests/authRequest'

type Props = {}

const useAuth = (props: Props) => {
	const signIn = async (signInObj: any) => {
		const signInUserObj = {
			user: signInObj
		}
		
		try {
			const { data: signInResponse } = await authRequest.signIn(signInUserObj)
			storeTokenInLocalStorage(signInResponse?.token, "token")
			return signInResponse
		} catch (error) {
			return error
		}
	}

	const signUp = async (signUpObj: any) => {
		const signInUserObj = {
			user: signUpObj
		}

		try {
			const { data: signInResponse } = await authRequest.signUp(signInUserObj)
			storeTokenInLocalStorage(signInResponse?.token, "token")
			return signInResponse
		} catch (error) {
			return error
		}
	}

	const storeTokenInLocalStorage = (token: string, sid: string) => {
		localStorage.setItem(sid, token)
	}

	const fetchUserInfo = async () => {
		const { data: fetchedUserInfo } = await authRequest.fetchUserInfo()
		return fetchedUserInfo
	}

	return {
		signIn,
		signUp,
		fetchUserInfo
	}
}

export default useAuth