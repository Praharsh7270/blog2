import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    // Create a new user account and log in immediately
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            }
            return userAccount;
        } catch (error) {
            console.error("AuthService :: createAccount :: Error", error);
            return null;
        }
    }

    // Login user
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.error("AuthService :: login :: Error", error);
            return null;
        }
    }

    // Get the currently authenticated user
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("AuthService :: getCurrentUser :: Error", error);
            return null;
        }
    }

    // Logout the current user
    async logout() {
        try {
            await this.account.deleteSessions();
            return true;
        } catch (error) {
            console.error("AuthService :: logout :: Error", error);
            return false;
        }
    }
}

// Create and export a singleton instance
const authService = new AuthService();
export default authService;
