import * as argon2 from 'argon2';
import { randomBytes } from 'crypto';

module.exports = {
  hashPassword: (unhashedPassword) => {
    var salt = randomBytes(32);
    return argon2.hash(unhashedPassword, { salt });
  },

  verifyPassword: (storedHashedPassword, unverifiedUnhashedPassword) => {
    return argon2.verify(storedHashedPassword, unverifiedUnhashedPassword);
  }
}