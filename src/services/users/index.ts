import login from './login';
import logout from './logout';
import register from './register';
import resendVerifyEmail from './resendVerifyEmail';
import verifyEmailToken from './verifyEmailToken';

const user = {
  login,
  logout,
  register,
  verifyEmailToken,
  resendVerifyEmail
};

export default user;