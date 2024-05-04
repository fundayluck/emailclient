export interface usernameAvailableResponse {
  avalaible: boolean;
}

export interface signupCredentialsResponse {
  username?: string | null;
  password?: string | null | undefined;
  passwordConfirmation?: string | null;
}

export interface SignupResponse {
  username: string;
}

export interface SignedinResponse {
  authenticated: boolean;
  username: string;
}

export interface signinCredentialsResponse {
  username?: string | null;
  password?: string | null | undefined;
}

export interface SigninResponse {
  username: string;
}
