import { useState, useEffect } from 'react'
import { message } from 'antd'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { checkIfUserLoggedIn } from '../../services/auth/authServices'
import { LoadingSpinnerForViews } from '../../components/LoadingSpinnerForViews'

export const ProtectedRoute = ({
  component: Component,
  protectionLevel,
  ...rest
}) => {
  const [userType, setUserType] = useState(undefined)

  useEffect(() => {
    checkIfUserLoggedIn()
      .then((response) => {
        setUserType(response.data.userType)
      })
      .catch(() => setUserType(null))
  }, [])

  useEffect(() => {
    if (
      userType !== protectionLevel &&
      userType !== 'user' &&
      userType !== undefined
    ) {
      message.error(
        'Unfortunately you do not have access to this resource. You probably need to log in.',
      )
    }
  }, [userType])

  if (userType === undefined) {
    return <LoadingSpinnerForViews />
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        userType === protectionLevel || userType === 'user' ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  protectionLevel: PropTypes.string.isRequired,
}
