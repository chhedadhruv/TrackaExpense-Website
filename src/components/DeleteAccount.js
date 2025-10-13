import React from 'react';
import { 
  FaTrashAlt,
  FaExclamationTriangle,
  FaClock,
  FaEnvelope,
  FaMobileAlt,
  FaUserCog,
  FaCheckCircle,
  FaDatabase,
  FaTimesCircle
} from 'react-icons/fa';
import './DeleteAccount.css';

const DeleteAccount = () => {
  const steps = [
    {
      icon: <FaMobileAlt />,
      step: "1",
      title: "Open the TrackaExpense app",
      description: "Launch the app on your device"
    },
    {
      icon: <FaUserCog />,
      step: "2", 
      title: "Go to Profile → Account Actions → Delete Account",
      description: "Navigate through the settings menu"
    },
    {
      icon: <FaCheckCircle />,
      step: "3",
      title: "Confirm your request",
      description: "Verify that you want to permanently delete your account"
    }
  ];

  const deletionEffects = [
    {
      icon: <FaDatabase />,
      title: "All expense records permanently deleted",
      description: "Your entire transaction history will be removed"
    },
    {
      icon: <FaTrashAlt />,
      title: "Receipts and associated data removed",
      description: "All uploaded receipts and attachments will be deleted"
    },
    {
      icon: <FaTimesCircle />,
      title: "Groups and shared expenses deleted",
      description: "Any groups you created or participated in will be removed"
    },
    {
      icon: <FaEnvelope />,
      title: "Account email removed from our systems",
      description: "Your email address will be completely removed from our database"
    }
  ];

  const importantPoints = [
    {
      icon: <FaClock />,
      title: "30-Day Backup Deletion",
      description: "Backup data is automatically deleted within 30 days and cannot be recovered after this period."
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Permanent and Irreversible",
      description: "Once deleted, your data cannot be recovered. This action is permanent and irreversible."
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="page-hero delete-hero">
        <div className="container-width">
          <div className="page-hero-content">
            <div className="delete-hero-icon">
              <FaTrashAlt />
            </div>
            <h1 className="page-hero-title">Account Deletion</h1>
            <p className="page-hero-subtitle">
              Learn how to permanently delete your TrackaExpense account and all associated data
            </p>
          </div>
        </div>
        <div className="page-hero-bg">
          <div className="page-bg-circle page-bg-circle-1"></div>
          <div className="page-bg-circle page-bg-circle-2"></div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="delete-steps-section">
        <div className="container-width">
          <div className="section-header">
            <h2 className="section-title">How to Delete Your Account</h2>
            <p className="section-subtitle">
              You can permanently delete your TrackaExpense account and all associated data directly from the app
            </p>
          </div>

          <div className="delete-steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="delete-step-card">
                <div className="step-number-badge">{step.step}</div>
                <div className="delete-step-icon">
                  {step.icon}
                </div>
                <h3 className="delete-step-title">{step.title}</h3>
                <p className="delete-step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deletion Effects Section */}
      <section className="deletion-effects-section">
        <div className="container-width">
          <div className="section-header">
            <h2 className="section-title">What Happens When You Delete Your Account</h2>
            <p className="section-subtitle">
              Here's exactly what will be removed from our systems when you delete your account
            </p>
          </div>

          <div className="deletion-effects-grid">
            {deletionEffects.map((effect, index) => (
              <div key={index} className="deletion-effect-card">
                <div className="deletion-effect-icon">
                  {effect.icon}
                </div>
                <h3 className="deletion-effect-title">{effect.title}</h3>
                <p className="deletion-effect-description">{effect.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Info Section */}
      <section className="important-info-section">
        <div className="container-width">
          <div className="section-header">
            <h2 className="section-title">Important Information</h2>
            <p className="section-subtitle">
              Please read these important details before proceeding with account deletion
            </p>
          </div>

          <div className="important-info-grid">
            {importantPoints.map((point, index) => (
              <div key={index} className="important-info-card">
                <div className="important-info-icon">
                  {point.icon}
                </div>
                <div className="important-info-content">
                  <h3 className="important-info-title">{point.title}</h3>
                  <p className="important-info-description">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="delete-support-section">
        <div className="container-width">
          <div className="delete-support-content">
            <div className="delete-support-icon">
              <FaEnvelope />
            </div>
            <h2 className="delete-support-title">Need Help or Have Questions?</h2>
            <p className="delete-support-text">
              If you experience any issues with the account deletion process or have questions about data removal, 
              please don't hesitate to contact our support team.
            </p>
            <a href="mailto:me@dhruvchheda.com" className="delete-support-email">
              <FaEnvelope className="email-icon" />
              me@dhruvchheda.com
            </a>
            <p className="delete-support-note">
              We typically respond to support requests within 24 hours during business days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeleteAccount;
