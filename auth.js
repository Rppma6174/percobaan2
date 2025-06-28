// auth.js - Shared authentication logic
class AuthManager {
    constructor() {
        this.auth = window.firebaseAuth.auth;
        this.allowedEmails = window.firebaseAuth.allowedEmails;
        this.premiumVideos = window.firebaseAuth.premiumVideos;
        this.premiumEmails = window.firebaseAuth.premiumEmails;
        this.currentUser = null;
        
        // Listen for auth state changes
        this.auth.onAuthStateChanged((user) => {
            this.currentUser = user;
            this.handleAuthStateChange(user);
        });
    }
    
    // Check if user is logged in and authorized
    isAuthorized() {
        return this.currentUser && 
               this.currentUser.emailVerified && 
               this.allowedEmails.includes(this.currentUser.email);
    }
    
    // Check if user has premium access
    hasPremiumAccess() {
        if (!this.isAuthorized()) return false;
        return this.premiumEmails.includes(this.currentUser.email);
    }
    
    // Protect a page - call this on protected pages
    protectPage(requiredLevel = 'basic') {
        // requiredLevel: 'basic' | 'premium'
        if (!this.currentUser) {
            this.redirectToLogin();
            return false;
        }
        
        if (!this.currentUser.emailVerified) {
            this.showMessage('Silakan verifikasi email Anda terlebih dahulu.', 'error');
            this.logout();
            return false;
        }
        
        if (!this.allowedEmails.includes(this.currentUser.email)) {
            this.showMessage('Email Anda tidak memiliki akses ke konten ini.', 'error');
            this.logout();
            return false;
        }
        
        if (requiredLevel === 'premium' && !this.hasPremiumAccess()) {
            this.showMessage('Konten ini memerlukan akses premium.', 'error');
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 2000);
            return false;
        }
        
        return true;
    }
    
    // Handle auth state changes
    handleAuthStateChange(user) {
        // Update UI based on auth state
        this.updateAuthUI(user);
    }
    
    // Update UI elements based on auth state
    updateAuthUI(user) {
        const loginBtn = document.getElementById('loginBtn');
        const userInfo = document.getElementById('userInfo');
        const userEmail = document.getElementById('userEmail');
        const logoutBtn = document.getElementById('logoutBtn');
        
        if (user && this.isAuthorized()) {
            if (loginBtn) loginBtn.style.display = 'none';
            if (userInfo) userInfo.style.display = 'block';
            if (userEmail) userEmail.textContent = user.email;
            if (logoutBtn) {
                logoutBtn.style.display = 'block';
                logoutBtn.onclick = () => this.logout();
            }
        } else {
            if (loginBtn) {
                loginBtn.style.display = 'block';
                loginBtn.onclick = () => this.redirectToLogin();
            }
            if (userInfo) userInfo.style.display = 'none';
            if (logoutBtn) logoutBtn.style.display = 'none';
        }
    }
    
    // Login function
    async login(email, password) {
        try {
            const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
            
            if (!userCredential.user.emailVerified) {
                this.showMessage('Silakan verifikasi email Anda terlebih dahulu.', 'error');
                this.logout();
                return false;
            }
            
            if (!this.allowedEmails.includes(userCredential.user.email)) {
                this.showMessage('Email Anda tidak memiliki akses.', 'error');
                this.logout();
                return false;
            }
            
            this.showMessage('Login berhasil!', 'success');
            return true;
            
        } catch (error) {
            this.showMessage(this.getErrorMessage(error.code), 'error');
            return false;
        }
    }
    
    // Register function
    async register(email, password) {
        try {
            if (!this.allowedEmails.includes(email)) {
                this.showMessage('Email Anda tidak memiliki akses untuk mendaftar.', 'error');
                return false;
            }
            
            const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
            await userCredential.user.sendEmailVerification();
            
            this.showMessage('Akun berhasil dibuat! Silakan cek email untuk verifikasi.', 'success');
            this.logout(); // Logout until email is verified
            return true;
            
        } catch (error) {
            this.showMessage(this.getErrorMessage(error.code), 'error');
            return false;
        }
    }
    
    // Logout function
    logout() {
        this.auth.signOut().then(() => {
            this.showMessage('Logout berhasil!', 'success');
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 1000);
        });
    }
    
    // Redirect to login page
    redirectToLogin() {
        const currentPage = window.location.pathname;
        localStorage.setItem('redirectAfterLogin', currentPage);
        window.location.href = '../login.html';
    }
    
    // Redirect after successful login
    redirectAfterLogin() {
        const redirectPath = localStorage.getItem('redirectAfterLogin');
        if (redirectPath) {
            localStorage.removeItem('redirectAfterLogin');
            window.location.href = redirectPath;
        } else {
            window.location.href = '../index.html';
        }
    }
    
    // Show message to user
    showMessage(message, type = 'info') {
        // Create or update message element
        let messageEl = document.getElementById('authMessage');
        if (!messageEl) {
            messageEl = document.createElement('div');
            messageEl.id = 'authMessage';
            messageEl.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 8px;
                color: white;
                font-weight: bold;
                z-index: 9999;
                max-width: 300px;
                transition: all 0.3s ease;
            `;
            document.body.appendChild(messageEl);
        }
        
        messageEl.textContent = message;
        messageEl.className = type;
        
        // Style based on type
        switch (type) {
            case 'success':
                messageEl.style.backgroundColor = '#28a745';
                break;
            case 'error':
                messageEl.style.backgroundColor = '#dc3545';
                break;
            default:
                messageEl.style.backgroundColor = '#17a2b8';
        }
        
        messageEl.style.display = 'block';
        messageEl.style.opacity = '1';
        
        // Auto hide after 3 seconds
        setTimeout(() => {
            messageEl.style.opacity = '0';
            setTimeout(() => {
                if (messageEl.parentNode) {
                    messageEl.parentNode.removeChild(messageEl);
                }
            }, 300);
        }, 3000);
    }
    
    // Get user-friendly error messages
    getErrorMessage(errorCode) {
        switch (errorCode) {
            case 'auth/user-not-found':
                return 'Email tidak terdaftar.';
            case 'auth/wrong-password':
                return 'Password salah.';
            case 'auth/email-already-in-use':
                return 'Email sudah terdaftar.';
            case 'auth/weak-password':
                return 'Password terlalu lemah.';
            case 'auth/invalid-email':
                return 'Format email tidak valid.';
            case 'auth/too-many-requests':
                return 'Terlalu banyak percobaan. Coba lagi nanti.';
            default:
                return 'Terjadi kesalahan. Silakan coba lagi.';
        }
    }
}

// Initialize AuthManager
window.authManager = new AuthManager();