import { ContentHeadingSection } from '../../components/ContentHeadingSection'
import { useAvailableGames } from '../../context/AvailableGamesContext'
import { GamesViewElements } from './elements'
import { GameTile } from './components/GameTile'

const { Container } = GamesViewElements

export const GamesView = () => {
  const games = useAvailableGames()

  return (
    <>
      <ContentHeadingSection
        title="Play a game!"
        subtitle="Let's explore all the games that we have prepared for you!"
      />
      <Container>
        {games.map((game) => (
          <GameTile
            key={game.title}
            disabled={game.disabled}
            icon={game.icon}
            route={game.route}
            title={game.title}
            name={game.name}
          />
        ))}
      </Container>
    </>
  )
}
