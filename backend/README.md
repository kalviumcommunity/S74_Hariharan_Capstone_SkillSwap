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

# 15-05-2025

## Live API: 
Base URL: [https://s74-hariharan-capstone-skillswap-deployed.onrender.com](https://s74-hariharan-capstone-skillswap-deployed.onrender.com)


### Endpoints:
- `GET /api/users/` -> Fetch all users
- `POST /api/creatUser` -> Create a new user
- `PUT /api/users/:id` -> Update an existing user

Connected Database using MongoDB and whitelisted the Ip.