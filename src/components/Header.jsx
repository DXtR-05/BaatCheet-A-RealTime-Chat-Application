import { LogOut } from "react-feather";
import useAuth from "../utils/useAuth";

const Header = () => {
  const { user, handleUserLogout } = useAuth();
  return (
    <div>
    <h1 id="heading">Welcome TO BaatChit !</h1>
    <header id="header--wrapper">
      {user ? (
        <>
          Welcome {user.name}
          <LogOut className="header--link" onClick={handleUserLogout} />
        </>
      ) : (
        <button>Login</button>
      )}
    </header>
    </div>
  )
};

export default Header;
