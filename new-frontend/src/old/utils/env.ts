export const apiBaseUrl = process.env.REACT_APP_API_URL || "https://host.docker.internal:3003"
export const mockApiUrl = process.env.NEXT_PUBLIC_MOCK_API_URL || "https://host.docker.internal:3003";
export const apiOAuthAuthorizeUrl = `${apiBaseUrl}${process.env.NEXT_PUBLIC_OAUTH_AUTHORIZE_PATH || "/oauth/authorize"}`;