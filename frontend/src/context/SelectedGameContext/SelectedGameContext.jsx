import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const SelectedGameContext = createContext()

export const SelectedGameProvider = ({ children }) => {
  const [state, dispatch] = useState(null)

  useEffect(() => {
    if (state !== null) {
      localStorage.setItem('selectedGameState', state)
      return
    }

    const storedItem = localStorage.getItem('selectedGameState')

    if (storedItem) {
      dispatch(storedItem)
    }
  }, [state])

  return (
    <SelectedGameContext.Provider value={[state, dispatch]}>
      {children}
    </SelectedGameContext.Provider>
  )
}

SelectedGameProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useSelectedGame = () => useContext(SelectedGameContext)
