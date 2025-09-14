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
• We never sell your personal information to third parties
• Your financial data remains private and secure

By using TrackaExpense, you agree to the collection and use of information in accordance with this policy. We are transparent about our data practices and committed to earning your trust through responsible data handling.`
    },
    {
      id: 'data_collection',
      title: 'Information We Collect',
      icon: FaDatabase,
      content: `We collect the following types of information to provide you with the best expense tracking experience:

Personal Information:
• Name and email address (required for account creation and verification)
• Phone number (optional, for enhanced account security)
• Profile pictures (optional, stored securely on our servers)
• Account preferences and settings

Financial Data:
• Income and expense records (titles, descriptions, amounts, categories, dates)
• Receipt images and attachments (stored securely with encryption)
• Account balance information and transaction history
• Spending patterns and financial statistics (used for insights)
• Budget goals and savings targets

Group & Social Data:
• Group memberships for expense splitting functionality
• Shared expense details and payment records
• Split calculations and settlement information
• User interactions within shared groups

Technical Information:
• Device information (type, operating system, app version)
• App usage patterns and navigation data (for improving user experience)
• Authentication tokens and session data (for security)
• Local app preferences and settings
• Crash reports and error logs (for debugging and improvements)

Device Permissions (with your explicit consent):
• Camera access (for capturing receipt photos)
• Photo library access (for selecting receipt images)
• Contact access (optional, for inviting friends to groups)
• Push notifications (for important account updates)`
    },
    {
      id: 'data_usage',
      title: 'How We Use Your Information',
      icon: FaCog,
      content: `We use your information solely to provide and improve our expense tracking services:

Core Functionality:
• Provide comprehensive expense tracking and financial management tools
• Process and categorize your income and expense transactions
• Calculate spending statistics and generate financial insights
• Enable expense splitting with friends, family, and groups
• Synchronize your data across multiple devices securely

Account Management:
• Create and maintain your secure user account
• Authenticate your identity and protect against unauthorized access
• Send important account-related notifications and updates
• Provide responsive customer support when you need assistance
• Process account recovery requests securely

App Improvement & Analytics:
• Analyze usage patterns to enhance app functionality and user experience
• Identify and resolve technical issues and bugs
• Develop new features based on user feedback and needs
• Conduct A/B testing for improved user interfaces
• Generate anonymized statistics for product development

Communication:
• Send account verification and password reset emails
• Provide customer support responses and assistance
• Share important app updates and feature announcements
• Send optional promotional content (with your consent)

Data Protection Commitment:
We do NOT:
• Sell your personal or financial data to advertisers or third parties
• Use your financial information for advertising purposes
• Share your data with data brokers or marketing companies
• Access your data for purposes other than service provision`
    },
    {
      id: 'data_storage',
      title: 'Data Storage & Security',
      icon: FaLock,
      content: `Your data security is our highest priority. We implement industry-leading security measures:

Cloud Storage Infrastructure:
Your data is securely stored using Google Firebase services:
• Authentication managed by Firebase Auth with enterprise-grade security
• Financial records stored in Firebase Firestore with encryption at rest
• Receipt images stored in Firebase Storage with secure access controls
• All data transmission encrypted using TLS 1.3 protocols
• Regular security audits and compliance with industry standards

Local Storage:
Limited data stored locally on your device for performance:
• App preferences and personalization settings
• Temporary session information (automatically cleared)
• Cached data for offline functionality
• Onboarding status and tutorial progress

Security Measures:
• End-to-end encryption for all data transmission
• Multi-factor authentication support for enhanced account security
• Regular security updates and vulnerability patching
• Access controls with role-based permissions
• Automated intrusion detection and monitoring
• Secure API endpoints with rate limiting
• Regular security assessments and penetration testing

Data Retention & Lifecycle:
• Your data is retained while your account remains active
• Instant account deletion available through app's "Delete Account" feature
• Complete data removal includes all transactions, receipts, and associated files
• Backup data is permanently deleted within 30 days of account deletion
• Individual data elements can be selectively deleted upon request
• Inactive accounts may be archived after 2 years of no activity
• All deleted data is unrecoverable to ensure complete privacy

Geographic Data Storage:
• Primary data centers located in secure, compliant facilities
• Data residency options available for users in specific regions
• Regular backups stored in geographically distributed locations
• Compliance with regional data protection regulations (GDPR, CCPA)`
    },
    {
      id: 'third_party',
      title: 'Third-Party Services',
      icon: FaLink,
      content: `TrackaExpense integrates with carefully selected third-party services to enhance functionality:

Google Firebase (Primary Infrastructure):
• Firebase Authentication: Secure user registration and login
• Firebase Firestore: Encrypted database for transaction storage
• Firebase Storage: Secure file storage for receipt images
• Firebase Cloud Functions: Serverless backend processing
• Firebase Analytics: Anonymized usage statistics (opt-out available)
• Subject to Google's Privacy Policy and Enterprise agreements

Email Services:
• Transactional email delivery for account verification and notifications
• All emails are sent through secure, encrypted channels
• Email addresses are not shared with marketing services

Device-Level Services:
• Camera and photo library access (with explicit user permission)
• Contact access (optional, only for friend invitation features)
• Push notification services (device-specific, anonymized)
• Local storage APIs for app preferences

Security & Monitoring:
• Error tracking and crash reporting (anonymized data only)
• Performance monitoring for app optimization
• Security monitoring for fraud prevention

Third-Party Commitments:
• No data selling: We never sell your data to advertisers or data brokers
• Minimal data sharing: Only necessary data is shared for core functionality
• Due diligence: All third parties undergo security and privacy assessments
• Contractual protections: All service providers bound by strict data protection agreements
• Regular audits: We regularly review and audit third-party practices

Analytics & Insights:
• We may use anonymized, aggregated analytics to understand usage patterns
• Individual user data is never included in analytics reports
• All analytics data is opt-out available in app settings
• No personally identifiable information is included in analytics`
    },
    {
      id: 'user_rights',
      title: 'Your Rights & Choices',
      icon: FaUserCheck,
      content: `You have comprehensive rights and control over your personal data:

Access & Transparency:
• View and download all your personal data at any time
• Access detailed transaction history and financial records
• Review all account settings and privacy preferences
• Understand how your data is being used through this policy

Data Control & Modification:
• Edit or update your profile information instantly
• Modify or delete individual transactions and receipts
• Update privacy settings and data sharing preferences
• Control notification preferences and communication settings
• Manage group memberships and shared data visibility

Data Portability:
• Export your financial data in standard formats (CSV, JSON)
• Download all receipt images and attachments
• Transfer your data to other financial management services
• Request a complete archive of all your data

Deletion & Account Management:
• Delete individual transactions, receipts, or data categories
• Close your account and permanently delete all associated data
• Use the in-app "Delete Account" feature for immediate removal
• Request expedited data deletion through customer support

Account Deletion Process:
1. Access "Profile" → "Account Settings" → "Delete Account"
2. Complete the secure verification process with email confirmation
3. Choose between temporary deactivation or permanent deletion
4. All data permanently removed including transactions, receipts, groups
5. Confirmation email sent once deletion is complete
6. Account deletion is irreversible once completed

Privacy Controls:
• Withdraw consent for data processing at any time
• Opt out of optional data collection features
• Control data sharing in group expense features
• Manage cookie and tracking preferences
• Set data retention preferences

Communication Preferences:
• Unsubscribe from promotional emails instantly
• Control push notification types and frequency
• Manage in-app communication preferences
• Choose communication language and format

Legal Rights (varies by jurisdiction):
• Right to rectification of inaccurate data
• Right to restriction of processing
• Right to object to data processing
• Right to data portability
• Right to lodge complaints with data protection authorities

To exercise any of these rights:
• Use in-app settings and controls
• Contact our support team through the app
• Email our Data Protection Officer
• Response time: Within 72 hours for urgent requests, 30 days for complex requests`
    },
    {
      id: 'children',
      title: 'Children\'s Privacy Protection',
      icon: FaBaby,
      content: `TrackaExpense takes children's privacy seriously and complies with applicable child protection laws:

Age Restrictions:
• TrackaExpense is not intended for children under 13 years old
• We do not knowingly collect personal information from children under 13
• Users between 13-18 may require parental consent depending on jurisdiction
• Age verification is required during account registration

Child Protection Measures:
• Enhanced privacy protections for users under 18
• Limited data collection for minor users
• Restricted communication features for young users
• No targeted advertising to minors

Parental Rights & Controls:
• Parents can request access to their child's data
• Account deletion requests honored immediately from verified parents
• Parents can restrict certain app features for minor users
• Educational resources available for parents about digital financial literacy

Discovery of Child Data:
If you are a parent or guardian and believe your child under 13 has provided us with personal information:
• Contact us immediately through the app's support feature
• Email our Data Protection Officer with details
• We will delete such information promptly upon verification
• No penalties or complications for reporting

International Compliance:
• COPPA (Children's Online Privacy Protection Act) compliance
• GDPR-K (GDPR for children) compliance where applicable
• Age of consent varies by country (13-16 years)
• Local jurisdiction laws take precedence

Educational Approach:
• Age-appropriate financial literacy resources
• Parental involvement in financial education
• Safe introduction to money management concepts
• Privacy-first approach to youth financial education

Verification Processes:
• Age verification required during registration
• Parental consent mechanisms where legally required
• Enhanced verification for sensitive financial features
• Regular audits of user age verification systems`
    },
    {
      id: 'changes',
      title: 'Privacy Policy Updates',
      icon: FaSync,
      content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements:

Reasons for Updates:
• Changes in our data collection or processing practices
• Introduction of new app features or services
• Updates to legal or regulatory requirements
• Enhanced security measures or privacy protections
• User feedback and privacy improvement initiatives

Notification Process:
• Significant changes will be communicated through in-app notifications
• Email notifications sent to registered users for major updates
• Updated policy posted with clear "last updated" date
• 30-day advance notice for material changes affecting data use
• Opt-out options provided for new data uses requiring consent

Types of Changes:
• Minor updates: Clarifications, formatting, contact information updates
• Major updates: Changes to data collection, use, or sharing practices
• Legal updates: Compliance with new regulations or court orders
• Feature updates: New privacy controls or data protection measures

User Responses to Changes:
• Continued app use constitutes acceptance of minor updates
• Explicit consent required for material changes to data practices
• Account deletion option always available if you disagree with changes
• Granular consent options for new features or data uses

Version Control:
• All versions of the Privacy Policy are archived
• Previous versions available upon request
• Clear change logs maintained for transparency
• Legal review required for all policy updates

Implementation Timeline:
• Policy updates take effect 30 days after notification
• Grace period provided for users to review and respond
• Technical implementation aligned with policy effective date
• User education and support provided during transition periods

Questions About Changes:
• Contact support for clarification on policy updates
• Data Protection Officer available for privacy-related questions
• Community feedback encouraged on proposed changes
• Regular policy review meetings with user representatives`
    },
    {
      id: 'contact',
      title: 'Contact & Support',
      icon: FaEnvelope,
      content: `We're committed to transparency and responsive communication about your privacy:

Primary Contact Methods:
• In-App Support: Use the "Contact Support" feature in your profile settings
• Email Support: me@dhruvchheda.com (monitored 24/7)
• Data Protection Officer: me@dhruvchheda.com
• General Inquiries: me@dhruvchheda.com

Response Commitments:
• Privacy-related inquiries: Response within 24 hours
• Data deletion requests: Processed within 72 hours
• General support questions: Response within 48 hours
• Complex technical issues: Resolution within 5 business days
• Legal or compliance matters: Escalated immediately

Data Protection Officer:
• Available for all privacy-related questions and concerns
• Handles data protection compliance and user rights requests
• Manages privacy policy updates and implementation
• Coordinates with legal teams for complex privacy matters
• Direct contact available for sensitive privacy issues

Support Languages:
• English (primary support language)
• Hindi, Tamil, Telugu (regional support available)
• Translation services available for complex privacy matters
• Multilingual resources and documentation

What to Include When Contacting Us:
• Clear description of your privacy concern or question
• Your account email address (for verification)
• Relevant screenshots or documentation
• Specific data or features you're asking about
• Preferred response method and timeline

Types of Support Available:
• Privacy policy clarification and explanation
• Data access, correction, and deletion requests
• Account security and privacy settings help
• Compliance and legal inquiry support
• Technical privacy feature assistance

Legal & Regulatory Contacts:
• Compliance team for regulatory inquiries
• Legal department for court orders or subpoenas
• Security team for data breach or security concerns
• Business team for partnership and integration privacy questions`
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
            <button className="download-btn coming-soon" disabled>
              <FaGooglePlay size={24} />
              <div className="download-btn-text">
                <span className="download-btn-title">Get it on</span>
                <span className="download-btn-store">Google Play</span>
                <span className="coming-soon-badge">Coming Soon</span>
              </div>
            </button>
            <button className="download-btn coming-soon" disabled>
              <FaApple size={24} />
              <div className="download-btn-text">
                <span className="download-btn-title">Download on the</span>
                <span className="download-btn-store">App Store</span>
                <span className="coming-soon-badge">Coming Soon</span>
              </div>
            </button>
          </div>
          <p className="download-note">
            We're working hard to bring TrackaExpense to mobile app stores. 
            Stay tuned for updates!
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
            TrackaExpense v1.0.0
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
