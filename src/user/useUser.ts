import axios from 'axios';
import { useEffect, useState } from 'react';
import { loadUserByToken, userModel } from './loadUserByToken';

const CancelToken = axios.CancelToken;

export function useUser(userId: string = '1') {
  const [user, setUser] = useState<userModel | null>(null);
  useEffect(() => {
    const requestSource = CancelToken.source();
    if (!user) {
      loadUserByToken(userId, {cancelToken: requestSource.token})
      .then((user: userModel) => {
        setUser(user);
      });
    }
    return () => requestSource.cancel('Component disposed');
  }, [user, setUser, userId]);
  return [user, setUser] as const;
}
