This project is a simple Node.js-based user registration and CRUD API using Express, MongoDB, and JWT for authentication. It allows user registration, authentication, and management of user data.

To get started with the project, follow these steps:

1. Clone the repository:
```
git clone <repository_url>
```

2. Install the required dependencies:
```
npm install
```

3. Ensure that you have MongoDB installed and running locally or set the `MONGODB_URI` environment variable to the URL of your MongoDB instance.

4. Create a `.env` file in the root directory of the project and add the following variables with appropriate values:
```
MONGODB_URI=<your_mongodb_connection_string>
SECRET=<your_jwt_secret>
```
Replace `<your_mongodb_connection_string>` with your MongoDB connection string and `<your_jwt_secret>` with your chosen JWT secret.

5. Start the server in development mode using the following command:
```
npm run start:dev
```

6. To start the server in production mode, use the following command:
```
npm start
```

The API will be accessible at `http://localhost:4000` (or the specified port) once the server is running.

GitHub description:
A simple Node.js-based user registration and CRUD API with Express, MongoDB, and JWT authentication. Allows user registration, authentication, and management of user data.
