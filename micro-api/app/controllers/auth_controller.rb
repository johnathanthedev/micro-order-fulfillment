class AuthController < ApplicationController
	def sign_up
		user = User.create!(user_sign_up_params.merge(admin: false))
		jwt_payload = { user_id: user.id, exp: (Time.now + 86400).to_i }
		token = JWT.encode jwt_payload, ENV["MICRO_JWT_SECRET"], "HS256"

		render json: {
			user: user,
			token: token
		}, status: :created
	end


	def sign_in
		user = User.find_by email: user_log_in_params[:email]

		if user && user.authenticate(user_log_in_params[:password])
			jwt_payload = { user_id: user.id, exp: (Time.now + 86400).to_i }
			token = JWT.encode jwt_payload, ENV["MICRO_JWT_SECRET"], "HS256"

			render json: {
				user: user,
				token: token
			}, status: :ok
		else
			render json: {
				message: "Invalid credentials"
			}, status: :unauthorized
		end
	end

	private

	def user_sign_up_params
		params.require(:user).permit(:email, :password, :password_confirmation)
	end

	def user_log_in_params
		params.require(:user).permit(:email, :password)
	end
end
