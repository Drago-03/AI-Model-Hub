"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/providers/AppProvider';
import { AnimatedButton } from '@/components/ui/animated-button';
import { AnimatedCard } from '@/components/ui/animated-card';
import { 
  Plus, Upload, Zap, Users, DollarSign, 
  BarChart2, TrendingUp, Clock, Diamond, Settings,
  Layers, Database, Award, Bookmark, Eye, AlertTriangle
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SalesAnalytics from '@/components/dashboard/SalesAnalytics';
import ModelAnalytics from '@/components/dashboard/ModelAnalytics';
import CustomerManagement from '@/components/dashboard/CustomerManagement';
import ProfileCompleteModal from '@/components/ProfileCompleteModal';

interface StatCard {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  change?: number;
  color: string;
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [chartHovered, setChartHovered] = useState<number | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [hasCompletedProfile, setHasCompletedProfile] = useState(false);
  const router = useRouter();
  const { user, appUser } = useAppContext();
  
  // Fake model data
  const myModels = [
    {
      id: "model1",
      name: "ImageGen Pro",
      description: "Advanced image generation with unmatched detail and prompt accuracy",
      category: "Computer Vision",
      sales: 128,
      rating: 4.8,
      status: "active",
      coverImage: "https://images.unsplash.com/photo-1686191482311-cb3fa868a543"
    },
    {
      id: "model2",
      name: "NLP Transformer X",
      description: "State-of-the-art language model for text generation and analysis",
      category: "NLP",
      sales: 87,
      rating: 4.7,
      status: "pending",
      coverImage: "https://images.unsplash.com/photo-1655635949212-1d8f4f103ea1"
    },
    {
      id: "model3",
      name: "VoiceClone Ultra",
      description: "Ultra-realistic voice cloning with minimal training data",
      category: "Audio",
      sales: 42,
      rating: 4.5,
      status: "active",
      coverImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
    }
  ];
  
  // Revenue data for chart
  const revenueData = [
    { month: "Jan", amount: 1250 },
    { month: "Feb", amount: 1800 },
    { month: "Mar", amount: 1400 },
    { month: "Apr", amount: 2100 },
    { month: "May", amount: 1700 },
    { month: "Jun", amount: 2400 },
    { month: "Jul", amount: 3100 }
  ];
  
  // Stats cards
  const stats: StatCard[] = [
    { label: "Total Models", value: myModels.length, icon: <Layers className="h-5 w-5" />, color: "from-blue-500 to-cyan-400" },
    { label: "Total Sales", value: 257, icon: <TrendingUp className="h-5 w-5" />, change: 12, color: "from-green-500 to-emerald-400" },
    { label: "Revenue", value: "$7,840", icon: <DollarSign className="h-5 w-5" />, change: 18, color: "from-purple-500 to-violet-400" },
    { label: "Model Views", value: "12.4K", icon: <Eye className="h-5 w-5" />, change: 5, color: "from-pink-500 to-rose-400" }
  ];
  
  // Recent activities
  const activities = [
    { text: "Your model 'ImageGen Pro' was purchased", time: "2 hours ago", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
    { text: "New 5-star review on 'NLP Transformer X'", time: "Yesterday", icon: <Award className="h-4 w-4 text-yellow-400" /> },
    { text: "Your model was featured on the homepage", time: "3 days ago", icon: <Bookmark className="h-4 w-4 text-blue-400" /> },
    { text: "Your account reached Gold tier status", time: "1 week ago", icon: <Diamond className="h-4 w-4 text-amber-400" /> }
  ];
  
  // Find the highest value for chart scaling
  const maxRevenue = Math.max(...revenueData.map(item => item.amount));

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    // Check if the user has completed their profile
    // In a real application, you would check this from the database/context
    const checkProfileStatus = () => {
      if (user && !hasCompletedProfile && !localStorage.getItem('profileCompleted')) {
        setIsProfileModalOpen(true);
      }
    };
    
    if (!loading) {
      checkProfileStatus();
    }
  }, [user, loading, hasCompletedProfile]);
  
  // Handle profile completion
  const handleProfileComplete = (profileData: any) => {
    console.log("Profile data:", profileData);
    // In a real app, save this data to the database
    // For now, just save to localStorage to avoid showing the modal again
    localStorage.setItem('profileCompleted', 'true');
    setHasCompletedProfile(true);
    setIsProfileModalOpen(false);
  };
  
  // Tab data
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart2 className="h-4 w-4 mr-2" /> },
    { id: 'models', label: 'My Models', icon: <Database className="h-4 w-4 mr-2" /> },
    { id: 'sales', label: 'Sales', icon: <DollarSign className="h-4 w-4 mr-2" /> },
    { id: 'customers', label: 'Customers', icon: <Users className="h-4 w-4 mr-2" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-4 w-4 mr-2" /> }
  ];
  
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <svg className="animate-spin h-10 w-10 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <p className="text-purple-300 animate-pulse text-lg font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Welcome Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-1"
          >
            <h1 className="text-3xl font-bold">Yo, {user?.displayName || 'Creator'}! 👋</h1>
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-xs px-2 py-1 rounded-full text-white font-medium">
              GOLD TIER
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Welcome to your neural command center. Let's check out your stats and models!
          </motion.p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative overflow-hidden rounded-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 rounded-xl`} />
              <div className="p-6 backdrop-blur-sm border border-white/10 rounded-xl relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <div className="p-2 bg-white/10 rounded-lg">
                    {stat.icon}
                  </div>
                  {stat.change && (
                    <span className={`text-xs font-medium flex items-center ${stat.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change > 0 ? '↑' : '↓'} {Math.abs(stat.change)}%
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Tabs */}
        <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-hide gap-2">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl flex items-center whitespace-nowrap text-sm ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content - Revenue Chart */}
                <div className="lg:col-span-2">
                  <AnimatedCard className="p-6 h-full">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-bold">Revenue Overview</h2>
                      <select 
                        className="bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-sm"
                        aria-label="Select time period"
                      >
                        <option>Last 7 months</option>
                        <option>Last 12 months</option>
                        <option>This year</option>
                      </select>
                    </div>
                    
                    {/* Chart */}
                    <div className="relative h-64">
                      <div className="absolute inset-0 flex items-end justify-between px-2">
                        {revenueData.map((item, index) => {
                          const height = (item.amount / maxRevenue) * 100;
                          return (
                            <motion.div
                              key={index}
                              className="relative group flex flex-col items-center"
                              onHoverStart={() => setChartHovered(index)}
                              onHoverEnd={() => setChartHovered(null)}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                              {/* Tooltip */}
                              {chartHovered === index && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="absolute bottom-full mb-2 bg-black/80 text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap"
                                >
                                  ${item.amount.toLocaleString()}
                                </motion.div>
                              )}
                              
                              <div 
                                className="w-10 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-md relative overflow-hidden group-hover:from-purple-400 group-hover:to-pink-400"
                                style={{ height: '100%' }}
                              >
                                <motion.div 
                                  className="absolute inset-0 bg-white/20"
                                  initial={{ y: '100%' }}
                                  whileHover={{ y: '0%' }}
                                  transition={{ duration: 0.3 }}
                                />
                              </div>
                              <div className="text-xs mt-2 text-gray-400">{item.month}</div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-white/10 mt-6">
                      <div>
                        <p className="text-gray-400 text-sm">Total Revenue</p>
                        <p className="text-2xl font-bold">$7,840</p>
                      </div>
                      <AnimatedButton variant="primary" size="sm">
                        <span className="flex items-center">
                          <Zap className="h-4 w-4 mr-1" /> 
                          Generate Report
                        </span>
                      </AnimatedButton>
                    </div>
                  </AnimatedCard>
                </div>
                
                {/* Sidebar - Recent Activity */}
                <div>
                  <AnimatedCard className="p-6 h-full">
                    <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
                    <div className="space-y-4">
                      {activities.map((activity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="flex gap-3 pb-4 border-b border-white/5 last:border-0"
                        >
                          <div className="p-2 bg-white/5 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                            {activity.icon}
                          </div>
                          <div>
                            <p className="text-sm">{activity.text}</p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div 
                      className="mt-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Link href="#" className="text-sm text-purple-400 hover:text-purple-300 flex items-center">
                        View all activity
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </motion.div>
                  </AnimatedCard>
                </div>
              </div>
            )}
            
            {activeTab === 'models' && (
              <ModelAnalytics />
            )}
            
            {activeTab === 'sales' && (
              <SalesAnalytics />
            )}
            
            {activeTab === 'customers' && (
              <CustomerManagement />
            )}
            
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">Account Settings</h2>
                    <p className="text-gray-400">Manage your profile and preferences</p>
                  </div>
                </div>
                
                {/* Profile Settings Card */}
                <AnimatedCard className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-medium">Profile Information</h3>
                    <AnimatedButton variant="outline" size="sm" onClick={() => setIsProfileModalOpen(true)}>
                      Edit Profile
                    </AnimatedButton>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Display Name</p>
                      <p className="font-medium">{user?.displayName || 'Not set'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <p className="font-medium">{user?.email || 'Not set'}</p>
                    </div>
                  </div>
                </AnimatedCard>
                
                {/* Notifications Card */}
                <AnimatedCard className="p-6">
                  <h3 className="text-lg font-medium mb-4">Notification Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-gray-400">Receive emails about sales and updates</p>
                      </div>
                      <div className="relative">
                        <input type="checkbox" id="emailNotifications" className="sr-only peer" defaultChecked />
                        <label htmlFor="emailNotifications" className="block w-12 h-6 rounded-full bg-gray-700 cursor-pointer after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:w-5 after:h-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-6 peer-checked:bg-purple-500" aria-label="Toggle email notifications"></label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Push Notifications</p>
                        <p className="text-sm text-gray-400">Receive push notifications on your device</p>
                      </div>
                      <div className="relative">
                        <input type="checkbox" id="pushNotifications" className="sr-only peer" />
                        <label htmlFor="pushNotifications" className="block w-12 h-6 rounded-full bg-gray-700 cursor-pointer after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:w-5 after:h-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-6 peer-checked:bg-purple-500" aria-label="Toggle push notifications"></label>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
                
                {/* Danger Zone */}
                <AnimatedCard className="p-6 border border-red-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-red-500/10 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-red-400">Danger Zone</h3>
                      <p className="text-sm text-gray-400 my-2">Permanently delete your account and all related data</p>
                      <AnimatedButton variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                        Delete Account
                      </AnimatedButton>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
      
      {/* Profile Completion Modal */}
      {user && (
        <ProfileCompleteModal
          isOpen={isProfileModalOpen}
          onClose={() => setIsProfileModalOpen(false)}
          onComplete={handleProfileComplete}
          userData={{
            displayName: user.displayName || '',
            email: user.email || '',
            photoURL: user.photoURL || '',
          }}
        />
      )}
    </div>
  );
} 