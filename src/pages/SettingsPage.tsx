import React, { useState } from 'react';
import EditProfile from '../components/settings/EditProfile';
import { motion, AnimatePresence } from 'framer-motion';
// import EditProfileForm from '@/components/Settings/EditProfileForm';
// import PreferenceSettings from '@/components/Settings/PreferenceSettings';
// import SecuritySettings from '@/components/Settings/SecuritySettings';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="p-6 space-y-6 bg-white rounded-2xl">

  <div className="flex gap-8 border-b border-[#F4F5F7] mb-8">
  {['profile', 'preferences', 'security'].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`pb-2 text-md transition-all duration-300 ${
          activeTab === tab
            ? 'border-b-2 border-black text-black font-semibold'
            : 'text-[#718EBF] hover:text-black'
        }`}
      >
        {tab === 'profile' && 'Edit Profile'}
        {tab === 'preferences' && 'Preferences'}
        {tab === 'security' && 'Security'}
      </button>
    ))}
  </div>

  <div className="relative min-h-[200px]">
    <AnimatePresence mode="wait">
      {activeTab === 'profile' && (
        <motion.div
          key="profile"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <EditProfile />
        </motion.div>
      )}

      {activeTab === 'preferences' && (
        <motion.div
          key="preferences"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* <PreferenceSettings /> */}
        </motion.div>
      )}

      {activeTab === 'security' && (
        <motion.div
          key="security"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* <SecuritySettings /> */}
        </motion.div>
      )}
    </AnimatePresence>
  </div>

</div>
  );
};

export default SettingsPage;