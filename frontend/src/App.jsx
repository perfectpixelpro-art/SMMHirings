import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import RequireAuth from "./components/RequireAuth";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import VerifyEmailPage from "./pages/auth/VerifyEmailPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import BusinessProfilePage from "./pages/profile/BusinessProfilePage";
import FreelancerProfilePage from "./pages/profile/FreelancerProfilePage";
import ProfilePending from "./pages/profile/ProfilePending";
import AIInterview from "./pages/AIInterview";
import FreelancerDashboard from "./pages/freelancer/FreelancerDashboard";
import RequireAdmin from "./components/RequireAdmin";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* Landing */}
          <Route path="/" element={<HomePage />} />

          {/* Login / Signup (role-aware portals) */}
          <Route path="/login/freelancer" element={<LoginPage role="freelancer" />} />
          <Route path="/login/business" element={<LoginPage role="business" />} />
          <Route path="/signup/freelancer" element={<SignupPage role="freelancer" />} />
          <Route path="/signup/business" element={<SignupPage role="business" />} />

          {/* Shared auth flows (role-agnostic) */}
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          {/* Profile creation (protected, role-gated) */}
          <Route path="/profile/business" element={<RequireAuth role="business"><BusinessProfilePage /></RequireAuth>} />
          <Route path="/profile/freelancer" element={<RequireAuth role="freelancer"><FreelancerProfilePage /></RequireAuth>} />
          <Route path="/profile/pending" element={<RequireAuth><ProfilePending /></RequireAuth>} />
          <Route path="/ai-interview" element={<RequireAuth><AIInterview /></RequireAuth>} />
          <Route path="/dashboard" element={<RequireAuth role="freelancer"><FreelancerDashboard /></RequireAuth>} />

          {/* Admin (separate auth) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<RequireAdmin><AdminDashboard /></RequireAdmin>} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
