import { useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';

export function useUser() {
  const context = useContext(UserContext);

  return context
}
