import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import LessonPage from "../pages/LessonPage";
import HomePage from "../pages/HomePage";
import LetsLearnPage from "../pages/LetsLearnPage";
import ProfilePage from "../pages/ProfilePage";
import PrivateRoute from "../components/PrivateRoute";
import TutorialsPage from "../pages/TutorialsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // Handles invalid routes (404)
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/start-learning",
        element: <LetsLearnPage />,
      },
      {
        path: "/lesson/:lessonNo",
        element: (
          <PrivateRoute>
            <LessonPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/tutorials",
        element: (
          <PrivateRoute>
            <TutorialsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
