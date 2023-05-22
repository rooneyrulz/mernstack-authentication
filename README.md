# mernstack-authentication
MERN Stack authentication app

## How to run the app?

### Backend:

1. RUN npm install from the root dir (assume you have node.js installed).
2. Create .env file in the root dir & add the environment variables as follows (I have mongodb installed locally, you can replace the values with yours)
    Example .env file:
        PORT=8000
        NODE_ENV=development
        JWT_SECRET_KEY=Zmp3b3JpNDM5NDgzOT4930reirjerkqwqw
        MONGODB_CONNECTION_URL=mongodb://localhost:27017/db-auth
        
3. RUN the backend API (You can run the API using either one npm scripts listed below)
    From the root dir,
      1. npm start
      2. npm run server (It will use nodemon & restart the server automatically in every signle change so recommended to use in development)


Now you have the API server up and running, How do you test it?
Here are some endpoints that you can test and make request to, using any API clients like Postman 

1. POST /api/users/auth
   You make a POST request to this endpoint in order to authenticate(login) a user with request body (email, password)
2. POST /api/users
   You make a POST request to this endpoint in order to create(register) a user with request body (name, email, password)
3. POST /api/users/logout
   You make a POST request to this endpoint in order to logout a user
4. GET /api/users/profile
   It is a protected route. You make a GET request to this endpoint in order to retrive the current user
5. PUT /api/users/profile
   It is a protected route. You make a PUT request to this endpoint in order to update the current user data with request body (name, email, password)
   
Make sure you prefix all the route with your base URL.
For example: (with value of the PORT defined in the .env above):
 http://localhost:8000
   
For more detailed Info You can always feel free to check the code :)
   
    
