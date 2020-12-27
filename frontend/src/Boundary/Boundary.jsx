import { Component } from 'react'
import PropTypes from 'prop-types'
import { ErrorPage } from '../components/ErrorPage'

export class Boundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch() {
    // TBD/TODO: logging errors on backend
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />
    }

    return this.props.children
  }
}

Boundary.propTypes = {
  children: PropTypes.node.isRequired,
}
