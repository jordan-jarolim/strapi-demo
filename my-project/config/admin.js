module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '08eb322e6b71c292dac6b46301e8a929'),
  },
});
