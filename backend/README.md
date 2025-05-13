# SkillSwap Backend

This is the backend server for the SkillSwap project, built with Node.js, Express, and MongoDB.
Organized to a seperate folder named backend, which works as the backend server.

## Live Backend Server
The backend server is live and can be accessed here:
[SkillSwap Backend on Render]()

## Available Endpoints
- **GET** `/api/skills` - Get all skills
- **PUT** `/api/skil


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
