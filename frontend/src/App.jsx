import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import { AuthProvider } from "./context/AuthContext";
import RequireAuth from "./components/RequireAuth";
import RequireAdmin from "./components/RequireAdmin";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

import FreelancerServices from "./pages/services/FreelancerServices";

// Business services (hire pages)
import HireSocialMediaManager from "./pages/services/businessservices/HireSocialMediaManager";
import HireContentWritersCopywriters from "./pages/services/businessservices/HireContentWritersCopywriters";
import HireVideoEditor from "./pages/services/businessservices/HireVideoEditor";
import HireShortFormVideoEditor from "./pages/services/businessservices/HireShortFormVideoEditor";
import HirePodcastProducer from "./pages/services/businessservices/HirePodcastProducer";
import HireGraphicDesigner from "./pages/services/businessservices/HireGraphicDesigner";
import HireWebDesignerDeveloper from "./pages/services/businessservices/HireWebDesignerDeveloper";
import HireAppDeveloper from "./pages/services/businessservices/HireAppDeveloper";
import HireVoiceOverArtist from "./pages/services/businessservices/HireVoiceOverArtist";
import HirePaidSocialAdsExpert from "./pages/services/businessservices/HirePaidSocialAdsExpert";
import HireCommunityManager from "./pages/services/businessservices/HireCommunityManager";
import HireMarketingAnalyticsExpert from "./pages/services/businessservices/HireMarketingAnalyticsExpert";
import HireMarketingConsultant from "./pages/services/businessservices/HireMarketingConsultant";

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
        {/* Business Services (hire pages) */}
        {/* ========================= */}
        <Route path="/business-services/hire-social-media-manager/" element={<HireSocialMediaManager />} />
        <Route path="/business-services/hire-content-writer-copywriter/" element={<HireContentWritersCopywriters />} />
        <Route path="/business-services/hire-video-editor-producer/" element={<HireVideoEditor />} />
        <Route path="/business-services/hire-short-form-video-editor/" element={<HireShortFormVideoEditor />} />
        <Route path="/business-services/hire-podcast-producer-editor/" element={<HirePodcastProducer />} />
        <Route path="/business-services/hire-graphic-designer/" element={<HireGraphicDesigner />} />
        <Route path="/business-services/hire-web-designer-developer/" element={<HireWebDesignerDeveloper />} />
        <Route path="/business-services/hire-app-designer-developer/" element={<HireAppDeveloper />} />
        <Route path="/business-services/hire-voice-over-artist-audio-producer/" element={<HireVoiceOverArtist />} />
        <Route path="/business-services/hire-paid-social-ads-expert/" element={<HirePaidSocialAdsExpert />} />
        <Route path="/business-services/hire-community-manager/" element={<HireCommunityManager />} />
        <Route path="/business-services/hire-marketing-analytics-expert/" element={<HireMarketingAnalyticsExpert />} />
        <Route path="/business-services/hire-digital-marketing-consultant/" element={<HireMarketingConsultant />} />

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

        

      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;