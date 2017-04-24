Rails.application.routes.draw do
  root 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :buckets, only: [:index, :show, :update]
      resources :balls, only: [:index, :show, :update]
    end
  end
end
