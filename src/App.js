import React, { useState, useEffect } from "react";
import "./App.css";
import { BasicLayout } from "react-antd-dashboard";
import Dashboard from "./pages/dashboard";
import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import logo from "./logo.svg";
function App() {
  return (
    <BasicLayout
      loading={false} // if set true, it will show spinner or custom loading page. Best used when initializing application.
      loadingPage={null} // custom component for loading page, optional
      logo={null} // optional, source or component intended for logo in top left corner when side menu is collapsed
      expandedLogo={null} // optional, source or component intended for logo in top left corner when side menu is expanded
      applicationName={"My example Dashboard"} // appplication  name shown on left side of toolbars
      authenticated={true} // Flag which indicated if user is logged in, if user is not
      user={{
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
      }} // information about logged in user
      pages={[
        {
          key: "home", // key is used for routing, you can access this page via route endpoint e.g. (app.com/users)
          component: Dashboard,
        },
      ]} // array which contains all available pages in app, all pages are accessible via route endpoints
      menuItems={[
        {
          // first page is automatically loaded and is available via '/' route
          key: "home", // key must match key atrribute of page item
          value: "Home",
          icon: <HomeOutlined />,
          // rules: {}  optional, used for component view management with <View> component
        },
      ]} // array which contains all visible pages in side menu
      dropdownItems={[]} // menu items for dropdown menu beneath user information
      loginLogo={logo} // optional, source for picture on default login page
      loginLogoStyle={null} // optional, style object for login logo, also you can override 'login-logo' class
      loginPage={null} // optional, you can customize login page by creating and supplying custom page component.
      // BasicLayout will pass to your component loginLogo, loginLogoStyle props and onLogin callbacks
      notFound={null} // optional, custom not found (404) page component
      forbidden={null} // optional, custom forbidden (403) page component
      footer={null} // optional, footer component
      footerStyle={null} // optional, footer container style object, default style is textAlign:center
    />
  );
}

export default App;
