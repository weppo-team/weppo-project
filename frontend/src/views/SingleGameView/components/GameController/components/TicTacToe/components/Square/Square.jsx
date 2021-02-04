import PropTypes from 'prop-types'
import { SquareElements } from './elements'

const { StyledButton } = SquareElements

export const Square = ({ number, setBoardTile, squareContent }) => {
  const handleOnClick = () => {
    if (squareContent === ' ') {
      setBoardTile(number)
    }
  }

  return <StyledButton onClick={handleOnClick}>{squareContent}</StyledButton>
}

Square.propTypes = {
  number: PropTypes.number.isRequired,
  setBoardTile: PropTypes.func.isRequired,
  squareContent: PropTypes.string.isRequired,
}
