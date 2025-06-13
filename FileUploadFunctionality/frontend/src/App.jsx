// frontend/src/App.jsx

import FileUpload from "./components/FileUpload";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";

function AppContent() {
  const {token, logout} = useContext(AuthContext);

  return (
    <div>
      <h1>SkillSwap</h1>
      {token ? (
        <> 
         <button onClick={logout}>Logout</button>
         <FileUpload/>
        </>
      ): (
        <>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
}

function App () {
  return(
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}


export default App;
