import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { message, Card, Avatar, Tooltip } from 'antd'
import { StatsTileElements } from './elements'
import { stats } from '../../../../services/stats/statsServices'
import { StatsTable } from './components/StatsTable/StatsTable'
import { StatsChart } from './components/StatsChart'

const { Meta } = Card
const { Container, StyledCard } = StatsTileElements

export const StatsTile = ({ disabled, icon, title, name }) => {
  const [elo, setElo] = useState(0)
  const [won, setWon] = useState(0)
  const [tied, setTied] = useState(0)
  const [lost, setLost] = useState(0)

  useEffect(() => {
    if (!disabled)
      stats(name)
        .then((response) => {
          setElo(response.data.eloScore)
          setWon(response.data.amountOfWonGames)
          setTied(response.data.amountOfTiedGames)
          setLost(response.data.amountOfLostGames)
        })
        .catch((error) => message.error(error.response.data.message))
  }, [])

  let statsContent
  if (disabled)
    statsContent =
      'Statistics for this game will be made available along with the game.'
  else
    statsContent = (
      <Container>
        <StatsTable name={name} elo={elo} won={won} tied={tied} lost={lost} />
        <StatsChart name={name} won={won} tied={tied} lost={lost} />
      </Container>
    )

  return (
    <Tooltip
      title={
        disabled && 'The statistics for this game are currently unavailable'
      }
    >
      <StyledCard
        disabled={disabled}
        hoverable={false}
        title={<Meta avatar={<Avatar src={icon} />} title={title} />}
      >
        {statsContent}
      </StyledCard>
    </Tooltip>
  )
}

StatsTile.propTypes = {
  disabled: PropTypes.bool.isRequired,
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
