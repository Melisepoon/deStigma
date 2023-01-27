import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
//import LandingPage from "./views/LandingPage";
import MyDashboard from "./views/MyDashboard";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/About";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Patients";
import BlogPosts from "./views/BlogPosts";
import Symptoms from "./views/Symptoms"

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/MyDashboard" />
  },
  {
    path: "/MyDashboard",
    layout: DefaultLayout,
    component: MyDashboard
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/symptoms",
    layout: DefaultLayout,
    component: Symptoms
  }
];
