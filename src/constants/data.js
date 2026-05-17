import React from 'react';
import {
  FaMoneyBillWave,
  FaChartBar,
  FaPiggyBank,
  FaHandshake,
  FaShieldAlt,
  FaBell,
} from 'react-icons/fa';

export const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const FEATURES = [
  {
    icon: <FaMoneyBillWave />,
    title: 'Real-Time Expense Tracking',
    description:
      'Live sync keeps your balance and transactions up to date the moment you add them. Pull to refresh anytime for the latest data.',
  },
  {
    icon: <FaChartBar />,
    title: 'Advanced Visual Statistics',
    description:
      'Fully overhauled charts and graphs for any period. Break down spending by category and compare income vs expenses at a glance.',
  },
  {
    icon: <FaPiggyBank />,
    title: 'Savings Goals',
    description:
      'Set goals with target amounts and due dates. Use the intuitive category picker to organize goals and watch progress bars grow.',
  },
  {
    icon: <FaHandshake />,
    title: 'Smart Bill Splitting',
    description:
      'Split bills equally or by custom percentage. Settle up in seconds and optionally record your share as a personal expense.',
  },
  {
    icon: <FaBell />,
    title: 'In-App Update Notifications',
    description:
      'Get notified inside the app when a new version drops on the Play Store or App Store — always stay current without checking manually.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure & Private',
    description:
      'Built with TypeScript on a Firebase backend. 100% ad-free, no data sharing, no subscriptions, and no hidden fees — ever.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Arya Madan',
    rating: 5,
    text: 'TrackaExpense makes managing my personal finances incredibly easy. The visual statistics help me understand my spending patterns better.',
  },
  {
    name: 'Zia Dongri',
    rating: 5,
    text: 'The bill splitting feature is a game-changer! No more awkward money conversations with roommates. Everything is clear and transparent.',
  },
  {
    name: 'Sanaj Jadhav',
    rating: 5,
    text: 'I love the savings goals feature! It keeps me motivated and on track to achieve my financial dreams. Simple yet powerful.',
  },
];

export const STORE_LINKS = {
  playStore: 'https://play.google.com/store/apps/details?id=com.trackaexpense',
  appStore: 'https://apps.apple.com/us/app/trackaexpense/id6752925670',
};
