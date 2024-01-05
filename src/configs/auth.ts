export default {
  meEndpoint: '/api/auth/me',
  loginEndpoint: '/api/auth/login',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
