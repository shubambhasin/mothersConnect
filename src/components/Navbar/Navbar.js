import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { logout } from "../../features/user/userSlice";
import { NavLink } from "react-router-dom";

export const Navbar = styled.div`
  height: 3rem;
  background-color: white;
  margin-bottom: 1rem;
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
`;

const MyNavbar = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => {
    return state.user;
  });

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Navbar className="flex aic jcsa global-shadow">
        <NavLink to="/">
          <span>Mother connect</span>
        </NavLink>
        <div className="flex gap-2">
          <NavLink to="/profile" className="btn">
            Profile
          </NavLink>
          <span className="flex jcc aic">
            {!token && (
              <>
                {" "}
                {/* <NavLink to="/signup">Signup</NavLink> */}
                <NavLink to="/signin">Signin</NavLink>
              </>
            )}
            {token && (
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            )}
          </span>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
