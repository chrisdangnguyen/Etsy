class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show" #need to look over this
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show 
        @user = User.find_by(id: params[:id])
        render :show
    end

    def update
        @user = User.find_by(id: params[:id])

        if params[:photo]
            @user.photo.purge
        end
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end

    end

    private

    def user_params
        params.require(:user).permit(:email, :name, :password, :city, :gender, :birth_month, :birth_day, :about, :photo)
    end
     
end
