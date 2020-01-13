Rails.application.routes.draw do
  get 'api/products'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]

    resources :products, only: [:create, :index, :show, :update, :destroy]
    resources :categories, only: [:index, :show]
    
  end

end
