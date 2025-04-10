import React, { lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProfileProvider } from '../services/ProfileContext';

// import SettingsPage from '../pages/SettingsPage';

const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const SettingsPage = lazy(() => import('../pages/SettingsPage'));
const SidebarLayout = lazy(() => import('../layouts/SidebarLayout'));
const PageUnderConstruction = lazy(() => import('../components/common/PageUnderConstruction'));
// import SidebarLayout from '@/layouts/SidebarLayout'; // Layout with sidebar and header
// import LoginPage from '@/pages/LoginPage'; // Optional: If you have authentication
// import NotFoundPage from '@/pages/NotFoundPage'; // Optional: 404 Page

const AppRoutes: React.FC = () => {
  return (
    <ProfileProvider>
    <Router>
      <Routes>
        {/* Public Routes */}
        {/* <Route path="/login" element={<LoginPage />} /> */}

        {/* Protected Routes */}
        <Route element={<SidebarLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/transactions" element={<PageUnderConstruction />} />
          <Route path="/accounts" element={<PageUnderConstruction />} />
          <Route path="/investments" element={<PageUnderConstruction />} />
          <Route path="/credit-cards" element={<PageUnderConstruction />} />
          <Route path="/loans" element={<PageUnderConstruction />} />
          <Route path="/services" element={<PageUnderConstruction />} />
          <Route path="/my-privileges" element={<PageUnderConstruction />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>

        {/* Catch All Route */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
    </ProfileProvider>
  );
};

export default AppRoutes;