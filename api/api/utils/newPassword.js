var jwt = require('jsonwebtoken')
var crypto = require('crypto')

// Get the JWT from a user database record
function generateResetCode (user) {
  // User string is a concatenated string of values from the record, we'll use it to create a hash. That way if any of the values changes, so does the hash. Thereby invalidating our reset code
  var userString = getUserString(user)

  // The has is an MD5 hash, it just needs to be unique enough to change when an of the fields for user changes
  var userHash = getUserHash(userString)

  var token = jwt.sign({
    hash: userHash,
  }, process.env.JWT_SECRET, {
    // This token is set to expire in 1 day
    expiresIn: '1d',

    // The sub (subject) of the token is the user ID we will use to fetch the DB record
    subject: user.id,
  })

  return token
}

// Takes a JWT and returns it's contents only if it's valid
function decodeResetCode (token) {
  return jwt.verify(token, process.env.JWT_SECRET)
}

// Used by our validation endpoint
async function validateResetCode (code = '', ctx) {
  // Check the code is valid and not expired
  var token = decodeResetCode(code)

  // If the token is invalid or expired, it's not valid
  if (!token) return false

  // Get record from DB
  // This is on you to fetch the user from your database
  // The token.sub is the user.id we stored inside the token
  var user = await getUserFromDatabase(token.sub, ctx)

  // If no user is found, then bail
  if (!user) return false

  // Assemble the hash to ensure they have not already updated their password or used this hash in the past to update the password or any other field in their user record
  var userString = getUserString(user)
  var userHash = getUserHash(userString)

  return (token.hash === userHash)
}

// Generate the MD5 hash from the user record string
function getUserHash (string) {
  return crypto
    .createHash('md5')
    .update(string)
    .digest('hex');
}

// These properties of the user are fields in my database
function getUserString (user) {
  return `${user.id}${user.email}${user.password}${user.updatedAt}`;
}