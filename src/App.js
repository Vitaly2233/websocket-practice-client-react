import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import Auth from "./Pages/Auth";
import "./styles/App.css";
import { cookieValue } from "./utils/cookie-parser";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (cookieValue(document.cookie, "token")) setIsAuth(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
