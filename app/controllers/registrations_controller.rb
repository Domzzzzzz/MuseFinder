class RegistrationsController < Devise::RegistrationsController

  # overriding the devise after sign up path method
  def after_sign_up_path_for(resource)
    edit_user_registration_path
  end

  # overriding the devise after sign in path method
  def after_sign_in_path_for(resource)
    authenticated_root_path
  end

  private

  # Devise strong params for accepting newly added params
  # If a param isn't added here, it won't be saved to DB
  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

  # defining what user params can be updated
  def account_update_params
    params.require(:user).permit(:password, :password_confirmation, :first_name, :last_name, :dob, :sex, :location, :about, :art_style, :avatar)
  end

  # allow user to update their info without password
  def update_resource(resource, params)
    resource.update_without_password(params)
  end

end
