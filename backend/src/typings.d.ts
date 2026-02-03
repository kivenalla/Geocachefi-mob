import 'express-session';
import 'axios';

declare module 'express-session' {
  interface SessionData {
    oauthState: string;
    codeVerifier: string;
  }
}

declare module "axios" {
  export interface AxiosRequestConfig {
    userId?: string;
  }
}
