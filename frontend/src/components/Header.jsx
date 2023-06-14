import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutAPI] = useLogoutMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutAPI().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const renderNavigation = () => {
    if (userInfo) {
      return (
        <>
          <NavDropdown title={userInfo.name} id='username'>
            <LinkContainer to='/profile'>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        </>
      );
    } else {
      return (
        <>
          <LinkContainer to='/login'>
            <Nav.Link>
              <FaSignInAlt /> Sign In
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to='/register'>
            <Nav.Link>
              <FaSignOutAlt /> Sign Up
            </Nav.Link>
          </LinkContainer>
        </>
      );
    }
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>MERN Auth</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>{renderNavigation()}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
