import { screen } from '@testing-library/react'
import { Boundary } from './Boundary'
import { render } from '../lib/testUtils'

describe('Boundary tests', () => {
  it('should show error page', () => {
    const FaultyComponent = () => {
      throw new Error('error')
    }

    render(
      <Boundary>
        <FaultyComponent />
      </Boundary>,
    )

    expect(
      screen.getByText('An unexpected error occurred!'),
    ).toBeInTheDocument()
  })

  it('should not show error page when children is not faulty', () => {
    const NotFaultyComponent = () => <h1>I am cool component</h1>

    render(
      <Boundary>
        <NotFaultyComponent />
      </Boundary>,
    )

    expect(screen.queryByText('An unexpected error occurred!')).toBeNull()
  })
})
