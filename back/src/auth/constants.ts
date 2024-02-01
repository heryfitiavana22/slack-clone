export const jwtConstants = {
  access_token: process.env.ACCESS_TOKEN_SECRET || 'RANDOM KEY',
  refresh_token: process.env.REFRESH_TOKEN_SECRET || 'RANDOM KEY',
};
