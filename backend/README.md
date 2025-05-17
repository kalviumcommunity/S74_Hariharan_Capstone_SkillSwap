# SkillSwap Backend

This is the backend server for the SkillSwap project, built with Node.js, Express, and MongoDB.
Organized to a seperate folder named backend, which works as the backend server.

## Live Backend Server
The backend server is live and can be accessed here:
[SkillSwap Backend on Render]()


## 13-05-2025 (Tuesday) ->
- Organized the backend folder (structured and modularized) with SkillSwap/
├── backend/
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── middlewares/
│   │   └── errorMiddleware.js
│   ├── config/
│   │   └── dbConfig.js
│   ├── utils/
│   │   └── responseHandler.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── README.md

## 15-05-2025

## Live API: 
Base URL: [https://s74-hariharan-capstone-skillswap-deployed.onrender.com](https://s74-hariharan-capstone-skillswap-deployed.onrender.com)


### Endpoints:
- `GET /api/users/` -> Fetch all users
- `POST /api/creatUser` -> Create a new user
- `PUT /api/users/:id` -> Update an existing user

Connected Database using MongoDB and whitelisted the Ip.

## 16-05-2025
Implemented relationships between entities.
It is crucial for building a scalable and well-structured backend.

1.  User -> Skill: A user has multiple skills (One-to-Many).

2.  User -> Swap Request: A user can send and recieve multiple swap requests (one-to-Many).

3.  Swap Request -> User: A swap request is linked to two users (Many-to-One or Many-to-Many).

### Folder Structure
backend/
|-- models/
|  |-- userModel.js
|  |-- skillModel.js
|  |-- swapRequestModel.js