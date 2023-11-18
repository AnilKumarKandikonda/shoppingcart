# Shopping Cart Application

Welcome to the Shopping Cart application! This project allows users to browse a list of products fetched from the FakeStore API, add them to a shopping cart, and perform various cart operations. The application is connected to Firebase for real-time data synchronization.

## Getting Started Locally

Follow these steps to run the application on your local machine:

1. Clone the repository from the [GitHub link](https://github.com/AnilKumarKandikonda/shoppingcart).
2. Navigate to the project folder where `package.json` is located.
3. Open a terminal and run the command `npm install` to install the required dependencies. This will create a `node_modules` folder in the root of the project.
4. Once the installation is complete, run `npm start` to start the development server.
5. The application will be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.

## Project Structure

- The application utilizes Firebase for real-time data synchronization. The cart page is connected to Firebase, allowing seamless updates when products are added or removed.
- FakeStore API is used for fetching product data, providing a dynamic and realistic shopping experience.
- The project is documented with clear actions and reducers for better understanding and maintainability.

## Firebase Integration

- The application is connected to Firebase for real-time data updates on the cart page.
- Firebase Realtime Database is utilized for fetching, updating, and deleting cart items.

## Deployment

The application is deployed using Firebase Hosting. You can access the live version at [your-firebase-app-url](https://shyftlabs-d4803.web.app/)