import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./style";
import memories from "../../images/memories.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  console.log(user);

  useEffect(() => {
    // const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const {
    appBar,
    heading,
    image,
    toolbar,
    profile,
    userName,
    brandContainer,
    purple,
    logout,
  } = useStyles();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  return (
    <>
      <AppBar className={appBar} position="static" color="inherit">
        <div className={brandContainer}>
          <Typography
            component={Link}
            to="/"
            className={heading}
            variant="h2"
            align="center"
          >
            Memories
          </Typography>
          <img className={image} src={memories} alt="memories" height="60" />
        </div>
        <Toolbar className={toolbar}>
          {user ? (
            <div className={profile}>
              <Avatar
                className={purple}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className={userName} variant="h6">
                {user.result.name}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                className={logout}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              LOGIN
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
