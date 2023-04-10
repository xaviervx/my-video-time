import React, {
  createContext, useMemo, useState
} from 'react'

import PropTypes from 'prop-types'

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [name, setName] = useState('')

  function singIn({ userName }) {
    setName(userName)
  }

  function logout() {
    setName('')
  }

  const userContextValue = useMemo(() => ({
    name, setName, singIn, logout
  }), [name])

  return (
    <UserContext.Provider value={ userContextValue }>
      {children}
    </UserContext.Provider>
  )
}

UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired
}
