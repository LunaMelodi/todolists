import * as argon2 from 'argon2';
import { randomBytes } from 'crypto';

module.exports = {
  hashPassword: (unhashedPassword) => {
    const salt = randomBytes(32);
    return argon2.hash(unhashedPassword, { salt });
  },

  verifyPassword: (storedHashedPassword, unverifiedUnhashedPassword) => argon2.verify(storedHashedPassword, unverifiedUnhashedPassword),
};
