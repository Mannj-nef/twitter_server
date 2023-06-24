export interface IRegisterRequestBody {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  date_of_birth: string;
}

export interface ILoginRequestBody {
  email: string;
  password: string;
}

export interface ILogoutRequestBody {
  refreshToken: string;
}

export interface IForgotPasswordRequestBody {
  email: string;
}

export interface IVerifyForgotPasswordTokenRequestBody {
  forgot_password_token: string;
}

export interface IResetPasswordRequestBody {
  forgot_password_token: string;
  password: string;
  confirm_password: string;
}

export interface IUpdateMeRequestBody {
  name?: string;
  date_of_birth?: Date;
  bio?: string;
  location?: string;
  website?: string;
  username?: string;
  avatar?: string;
  cover_photo?: string;
}
