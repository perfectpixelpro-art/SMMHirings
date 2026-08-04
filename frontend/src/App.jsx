import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import { AuthProvider } from "./context/AuthContext";
import RequireAuth from "./components/RequireAuth";
import RequireAdmin from "./components/RequireAdmin";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

import FreelancerServices from "./pages/services/FreelancerServices";

// Auth / profile / interview / admin (functional app)
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
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

// Business Services
import SocialMediaManagement from "./pages/services/SocialMediaManagement";
import ContentWriting from "./pages/services/ContentWriting";
import VideoProduction from "./pages/services/VideoProduction";
import ShortFormVideo from "./pages/services/ShortFormVideo";
import PodcastProduction from "./pages/services/PodcastProduction";
import GraphicDesign from "./pages/services/GraphicDesign";
import WebsiteDesign from "./pages/services/WebsiteDesign";
import AppDesign from "./pages/services/AppDesign";
import VoiceOver from "./pages/services/VoiceOver";
import PaidSocial from "./pages/services/PaidSocial";
import CommunityManagement from "./pages/services/CommunityManagement";
import Analytics from "./pages/services/Analytics";
import Consulting from "./pages/services/Consulting";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about/" element={<AboutUs />} />
        <Route path="/contact/" element={<ContactUs />} />
        <Route
          path="/remote-marketing-freelance-jobs/"
          element={<FreelancerServices />}
        />

        {/* ========================= */}
        {/* Auth (role-aware portals) */}
        {/* ========================= */}
        <Route path="/login/freelancer" element={<LoginPage role="freelancer" />} />
        <Route path="/login/business" element={<LoginPage role="business" />} />
        <Route path="/signup/freelancer" element={<SignupPage role="freelancer" />} />
        <Route path="/signup/business" element={<SignupPage role="business" />} />

        {/* Shared auth flows */}
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

        {/* ========================= */}
        {/* Business Services */}
        {/* ========================= */}

        <Route
          path="/business-services/hire-social-media-manager/"
          element={<SocialMediaManagement />}
        />

        <Route
          path="/business-services/hire-content-writer-copywriter/"
          element={<ContentWriting />}
        />

        <Route
          path="/business-services/hire-video-editor-producer/"
          element={<VideoProduction />}
        />

        <Route
          path="/business-services/hire-short-form-video-editor/"
          element={<ShortFormVideo />}
        />

        <Route
          path="/business-services/hire-podcast-producer-editor/"
          element={<PodcastProduction />}
        />

        <Route
          path="/business-services/hire-graphic-designer/"
          element={<GraphicDesign />}
        />

        <Route
          path="/business-services/hire-web-designer-developer/"
          element={<WebsiteDesign />}
        />

        <Route
          path="/business-services/hire-app-designer-developer/"
          element={<AppDesign />}
        />

        <Route
          path="/business-services/hire-voice-over-artist-audio-producer/"
          element={<VoiceOver />}
        />

        <Route
          path="/business-services/hire-paid-social-ads-expert/"
          element={<PaidSocial />}
        />

        <Route
          path="/business-services/hire-community-manager/"
          element={<CommunityManagement />}
        />

        <Route
          path="/business-services/hire-marketing-analytics-expert/"
          element={<Analytics />}
        />

        <Route
          path="/business-services/hire-digital-marketing-consultant/"
          element={<Consulting />}
        />

      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;