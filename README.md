# Project Title
Weather_app & Book_Management_app
## Introduction
Book_Management:-Developed a book management API using Node.js, offering user authentication, CRUD operations for book entries, and filtering by author/publication year. Included clear API documentation and basic security measures for input validation.
Weather_app:- Created a React weather dashboard with city search, displaying current weather details. Responsive design for desktop and mobile. GitHub repo includes setup instructions.

## Project Type
Frontend & Backend 

## Deplolyed App
Frontend: https://deployed-site.whatever
Backend: https://deployed-site.whatever
Database: https://deployed-site.whatever
```bash
## Directory Structure
DigitalPaani-Assignment/
├─ book_management/
   ├─ src/
   │  ├─ config/
   │  │  └─ (configuration files)
   │  ├─ models/
   │  │  └─ (database models)
   │  ├─ controllers/
   │  │  └─ (controller logic)
   │  ├─ routes/
   │  │  └─ (API route definitions)
   │  ├─ app.js
   │  └─ index.js
├─ weather_app/
   ├─ public/
   │  └─ (public assets)
   ├─ src/
   │  └─ (React components, styles, and logic)
```



## Video Walkthrough of the project
Attach a very short video walkthough of all of the features [ 1 - 3 minutes ]

## Video Walkthrough of the codebase
Attach a very short video walkthough of codebase [ 1 - 5 minutes ]

## Features
List out the key features of your application.

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

Include screenshots as necessary.
```bash
## Credentials
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
List and provide a brief overview of the technologies used in the project.

- Node.js
- Express.js
- MongoDB
- ReactJS
- Tailwind CSS
- Flowbite
