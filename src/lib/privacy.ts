export const PRIVACY_LAST_UPDATED = '13 November 2026';

/**
 * Lines starting with "- " are bullets. Lines ending with ":" are sub-headings.
 * Everything else is a paragraph. Blank lines separate blocks.
 */
export const PRIVACY_SECTIONS: { id: string; title: string; body: string }[] = [
  {
    id: 'overview',
    title: 'Overview',
    body: `TrackaExpense is committed to protecting your privacy and personal information. This policy explains how we collect, use, store and protect your data when you use the TrackaExpense app and this website.

Your privacy rights:
- You have control over your data
- You can delete your account from inside the app
- Deleting your account permanently removes your data
- We never sell your personal information

By using TrackaExpense, you agree to the collection and use of information in accordance with this policy.`,
  },
  {
    id: 'collect',
    title: 'Information we collect',
    body: `Personal information:
- Name and email address (required to create an account)
- Phone number (optional, so friends can find you when adding you to a group)
- Profile picture (optional)
- Basic profile information from Google, when you use Google Sign-In
- Basic profile information from Apple, when you use Apple Sign-In on iOS

Financial data:
- Income and expense records (titles, descriptions, amounts, categories, tags, dates)
- Receipt images you attach
- Your account balance and savings goals

Group and social data:
- Group memberships, shared expenses, splits and settlements

What other people can see:
- Your name, profile picture and email address are visible to members of groups you join
- People who know your email address or phone number can find your account to add you to a group; only your name and profile picture are shown to them

Authentication data:
- Email and password credentials, or Google or Apple sign-in tokens, handled by Firebase Authentication

Usage and diagnostics:
- Which features you use (for example adding an expense or settling up), with coarse amount ranges and never exact amounts, titles, notes, names or email addresses
- Crash and error reports (app version, device model, operating system version)

Device and notification data:
- A push notification token and your user ID, so we can send the notifications you allow

Device permissions:
- Camera, only when you take a receipt photo
- Notifications, only if you allow them
- Choosing a photo from your gallery uses the system photo picker; the app does not get access to your whole photo library

Website data:
- This website uses Vercel Analytics to count page views. It does not use cookies for advertising and does not track you across sites.
- If you use the contact form, we receive the name, email address and message you enter.`,
  },
  {
    id: 'use',
    title: 'How we use your information',
    body: `Core functionality:
- Provide expense tracking and money management
- Store your transactions and calculate your statistics
- Enable splitting expenses with friends and groups

Account management:
- Create and maintain your account and authenticate you
- Send account-related messages such as verification and password reset
- Provide support when you ask for it

Improving the app:
- Understand which features are used
- Find and fix technical issues

Notifications:
- Send push notifications about your groups, splits, settlements and reminders; you can turn them off in your device settings

We do not use your financial data for advertising and we do not sell your information to anyone.`,
  },
  {
    id: 'storage',
    title: 'Data storage and security',
    body: `Cloud storage:
Your data is stored with Google Firebase.
- Sign-in is handled by Firebase Authentication
- Records are stored in Cloud Firestore
- Receipt images are stored in Cloud Storage
- Data is encrypted in transit and at rest by Google
- Access is limited by security rules so that you can only read and change what belongs to you or to groups you are in

On your device:
- App preferences, onboarding status and a saved copy of your latest data so the app starts quickly and shows something when you are offline
- Sign-in tokens, kept by the system

Retention:
- Your data is kept while your account is active
- Deleting your account removes your transactions, receipts and group memberships
- Backups are deleted within 30 days
- Analytics, crash and notification records are handled as described under Your rights`,
  },
  {
    id: 'third-party',
    title: 'Third-party services',
    body: `TrackaExpense uses these services to run:

Google Firebase:
- Authentication, Cloud Firestore, Cloud Storage, Cloud Functions, Cloud Messaging, Performance Monitoring and Remote Config
- Subject to Google's Privacy Policy

Google Sign-In and Apple Sign-In:
- Used only to sign you in; we receive your name, email address and profile picture
- Subject to Google's and Apple's own policies

Sentry (error reporting):
- Receives crash and error reports with your user ID only, never your email address, name or IP address

Mixpanel (usage analytics):
- Receives feature-usage events linked to your user ID, with IP-based location turned off

OneSignal (push notifications):
- Receives your push token, user ID, platform, app version and currency setting to deliver notifications

Vercel (this website):
- Hosts the website and provides page-view statistics

EmailJS (contact form):
- Delivers messages you send through the contact form

We do not sell, trade or rent your personal information.`,
  },
  {
    id: 'rights',
    title: 'Your rights and choices',
    body: `You can:
- View and edit your profile
- Edit or delete any transaction or receipt
- Export your transactions as a CSV file
- Delete your account and all data from inside the app (Profile, then Account Actions, then Delete Account)
- Ask us by email to delete your account if you cannot open the app
- Turn notifications off in your device settings
- Withdraw consent to data processing by deleting your account

Analytics, crash and notification records:
- These contain no names, email addresses or exact amounts and are linked only to your user ID
- Contact us and we will delete them on request

To use any of these rights, use the contact feature in the app or email us.`,
  },
  {
    id: 'children',
    title: "Children's privacy",
    body: `TrackaExpense is not intended for children under 13. We do not knowingly collect personal information from children under 13.

If you are a parent or guardian and believe your child has given us personal information, contact us and we will delete it.`,
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: `We may update this policy when our practices, features or legal requirements change. Updated policies carry a new "last updated" date, and we will tell you about significant changes through the app. Continued use after a change means you accept it.`,
  },
  {
    id: 'contact',
    title: 'Contact',
    body: `Questions about this policy or your data? Use the contact feature in the app's Profile section, the contact page on this website, or email me@dhruvchheda.com. We aim to reply within 48 hours.`,
  },
];
