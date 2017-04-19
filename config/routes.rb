Rails.application.routes.draw do
  root 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :buckets, only: [:index, :show]
    end
  end

end
