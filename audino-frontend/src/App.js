import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import ErrorBoundary from "./routes/error-page";
import Root from "./routes/root";
import SignupPage from "./pages/SignupPage/SignupPage";
import { createPortal } from "react-dom";
import { Toaster } from "react-hot-toast";
import EmailVerificataionSentPage from "./pages/EmailVerificataionPage/EmailVerificataionSentPage";
import EmailVerificationFailPage from "./pages/EmailVerificataionPage/EmailVerificationFailPage";
import EmailConfirmationPage from "./pages/EmailVerificataionPage/EmailConfirmationPage";
import AcceptInvitationPage from "./pages/AcceptInvitationPage/AcceptInvitationPage";
import ScrollToTop from "./functions/scrollToUp";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {CustomToast()}
      <Routes>
        <Route
          path="/login"
          exact
          element={
            <ErrorBoundary>
              <LoginPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="/signup"
          exact
          element={
            <ErrorBoundary>
              <SignupPage />
            </ErrorBoundary>
          }
        />
        <Route
          exact
          path="/auth/email-verification-sent"
          element={
            <ErrorBoundary>
              <EmailVerificataionSentPage />
            </ErrorBoundary>
          }
        />
        <Route
          exact
          path="/auth/incorrect-email-confirmation"
          element={
            <ErrorBoundary>
              <EmailVerificationFailPage />
            </ErrorBoundary>
          }
        />

        <Route
          exact
          path="/auth/email-confirmation"
          element={
            <ErrorBoundary>
              <EmailConfirmationPage />
            </ErrorBoundary>
          }
        />
        <Route
          exact
          path="/auth/register/invitation"
          element={
            <ErrorBoundary>
              <AcceptInvitationPage />
            </ErrorBoundary>
          }
        />

        {/* <Route path="/google/oauth" element={<GoogleRedirect />} /> */}
        <Route
          path="/*"
          element={
            <ErrorBoundary>
              <Root />
            </ErrorBoundary>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const CustomToast = () => {
  return createPortal(
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{
        position: "fixed",
        // zIndex: "999999"
      }}
      toastOptions={{
        // Define default options
        className: "toaster-style text-sm rounded-md",
        duration: 5000,
        style: {
          background: "#fff",
          color: "#333",
        },

        // Default options for specific types
        success: {
          style: {
            background: "#f0fdf4",
            color: "#15803d",
          },
        },
        error: {
          style: {
            background: "#fef2f2",
            color: "#b91c1c",
          },
        },
        custom: {
          style: {
            background: "#fff",
            color: "#000",
          },
        },
      }}
    />,
    document.getElementById("alert-modal")
  );
};
