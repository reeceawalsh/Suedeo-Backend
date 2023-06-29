module.exports = ({ env }) => ({
  apiToken: {
    salt: env("TOKEN_SALT", "2'&Pz:`et{eEnLdp'bdW.&F"),
  },
  auth: {
    secret: env("JWT_SECRET", "3b0c993312109e6794989ee2c3c35c78"),
  },
});
