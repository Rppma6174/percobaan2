// config/firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyBCULmvlG3fQMwfLe-Zh2qlobx1vfV4oes",
    authDomain: "umt-project-ddd02.firebaseapp.com",
    projectId: "umt-project-ddd02",
    storageBucket: "umt-project-ddd02.firebasestorage.app",
    messagingSenderId: "696232805599",
    appId: "1:696232805599:web:b7f66d38bc7a107819d56a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Daftar email yang diizinkan mengakses video
const allowedEmails = [
    'rifkipartogipanjaitan@gmail.com',
    'umt.math.6174@gmail.com'
    // Tambahkan email mahasiswa/dosen yang diizinkan
];

// Daftar video yang memerlukan premium access
const premiumVideos = [
    'limit-fungsi',
    'trigonometri', 
    'bentuk-akar'
];

// Daftar email yang memiliki akses premium
const premiumEmails = [
    'rifkipartogipanjaitan@gmail.com',
    'umt.math.6174@gmail.com'
];

// Export untuk digunakan di file lain
window.firebaseAuth = {
    auth,
    allowedEmails,
    premiumVideos,
    premiumEmails
};