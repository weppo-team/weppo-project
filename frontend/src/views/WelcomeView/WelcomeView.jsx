import { ContentHeadingSection } from '../../components/ContentHeadingSection'
import checkerboard from '../../images/checkerboard.jpg'
import { WelomeViewElements } from './elements'
import { useAppInfo } from '../../context/AppInfoContext'

const { Container, StyledImage, StyledParagraph } = WelomeViewElements

export const WelcomeView = () => {
  const { title } = useAppInfo()

  return (
    <>
      <ContentHeadingSection
        title="Welcome!"
        subtitle="If you want to play in the classic board games you've come to the right place"
      />
      <Container>
        <StyledImage src={checkerboard} alt="checkerboard" />
        <StyledParagraph>
          <b>{title}</b> is a platform that let you play some of the most
          popular board games. You should be able to play online against other
          players in at least one game.
          <br />
          <br />
          As a user you have ELO ranking for all games that lets you track your
          progress and determine if you got better at the game.
        </StyledParagraph>
      </Container>
    </>
  )
}
