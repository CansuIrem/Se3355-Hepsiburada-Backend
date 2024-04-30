# Se3355-Hepsiburada-Backend

This repository contains the backend API for an online marketplace platform. It provides endpoints to manage advertisements and products in the marketplace.

# Technologies Used

Node.js

Express.js

MongoDB

Mongoose

# Installation

- Clone this repository to your local machine.
- Navigate to the project directory.
- Run npm install to install all dependencies.

# Setting Up

Make sure you have MongoDB installed and running on your machine.
Create a .env file in the root directory.
## Define the following environment variables in the .env file:
MONGODB_URI=<your_mongodb_uri>
PORT=<port_number>
Replace <your_mongodb_uri> with your MongoDB connection string and <port_number> with the desired port number for the server.
Save the .env file.
Usage

# Endpoints
### GET /main

Returns the advertisements displayed on the main screen.
### POST /addAdvert

Adds a new advertisement to the database.
Payload:
{
    "img": "string",
    "title": "string",
    "subTitle": "string",
    "photoCategory": "string"
}
### GET /listProduct

Lists all products from the database.
### GET /listProductById/{id}

Returns the data of the product with the given ID.
### POST /addProduct

Creates and saves a new product in the database.
Payload:
{
    "img": "string",
    "title": "string",
    "price": "number",
    "category": "string",
    "description": "string",
    "seller": "string",
    "address": "string",
    "deliverTomorrow": "boolean"
}
### POST /search

Searches for products with the given keyword from the title, description, seller, and category.
Payload:
{
    "keyword": "string"
}

