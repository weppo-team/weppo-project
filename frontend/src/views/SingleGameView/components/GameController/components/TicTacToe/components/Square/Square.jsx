import PropTypes from 'prop-types'
import { useState } from 'react'
import { SquareElements } from './elements'

const { StyledButton } = SquareElements

export const Square = ({ number, playerSymbol, setBoardTile }) => {
  const [squareContent, setSquareContent] = useState(' ')

  const handleOnClick = () => {
    if (squareContent === ' ') {
      setSquareContent(playerSymbol)
      setBoardTile(number)
    }
  }

  return <StyledButton onClick={handleOnClick}>{squareContent}</StyledButton>
}

Square.propTypes = {
  number: PropTypes.number.isRequired,
  playerSymbol: PropTypes.string.isRequired,
  setBoardTile: PropTypes.func.isRequired,
}
