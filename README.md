# React User Management App

A simple React app that allows users to be created, updated, deleted, and displayed. The backend is implemented using ExpressJS, NodeJS, and MongoDB.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create a new user with name, email, and age.
- Update an existing user's information.
- Delete a user from the database.
- Display a list of all users.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- npm (Node Package Manager) installed
- MongoDB installed and running

## Installation

1. Clone the repository:

2. Install dependencies:

   ```bash
   cd client
   ```

3. Install dependencies:

    ```bash
    npm i
    ```

## Configuration

1. Create a .env file in the client directory and configure the following variables:

   ```bash
   PORT=3001
   MONGO_URI=mongodb://localhost:27017/your-database-name
   ```
   Adjust the values according to your preferences and MongoDB setup.

## Usage

1. Start:

   ```bash
   cd client
   npm run dev

   cd server
   npm start
   ```

2.  Visit http://localhost:3001 in your web browser to use the React User Management App.

## API Endpoints

- POST /createUser: Create a new user.
- GET /: Retrieve a list of all users.
- GET /getUser/:id: Retrieve details of a specific user.
- PUT /updateUser/:id: Update the information of a specific user.
- DELETE /deleteUser/:id: Delete a specific user.

## Technologies Used

- React
- ExpressJS
- NodeJS
- MongoDB
