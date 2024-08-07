import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100%;
  background: #333;
  color: white;
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-250px')};
  transition: right 0.3s ease;
  z-index: 1000;
`;

const SidebarContent = styled.ul`
  list-style: none;
  padding: 20px;
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px 0;

  &:hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: white;
  text-align: left;
  font-size: 1em;
  padding: 10px 0;
  width: 100%;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user");
    
    // Clear any authentication tokens or state
    // For example, if you're using Context API:
    // authContext.logout();
    
    // Optionally, you can make a request to your backend to invalidate the session
    // fetch("http://your-api.com/logout", {
    //   method: "POST",
    //   credentials: "include",
    // }).then(() => {
    //   // Handle any post-logout actions
    // });

    // Close the sidebar
    // onClose();

    // Redirect to home page or login page
    navigate('/');

    // Show a logout message
    alert('You have been logged out successfully');
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarContent>
        <li><SidebarLink to="/" onClick={onClose}>Home</SidebarLink></li>
        <li><SidebarLink to="/payment" onClick={onClose}>Payment</SidebarLink></li>
        <li>
          <LogoutButton onClick={handleLogout}>
            Logout
          </LogoutButton>
        </li>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;