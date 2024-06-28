import eNv from "../config/config.js";
import { Client, Account, ID } from "appwrite";

// This is Authentication service for the app with appwrite.

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(eNv.appwriteUrl).setProject(eNv.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // Call another method
        return this.logIn({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite Service error");
    }
  }

  async logIn({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("Appwrite Service error");
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite Service error");
    }

    return null;
    // This null will be returned if the trycatch block fails to run for any reason. The return in try will auto return null if there is no account and the account if there is account.
  }

  async logOut() {
    try {
      await this.account.deleteSessions();
      /*
      deleteSession() will delete the session through which the user is at that moment at the app like laptop, phone etc. deleteSessions() will delete the all the sessions of all the devices of the user.
      */
    } catch (error) {
      console.log("Appwrite Service error");
    }
  }

  // The constructor approach has been taken because we want these to happen on the spot a.
}

const authService = new AuthService();
// If we export the class, the one receiving it will have to make objects out of it and then implement them. If we also make an object and then export it, they have to basically do nothing and use the services.

export default authService;

/*
In the above approach, the wrapper of functions have made it easy to alter between BAAS's. Suppose, if we want to shift from appwrite to any other BAAS, we simply need to change some keywords in accordance with the BAAS we will be using but the async methods will stay the same. UI will never know what is going on under the hood for the methods.
*/

/*
import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint(eNv.appwriteUrl) // API Endpoint
  .setProject(eNv.appwriteProjectId); // My project ID

export const account = new Account(client);
export { ID } from "appwrite";
*/
