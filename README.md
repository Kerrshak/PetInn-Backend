# Pet Inn Backend

## Summary

This is a backend server that uses its endpoints to access, store, and alter data on MongoDB. It is designed to be used with a pet & home sitting app that can be found here: https://github.com/YeastWrangler/Pet-Inn

## Technologies used

- mongoDB
- mongoATLAS
- express
- mongoose
- passport

## Minimum node version

v18.4.0

## Setup

In shell navigate to the directory you want to clone the repo to. Then use  
`git clone https://github.com/Kerrshak/PetInn-Backend`

You will need to create a file called `.env` in the `PETINN-BACKEND` folder. A guide on how to set this up to work with mongoDB can be found here: `https://northflank.com/guides/connecting-to-a-mongo-db-database-using-node-js`

Open the repo in your chosen code editor. To install the necessary dependencies open the terminal and run  
`npm install`

Then, to locally host the server, run `npm run dev` in the terminal. It can then be accessed from `http://localhost:9090/`. Using Insomnia allows for making GET, POST, and DELETE requests on the various endpoints.

## Hosted site

https://busy-ruby-narwhal-kit.cyclic.app

## Endpoints

In the following endpoints "{ type: String, required: true }" is used to donate the data type of each property in the object and whether or not it is required.

### Users

- POST `/api/user/login`  
  Signs a user in. Takes an object in the format of:

  {  
   email: { type: String, required: true },  
   password: { type: String, required: true }  
   }

- POST `/api/users/signup`  
  Creates a new user profile. Takes an object in the format of:

  {  
  username: { type: String, required: true },  
  password: { type: String, required: true },  
  email: { type: String, required: true },  
  avatar_url: { type: String, required: true },  
  bio: { type: String, required: false },  
  location: { type: String, required: true },  
  watchlist: { type: Array, required: false }  
  }

- GET `/api/users/logout`  
  Logs the current user out.

### Reviews

- GET `/api/reviews/:username`  
  Returns an array of all the reviews for the specified user.

- POST `/api/reviews`  
  Posts a new review to the server. Takes an object in the format of:

  {  
  username: { type: String, required: true },  
  posted_by: { type: String, required: true },  
  body: { type: String, required: true },  
  rating: { type: Number, required: true }  
   }

- DELETE `/api/reviews/:_id`  
  Deletes the review specified by "\_id" from the server.

### Owners

- GET `/api/owners/listings`  
   Returns an array of all listings by owners looking for sitters.

- GET `/api/owners/listings/:_id`  
   Returns the listing object specified by "\_id" in the parametric endpoint.

- POST `/api/owners/listings`  
  Posts a new owner listing to the server. Takes an object in the format of:

  {  
  username: { type: String, required: true },  
  title: { type: String, required: true },  
  pets: { type: Array (contains strings of pet types), required: true },  
  from_date: { type: Date, required: true },  
  to_date: { type: Date, required: true },  
  location: { type: String, required: true },  
  additional_info: { type: String, required: false },  
  payment: { type: Number, required: true },  
  image_urls: { type: String, required: true }  
  }

- DELETE `/api/owners/listings/:_id`  
  Deletes a listing from the server as specified by "\_id"

### Sitters

- GET `/api/sitters/listings`  
   Returns an array of all listings by sitters.

- GET `/api/sitters/listings/:_id`  
  Returns the listing object specified by "\_id" in the parametric endpoint.

- POST `/api/sitters/listings`

  {  
  username: { type: String, required: true },  
  title: { type: String, required: true },  
  suitable_pets: { type: Array (contains strings of pet types), required: true },  
  from_date: { type: Date, required: true },  
  to_date: { type: Date, required: true },  
  location: { type: String, required: true },  
  additional_info: { type: String, required: true },  
  payment: { type: Number, required: true },  
  user_avatar_url: { type: String, required: true }  
  }

- DELETE `/api/sitters/listings/:_id`  
  Deletes a listing from the server as specified by "\_id"
