// Public Firebase Web config. These values are safe to expose in a browser app.
// Replace every PASTE_... value using Firebase Console -> Project settings -> General -> Your apps -> Web app.
self.SNAKE_FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_STORAGE_BUCKET",
  messagingSenderId: "PASTE_MESSAGING_SENDER_ID",
  appId: "PASTE_APP_ID"
};

// Firebase Console -> Project settings -> Cloud Messaging -> Web Push certificates -> Generate key pair
self.SNAKE_VAPID_KEY = "PASTE_PUBLIC_VAPID_KEY";
