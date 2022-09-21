import axios from 'axios'

const authRequest = {
	signIn: async (signInObj: any) => {
		return await axios.post('http://localhost:3000/sign-in', signInObj)
	},
	signUp: async (signUpObj: any) => {
		return await axios.post('http://localhost:3000/sign-up', signUpObj)
	},
	fetchUserInfo: async () => {
		const token: any = localStorage.getItem("token")
		return await axios.get('http://localhost:3000/user-info', {
			headers: {
				Authorization: token
			}
		})
	}
}

export default authRequest