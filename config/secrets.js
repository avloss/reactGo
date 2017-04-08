/** Important **/
/** You should not be committing this file to GitHub **/
/** Repeat: DO! NOT! COMMIT! THIS! FILE! TO! YOUR! REPO! **/
export const sessionSecret = process.env.SESSION_SECRET || 'Your Session Secret goes here';
export const google = {
  clientID: process.env.GOOGLE_CLIENTID || '289342627762-9qr26olgdhh6l9lf6c936pk8iiejusia.apps.googleusercontent.com',
  clientSecret: process.env.GOOGLE_SECRET || 'v-3EwVIeWA21zY3iZFUSclrR',
  callbackURL: process.env.GOOGLE_CALLBACK || '/auth/google/callback'
};

