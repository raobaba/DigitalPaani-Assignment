# Project Title
Weather_app & Book_Management_app
## Swagger-OPENAPI-Documentation

[Swagger Documentation](https://digitalpaani-book-management.onrender.com/api-docs/)

## Introduction

### Book Management API
- Developed a book management API using Node.js.
- Features user authentication and authorization.
- Provides CRUD operations for book entries.
- Offers filtering by author and publication year.
- Includes clear API documentation.
- Implements basic security measures for input validation.

### Weather App
- Created a React weather dashboard.
- Allows users to search for weather details by city.
- Features responsive design for both desktop and mobile.
- GitHub repository includes setup instructions.


## Project Type
Frontend & Backend 

## Deplolyed App
```bash
Frontend: https://digitalpaani-weather.netlify.app/
Backend: https://digitalpaani-book-management.onrender.com/
Database: mongodb+srv://YOUR_USERNAME:YUOR_PASSWORD@cluster0.vvtoxbl.mongodb.net/DigitalPaani?retryWrites=true&w=majority
```
## Postman API
 ```bash
[Postman API Testing](https://universal-star-350473.postman.co/workspace/My-Workspace~44391309-b21a-4654-829d-81bea0efc5df/collection/30678801-77db6517-e2eb-47ed-8165-f6dce02b3c35?action=share&creator=30678801)

```
## Directory Structure
```bash
DigitalPaani-Assignment/
├─ book_management/
   ├─ src/
   │  ├─ config/
   │  │  └─ db.js
   │  ├─ models/
   │  │  └─ user.model.js
   │  │  └─ book.model.js
   │  ├─ controllers/
   │  │  └─ user.contorller.js
   │  │  └─ book.controller.js
   │  ├─ routes/
   │  │  └─ user.route.js
   │  │  └─ book.route.js
   │  ├─ app.js
   │  └─ index.js
├─ weather_app/
   ├─ public/
   │  └─ (public assets)
   ├─ src/
   │  ├─ components/
   │  │  └─ Details.jsx
   │  │  └─ Navbar.jsx
   │  │  └─ WeatherForecase.jsx
   │  ├─ context/
   │  │  └─ ContextProvider.jsx
   │  ├─ service/
   │  │  └─ API.js
   │  └─ App.css
   │  └─ App.js
   │  └─ Index.css
   │  └─ Index.js
   └─ package-lock.json
   └─ package.json
```



## Video Walkthrough of the project
Attach a very short video walkthough of all of the features [ 1 - 3 minutes ]

## Video Walkthrough of the codebase
Attach a very short video walkthough of codebase [ 1 - 5 minutes ]

## Features
- Create a Node.js book management API with user authentication, CRUD operations for books, filtering by author/year, and robust security measures. Document API endpoints clearly.
- Develop a React weather dashboard with city search, displaying temperature, humidity, and wind speed. Ensure responsiveness for desktop and mobile. Share GitHub link with setup instructions.


## Design Decisions & Assumptions:

### React Weather Dashboard:
- Use React.js for UI.
- Employ a third-party weather API.
- Ensure responsiveness with CSS frameworks.
- Opt for minimalist UI.
- Assume city name searches as primary.

### Node.js Book Management API:
- Choose Node.js for backend.
- Utilize Express.js for API.
- Implement JWT for authentication.
- Use MongoDB for storage.
- Assume basic security measures.
- Prioritize scalability and performance.


## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For BE/FS projects, guide the reviewer how to check mongodb schema etc.

```bash
git clone <complete_repository> 
For Backend:-
cd book_management
npm install 
cd my-project-backend
npm start

For Frontend:-
```bash
cd weather_app
npm install
npm start
```

## Usage
Provide instructions and examples on how to use your project.

```bash
# Example
```

## Credentials
Include screenshots as necessary.
```bash
# MongoURL
mongoURL= YOUR_MONGODB_URL_HERE
# PORT
PORT=8000
NODE_ENV=development
# Cookie expiry
COOKIE_EXPIRE=5
# JWT secret and expiry
JWT_SECRET=YOUR_JWT_SECRET_HERE
JWT_EXPIRE=2h
```

## APIs Used
If your application relies on external APIs, document them and include any necessary links or references.

## API Endpoints
### User Management:
- `POST /api/v1/users/register`: Register a new user.
- `POST /api/v1/users/login`: User login.
- `GET /api/v1/users/logout`: User logout.

### Book Management:
- `GET /api/v1/books`: Retrieve all books.
- `GET/api/v1/books/getById/:id`: Retrieve a book by ID.
- `POST /api/v1/books/create`: Create a new book.
- `PUT/api/v1/books/update/:id`: Update a book by ID.
- `DELETE /api/v1/books/delete/:id`: Delete a book by ID.



## Technology Stack
- Node.js
- Express.js
- MongoDB
- ReactJS
- Tailwind CSS
- Flowbite
