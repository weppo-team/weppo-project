import { ContentHeadingSection } from '../../components/ContentHeadingSection'
import { useAvailableGames } from '../../context/AvailableGamesContext'
import { StatsViewElements } from './elements'
import { StatsTile } from './components/StatsTile'

const { Container } = StatsViewElements

export const StatsView = () => {
  const games = useAvailableGames()

  return (
    <>
      <ContentHeadingSection
        title="Check your stats!"
        subtitle="Let's see statistics from all of your games!"
      />
      <Container>
        {games.map((game) => (
          <StatsTile
            key={game.title}
            disabled={game.disabled}
            icon={game.icon}
            title={game.title}
            name={game.name}
          />
        ))}
      </Container>
    </>
  )
}
