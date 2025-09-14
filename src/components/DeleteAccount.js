import React from 'react';
import { 
  FaTrashAlt,
  FaExclamationTriangle,
  FaClock,
  FaEnvelope,
  FaCheckCircle,
  FaTimesCircle,
  FaMobileAlt,
  FaUserCog,
  FaDatabase
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
      title: "Go to Profile → Account Settings → Delete Account",
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
    <div className="delete-account-container">
      <section className="delete-account-hero">
        <div className="delete-account-hero-content">
          <FaTrashAlt className="hero-icon" />
          <h1>Delete Your TrackaExpense Account</h1>
          <p>Permanently remove your account and all associated data</p>
        </div>
        <div className="hero-background">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
      </section>

      <section className="delete-steps-section">
        <div className="section-header">
          <h2>How to Delete Your Account</h2>
          <p className="section-subtitle">
            You can permanently delete your TrackaExpense account and all associated data directly from the app
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="deletion-effects-section">
        <div className="section-header">
          <h2>What Happens When You Delete Your Account</h2>
          <p className="section-subtitle">
            Here's exactly what will be removed from our systems when you delete your account
          </p>
        </div>
        <div className="effects-grid">
          {deletionEffects.map((effect, index) => (
            <div key={index} className="effect-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="effect-icon">{effect.icon}</div>
              <h3>{effect.title}</h3>
              <p>{effect.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="important-info-section">
        <div className="section-header">
          <h2>Important Information</h2>
          <p className="section-subtitle">
            Please read these important details before proceeding with account deletion
          </p>
        </div>
        <div className="info-grid">
          {importantPoints.map((point, index) => (
            <div key={index} className="info-card warning" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="info-icon">{point.icon}</div>
              <div className="info-content">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="support-section">
        <div className="support-content">
          <div className="support-icon">
            <FaEnvelope />
          </div>
          <h2>Need Help or Have Questions?</h2>
          <p>
            If you experience any issues with the account deletion process or have questions about data removal, 
            please don't hesitate to contact our support team.
          </p>
          <div className="contact-info">
            <a href="mailto:me@dhruvchheda.com" className="contact-email">
              <FaEnvelope className="email-icon" />
              me@dhruvchheda.com
            </a>
          </div>
          <p className="support-note">
            We typically respond to support requests within 24 hours during business days.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DeleteAccount;
