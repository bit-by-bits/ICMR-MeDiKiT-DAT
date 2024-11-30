import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";

import "./index.css";

import LoginImg from "./assets/login.jpeg";

import { URLs } from "./routes";

import { ThemeProvider } from "./context/ThemeContext/ThemeContextProvider";
import { AuthProvider } from "./context/AuthContext/AuthContextProvider";
import { FiltersProvider } from "./context/FilterContext/FiltersContextProvider";

import AppLayout from "./layouts/app";
import AuthLayout from "./layouts/auth";

import ErrorPage from "./pages/error";
import UnavailablePage from "./pages/unavailabe";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Settings from "./pages/settings";
import Home from "./pages/home";
// import HospitalDataManagement from "./pages/hospital-data-management";
// import Tests from "./pages/tests";
// import Labs from "./pages/labs";
// import RegisterPatient from "./pages/register-patient";
// import PatientConsultation from "./pages/patient-consultation";
// import AdminHelp from "./pages/admin-help";
// import PatientHelp from "./pages/patient-help";

const createRoutes = () => [
  {
    path: "/",
    element: <Navigate to={URLs.auth.login} />
  },
  {
    path: URLs.auth.base,
    element: <AuthLayout coverImage={LoginImg} />,
    children: [
      {
        path: URLs.auth.login,
        element: <Login />
      },
      {
        path: URLs.auth.forgotPassword,
        element: <UnavailablePage />
      },
      {
        path: URLs.auth.google,
        element: <UnavailablePage />
      },
      {
        path: URLs.auth.signUp,
        element: <Signup />
      },
      {
        path: "*",
        element: <UnavailablePage />
      }
    ]
  },
  {
    path: URLs.app.base,
    element: <AppLayout />,
    children: [
      {
        path: URLs.app.home,
        element: <Home />
      },
      // {
      //   path: URLs.app.hospitalDataManagement,
      //   element: <HospitalDataManagement />
      // },
      // {
      //   path: URLs.app.tests,
      //   element: <Tests />
      // },
      // {
      //   path: URLs.app.labs,
      //   element: <Labs />
      // },
      // {
      //   path: URLs.app.registerPatient,
      //   element: <RegisterPatient />
      // },
      // {
      //   path: URLs.app.patientConsultation,
      //   element: <PatientConsultation />
      // },
      // {
      //   path: URLs.app.adminHelp,
      //   element: <AdminHelp />
      // },
      // {
      //   path: URLs.app.patientHelp,
      //   element: <PatientHelp />
      // },
      {
        path: URLs.app.settings,
        element: <Settings />
      },
      {
        path: "*",
        element: <UnavailablePage />
      }
    ]
  },
  {
    path: URLs.api.base,
    element: <AppLayout />,
    children: [
      {
        path: "*",
        element: <UnavailablePage />
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  }
];

const router = createBrowserRouter(createRoutes());

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider>
        <AuthProvider>
          <FiltersProvider>
            <RouterProvider router={router} />
          </FiltersProvider>
        </AuthProvider>
      </ThemeProvider>
    </StrictMode>
  );
}
