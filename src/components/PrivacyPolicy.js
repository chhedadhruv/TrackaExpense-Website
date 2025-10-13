import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaShieldAlt,
  FaDatabase,
  FaCog,
  FaLock,
  FaLink,
  FaUserCheck,
  FaBaby,
  FaSync,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
  FaGooglePlay,
  FaApple,
  FaComments
} from 'react-icons/fa';
import './PrivacyPolicy.css';

const PRIMARY_COLOR = '#6366f1';
const BACKGROUND_COLOR = '#f8fafc';
const TEXT_COLOR = '#1e293b';
const SUBTITLE_COLOR = '#64748b';

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const privacyPolicySections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: FaShieldAlt,
      content: `TrackaExpense is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our expense tracking application.

Last updated: ${new Date().toLocaleDateString()}

Your Privacy Rights:
• You have complete control over your data
• Account deletion is available instantly through the app
• All data can be permanently removed at any time
• We never sell your personal information

By using TrackaExpense, you agree to the collection and use of information in accordance with this policy.`
    },
    {
      id: 'data_collection',
      title: 'Information We Collect',
      icon: FaDatabase,
      content: `We collect the following types of information:

Personal Information:
• Name and email address (required for account creation)
• Phone number (optional, for account verification)
• Profile pictures (optional, stored securely)
• Google account information (when using Google Sign-In)
• Apple ID information (when using Apple Sign-In)

Financial Data:
• Income and expense records (titles, descriptions, amounts, categories, dates)
• Receipt images and attachments
• Account balance information
• Transaction history and spending patterns

Group & Social Data:
• Group memberships for expense splitting
• Shared expense details and payment records
• Split calculations and settlement information

Authentication Data:
• Email/password credentials (for traditional sign-in)
• Google account credentials (for Google Sign-In)
• Apple ID credentials (for Apple Sign-In)
• Authentication tokens and session data
• Account verification status

Technical Information:
• Device information and operating system
• App usage patterns and navigation data
• Local app preferences and settings
• Network information for connectivity

Device Permissions:
• Camera access (for receipt photos)
• Photo library access (for receipt images)
• Phone permissions (for device identification and security)
• Storage access (for saving and retrieving app data)`
    },
    {
      id: 'data_usage',
      title: 'How We Use Your Information',
      icon: FaCog,
      content: `We use your information to:

Core Functionality:
• Provide expense tracking and financial management services
• Process and store your income and expense transactions
• Calculate spending statistics and financial insights
• Enable expense splitting with friends and groups

Account Management:
• Create and maintain your user account
• Authenticate your identity through email/password, Google Sign-In, or Apple Sign-In
• Secure your account with multi-factor authentication options
• Send important account-related notifications
• Provide customer support when needed

Authentication Services:
• Process Google Sign-In authentication requests
• Process Apple Sign-In authentication requests
• Verify user identity through Google's and Apple's secure authentication systems
• Manage account linking between email, Google, and Apple accounts
• Handle account recovery and verification processes

App Improvement:
• Analyze usage patterns to improve app functionality
• Identify and fix technical issues
• Develop new features based on user needs
• Optimize performance and user experience

Communication:
• Send account verification emails
• Provide password reset functionality
• Send notifications about account security
• Respond to feedback and support requests

We do NOT use your financial data for advertising or sell your information to third parties.`
    },
    {
      id: 'data_storage',
      title: 'Data Storage & Security',
      icon: FaLock,
      content: `Cloud Storage:
Your data is securely stored using Google Firebase services:
• Authentication data is handled by Firebase Auth (including Google Sign-In and Apple Sign-In)
• Financial records are stored in Firebase Firestore
• Receipt images are stored in Firebase Storage
• All data transmission is encrypted using industry-standard protocols

Local Storage:
Some data is stored locally on your device:
• App preferences and settings
• Temporary session information
• Onboarding status
• Authentication tokens (encrypted)

Security Measures:
• End-to-end encryption for data transmission
• Secure authentication using Firebase Auth, Google Sign-In, and Apple Sign-In
• OAuth 2.0 protocol for Google and Apple authentication
• Regular security updates and monitoring
• Access controls and user permission systems
• Secure file storage with user-specific access
• Optional phone number verification for enhanced security

Google Sign-In Security:
• Uses Google's secure OAuth 2.0 authentication
• No passwords stored for Google-authenticated accounts
• Automatic token refresh and session management
• Google's advanced security features and fraud detection

Apple Sign-In Security:
• Uses Apple's secure OAuth 2.0 authentication
• No passwords stored for Apple-authenticated accounts
• Automatic token refresh and session management
• Apple's advanced security features and privacy protection

Data Retention:
• Your data is retained while your account is active
• You can delete your account instantly through the app's "Account Actions" feature
• Complete data removal includes all transactions, receipts, and associated files
• Google Sign-In data is managed according to Google's privacy policy
• Apple Sign-In data is managed according to Apple's privacy policy
• Inactive accounts may be deleted after extended periods
• Individual data elements can be deleted selectively upon request`
    },
    {
      id: 'third_party',
      title: 'Third-Party Services',
      icon: FaLink,
      content: `TrackaExpense uses the following third-party services:

Google Firebase:
• Firebase Authentication for secure login/signup
• Firebase Firestore for data storage
• Firebase Storage for receipt images
• Subject to Google's Privacy Policy

Google Sign-In:
• Google OAuth 2.0 for secure authentication
• Google account integration for seamless sign-in
• Google's privacy and security standards
• Subject to Google's Terms of Service and Privacy Policy

Apple Sign-In:
• Apple OAuth 2.0 for secure authentication
• Apple ID integration for seamless sign-in
• Apple's privacy and security standards
• Subject to Apple's Terms of Service and Privacy Policy

Device Services:
• Camera and photo library (with your permission)
• Phone permissions (for device identification and security)
• Local storage for app preferences
• Network access for data synchronization

No Data Selling:
We do not sell, trade, or rent your personal information to third parties. Any third-party integrations are solely for app functionality and are governed by their respective privacy policies.

Analytics:
We may use anonymized analytics to understand app usage patterns, but this data cannot be linked back to individual users.`
    },
    {
      id: 'user_rights',
      title: 'Your Rights & Choices',
      icon: FaUserCheck,
      content: `You have the following rights regarding your personal data:

Access & Control:
• View and edit your profile information
• Download your transaction data
• Modify or delete individual transactions
• Update privacy preferences
• Manage Google Sign-In account linking

Authentication Management:
• Switch between email/password, Google Sign-In, and Apple Sign-In
• Unlink Google or Apple accounts from TrackaExpense
• Manage authentication preferences
• Control account recovery options

Data Portability:
• Export your financial data in standard formats
• Transfer your data to other services
• Request a complete copy of your data
• Export Google Sign-In related data (subject to Google's policies)
• Export Apple Sign-In related data (subject to Apple's policies)

Deletion Rights:
• Delete individual transactions or receipts
• Close your account and delete all associated data
• Use the in-app account deletion feature for immediate removal
• Request immediate data removal through customer support
• Unlink Google or Apple accounts while keeping local data

Account Deletion Process:
• Access "Account Actions" in your profile settings
• Complete the secure deletion process with confirmations
• All data is permanently removed including transactions, receipts, and group memberships
• Google Sign-In data is managed according to Google's account settings
• Apple Sign-In data is managed according to Apple's account settings
• Account deletion cannot be reversed once completed

Consent Management:
• Withdraw consent for data processing at any time
• Opt out of non-essential data collection
• Control what information is shared in group features
• Manage phone permission access
• Control Google Sign-In and Apple Sign-In data sharing

Communication:
• Unsubscribe from promotional emails
• Control notification preferences
• Limit communication types

To exercise any of these rights, please contact us through the app's contact feature or email support.`
    },
    {
      id: 'google_signin',
      title: 'Google Sign-In, Apple Sign-In & Phone Permissions',
      icon: FaGooglePlay,
      content: `Google Sign-In Integration:
We offer Google Sign-In as a convenient authentication method. When you choose to sign in with Google:
• We access your Google account's basic profile information (name, email, profile picture)
• We do not access your Google Drive, Gmail, or other Google services
• Your Google account remains under your control and Google's privacy policies
• You can unlink your Google account from TrackaExpense at any time
• Google Sign-In uses OAuth 2.0 for secure authentication

Apple Sign-In Integration:
We offer Apple Sign-In as a convenient authentication method. When you choose to sign in with Apple:
• We access your Apple ID's basic profile information (name, email, profile picture)
• We do not access your iCloud, iMessage, or other Apple services
• Your Apple ID remains under your control and Apple's privacy policies
• You can unlink your Apple ID from TrackaExpense at any time
• Apple Sign-In uses OAuth 2.0 for secure authentication

Phone Permissions (Optional):
We request phone permissions for the following purposes (all optional):
• Device identification and security verification
• Account recovery and verification processes
• Enhanced security features and fraud prevention
• Phone number verification for account security (optional)

What We Do NOT Do:
• We do not access your call logs or text messages
• We do not make calls or send messages without your permission
• We do not share your phone number with third parties
• We do not use phone permissions for advertising or tracking

Managing Permissions:
• Phone permissions are optional and can be denied
• You can revoke phone permissions through your device settings
• Revoking permissions may limit some security features
• You can still use the app with email/password, Google Sign-In, or Apple Sign-In authentication

Data Security:
• Phone numbers (if provided) are encrypted and stored securely
• Google Sign-In data follows Google's security standards
• Apple Sign-In data follows Apple's security standards
• All authentication data is protected with industry-standard encryption
• We regularly audit our security practices and update them as needed`
    },
    {
      id: 'children',
      title: 'Children\'s Privacy',
      icon: FaBaby,
      content: `TrackaExpense is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.

If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can delete such information.

For users between 13-18, parental consent may be required depending on your jurisdiction's laws.`
    },
    {
      id: 'changes',
      title: 'Privacy Policy Updates',
      icon: FaSync,
      content: `We may update this Privacy Policy from time to time to reflect:
• Changes in our data practices
• New features or services
• Legal or regulatory requirements
• Security improvements

Notification:
• We will notify you of significant changes through the app
• Updated policies will be posted with a new "last updated" date
• Continued use of the app constitutes acceptance of changes

Version History:
You can always view the current version of our Privacy Policy within the app. Previous versions may be requested through customer support.`
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: FaEnvelope,
      content: `If you have questions about this Privacy Policy or your data:

Contact Us Feature:
Use the built-in contact feature in the app's Profile section to reach our support team directly.

Data Protection Officer:
For privacy-specific inquiries, you can request to speak with our Data Protection Officer through the contact system.

Response Time:
We aim to respond to all privacy-related inquiries within 48 hours.

Legal Requests:
For legal or compliance requests, please include relevant documentation and specify the nature of your request.`
    }
  ];

  const ExpandableSection = ({ section }) => {
    const isExpanded = expandedSections[section.id];
    const IconComponent = section.icon;
    
    return (
      <div className="privacy-section-card" key={section.id}>
        <button
          className="privacy-section-header"
          onClick={() => toggleSection(section.id)}
          aria-expanded={isExpanded}
        >
          <div className="privacy-section-header-left">
            <div className="privacy-icon-container">
              <IconComponent size={24} />
            </div>
            <h3 className="privacy-section-title">{section.title}</h3>
          </div>
          {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </button>
        
        {isExpanded && (
          <div className="privacy-section-content">
            <div className="privacy-divider"></div>
            <div className="privacy-content-text">
              {section.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const handleContactSupport = () => {
    // Navigate to contact page
    window.location.href = '/contact';
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        
        {/* Header Section */}
        <div className="privacy-header-section">
          <div className="privacy-header-icon">
            <FaShieldAlt size={48} />
          </div>
          <h1 className="privacy-header-title">Privacy Policy</h1>
          <p className="privacy-header-subtitle">
            Your privacy matters to us. Learn how we collect, use, and protect your data with complete transparency.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="privacy-summary-card">
          <div className="privacy-summary-content">
            <h2 className="privacy-summary-title">Quick Summary</h2>
            <p className="privacy-summary-text">
              TrackaExpense collects only the data necessary to provide expense tracking services. 
              We use secure Firebase infrastructure, never sell your data, and give you complete control 
              over your information. Click any section below for detailed information.
            </p>
          </div>
        </div>

        {/* Download Buttons Section */}
        <div className="download-buttons-section">
          <h2>Get TrackaExpense</h2>
          <div className="download-buttons-container">
            <a 
              href="https://play.google.com/store/apps/details?id=com.trackaexpense" 
              target="_blank" 
              rel="noopener noreferrer"
              className="download-btn"
            >
              <FaGooglePlay size={24} />
              <div className="download-btn-text">
                <span className="download-btn-title">Get it on</span>
                <span className="download-btn-store">Google Play</span>
              </div>
            </a>
            <a 
              href="https://apps.apple.com/us/app/trackaexpense/id6752925670" 
              target="_blank" 
              rel="noopener noreferrer"
              className="download-btn"
            >
              <FaApple size={24} />
              <div className="download-btn-text">
                <span className="download-btn-title">Download on the</span>
                <span className="download-btn-store">App Store</span>
              </div>
            </a>
          </div>
          <p className="download-note">
            TrackaExpense is now available on both the App Store and Google Play Store!
          </p>
        </div>

        {/* Privacy Policy Sections */}
        <div className="privacy-sections-container">
          <h2>Privacy Policy Details</h2>
          {privacyPolicySections.map(section => (
            <ExpandableSection key={section.id} section={section} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="privacy-action-buttons">
          <Link to="/contact" className="privacy-primary-button">
            <FaComments size={20} />
            Contact Support
          </Link>
          
          <button 
            className="privacy-secondary-button"
            onClick={() => handleExternalLink('https://firebase.google.com/support/privacy')}>
            <FaLink size={20} />
            Firebase Privacy Policy
          </button>
        </div>

        {/* Footer */}
        <div className="privacy-footer">
          <p className="privacy-footer-text">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="privacy-footer-text">
            TrackaExpense v1.2.6
          </p>
          <p className="privacy-footer-text">
            <Link to="/">← Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
