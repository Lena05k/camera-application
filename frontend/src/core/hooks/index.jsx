import { useContext } from 'react';

import { AuthContext, ApiContext } from '../contexts';

export const useAuth = () => useContext(AuthContext);
export const useApi = () => useContext(ApiContext);
