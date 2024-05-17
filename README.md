# Adoption Center Platform

## Description

This project is a platform designed for an adoption center, accessible to both users and administrators. Users can search for pets available for adoption and send adoption requests to administrators. Administrators have additional functionalities, including the ability to manage pet information and view adoption requests.

<img width="1436" alt="Zrzut ekranu 2024-05-17 o 11 13 09" src="https://github.com/Pierogi-Tacos/adoption-center/assets/136697970/35beac0a-a105-417c-b342-00e324375b04">


## Instructions to Run the App

### 1. Clone the Repository

`git clone https://github.com/your-username/adoption-center-platform.git`<br />
`cd adoption-center-platform`

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then, run the following command to install the necessary dependencies:

`npm install`

### 3. Run the Application

To start the development server, run:

`npm run dev`

## Demo

You can see a live version of the project [here](https://adoption-pets.netlify.app/).

## Features

### User Capabilities

- Search and see the pets of the center.
- Send an adoption request to the Admin.

### Admin Capabilities

- Search and see the pets of the center.
- Edit, add, or delete pets.
- View the requests sent by users.

## API Endpoints

The site connects to an API with the following endpoints:

- **GET /pets**: Fetch data of animals.
- **GET /users**: Fetch data of users.
- **GET /requests**: Fetch data of requests.
- **PUT /pets/:id**: Edit the information of a pet.
- **POST /pets**: Create a new pet.
- **POST /requests**: Send a new adoption request.
- **DELETE /pets/:id**: Delete a pet.

## License

This project is open-source and available on **[GitHub](https://github.com/Pierogi-Tacos/adoption-center)**.
