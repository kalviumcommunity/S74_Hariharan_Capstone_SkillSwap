# SkillSwap FrontEnd

### 17-05-2025
Initialized React app with vite.

## Frontend Setup

1.  Initialized frontend with Vite + React fro optimized builds.
2.  Netlify Deployment -> 

  Build the frontend application using: ``` npm run build```

  Deployed to Netlify:  
    Published from the dist folder.
    Followed the Netlify CLI steps to make it live..
  
  Successfully deployed with the live link below.

### Learnings
  
1.  Setting up clean folder structure for better scalability.
2.  Building REST APIs with proper separation of concerns.
3.  Deploying frontend application on Netlify step by step.

### Deployment Link
https://tubular-snickerdoodle-145386.netlify.app/

### 20-05-2025

##  Tech Stack
- [React]
- [Vite]
- [Tailwind CSS]
- [Axios]
- [Node.js + Express... (backend)]


## 📂 Folder Structure

frontend/
├── public/
│ └── index.html
├── src/
│ ├── api/
│ │ └── api.js # Axios API calls
│ ├── components/
│ │ ├── Navbar.jsx # (optional component)
│ │ └── UserCard.jsx # User display card
│ ├── pages/
│ │ ├── HomePage.jsx # Homepage with all users
│ │ └── UserProfilePage.jsx # (optional for future)
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── package.json
├── vite.config.js
└── node_modules/