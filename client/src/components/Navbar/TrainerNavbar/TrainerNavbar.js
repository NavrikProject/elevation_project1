import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {
  LogoContainer,
  LogoImage,
  MenuBarContainer,
  MenuContainer,
  MenuItem,
  Nav,
  NavItem,
  NavLink,
  RightbarContainer,
  SearchForm,
  ProfileImg,
  SearchBoxDiv,
  RightbarContainerMenu,
  RightbarContainerList,
  SearchBoxInput,
  FaSearchIcon,
} from "./TrainerNavbarElements.js";
import logo from "../../../images/logo-rm.png";
import { logOut } from "../../../redux/userRedux.js";

const TrainerNavbar = ({ toggleMenuItems }) => {
  const user = useSelector((state) => state.user.currentUser);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogoutHandler = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <Nav>
      <LogoContainer>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/${user?.type}`}
        >
          <LogoImage src={logo} alt="brand " />
        </Link>
      </LogoContainer>
      <MenuContainer>
        <MenuItem>
          {/* redirect to home page */}
          <NavItem>
            <NavLink>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/${user?.type}`}
              >
                Home
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/my-students"
            >
              My Students
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/add-new-course"
            >
              Add New Course
            </Link>
          </NavItem>
        </MenuItem>
      </MenuContainer>
      <RightbarContainer>
        <RightbarContainerMenu>
          <RightbarContainerList>
            <SearchBoxDiv>
              <SearchForm>
                <SearchBoxInput placeholder="Search....."></SearchBoxInput>
                <FaSearchIcon />
              </SearchForm>
            </SearchBoxDiv>
          </RightbarContainerList>
          <RightbarContainerList>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/my-learning`}
            >
              My Courses
            </Link>
          </RightbarContainerList>
          <RightbarContainerList>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/trainer/profile/${user.id}`}
            >
              Profile
            </Link>
          </RightbarContainerList>
          <RightbarContainerList>
            <Link
              to={`/cart`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ProfileImg src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </Link>
          </RightbarContainerList>
          <RightbarContainerList onClick={onLogoutHandler}>
            <Link style={{ textDecoration: "none", color: "white" }} to={`/`}>
              Logout
            </Link>
          </RightbarContainerList>
        </RightbarContainerMenu>
      </RightbarContainer>

      <MenuBarContainer onClick={toggleMenuItems}>
        <FaBars />
      </MenuBarContainer>
    </Nav>
  );
};
export default TrainerNavbar;
