importScripts('https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.3.1/firebase-messaging.js');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVOWb1S6OE2IiPUzzD3HDmMSWLgBEFBIM",
    authDomain: "maman-b70df.firebaseapp.com",
    projectId: "maman-b70df",
    storageBucket: "maman-b70df.firebasestorage.app",
    messagingSenderId: "255976087525",
    appId: "1:255976087525:web:3f92291e22f6df3290190c",
    measurementId: "G-VY5GSFPEXB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});