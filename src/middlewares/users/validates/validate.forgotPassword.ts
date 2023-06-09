import { checkSchema } from 'express-validator';
import userSchema from '../schemas';
import { typeUserForgotPassword } from '../types';
import validate from '~/utils/validate.util';
import database from '~/databases';
import { USERS_MESSAGES } from '~/constants/messages';

const validateForgotPassword: typeUserForgotPassword = {
  email: {
    ...userSchema.email,
    custom: {
      options: async (email: string, { req }) => {
        const emailUser = email.toLowerCase();
        const user = await database.userMethods.findUser({
          filter: {
            email: emailUser
          }
        });

        if (!user) {
          throw new Error(USERS_MESSAGES.USER_NOT_FOUND);
        }

        req.user = user;
        return true;
      }
    }
  }
};

const checkValidate = checkSchema(validateForgotPassword, ['body']);
export default validate(checkValidate);
