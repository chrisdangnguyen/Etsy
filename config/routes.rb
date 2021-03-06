Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    get '/products/search', to: 'products#search'
    get '/products/category', to: 'products#category'
    resources :products, only: [:create, :index, :show, :update, :destroy]
    resources :cart_items
    
  end

end
