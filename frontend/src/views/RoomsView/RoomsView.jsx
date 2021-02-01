import { useHistory } from 'react-router-dom'
import { InfoCircleTwoTone } from '@ant-design/icons'

import { Button } from 'antd'
import { ContentHeadingSection } from '../../components/ContentHeadingSection'
import { useSelectedGameObject } from '../../lib/utlis'
import { RoomsViewElements } from './elements'
import { useCheckForGameExistence, useCheckForGameAvailability } from './utils'
import { LockView } from '../../components/LockView'

const {
  HeadingWrapper,
  Container,
  ContentWrapper,
  ClickableText,
} = RoomsViewElements

export const RoomsView = () => {
  const history = useHistory()
  const gameExists = useCheckForGameExistence()
  const isGameAvailable = useCheckForGameAvailability()
  const selectedGame = useSelectedGameObject()

  if (!gameExists || !isGameAvailable) {
    history.push('/')
  }

  const handleCreateNewRoom = () => {
    // TODO:IMPLEMENT
    console.log('Create new room')
    return null
  }

  return (
    <Container>
      <HeadingWrapper>
        <ContentHeadingSection
          title={`${selectedGame.title} rooms`}
          subtitle="Join any of the existing rooms or create a new one!"
        />
        <Button type="primary" shape="round" onClick={handleCreateNewRoom}>
          Create a new room
        </Button>
      </HeadingWrapper>
      <ContentWrapper>
        <LockView
          icon={InfoCircleTwoTone}
          mainText="There is nothing here"
          secondaryText={
            <>
              Don&apos;t be shy.{' '}
              <ClickableText onClick={handleCreateNewRoom}>
                Create
              </ClickableText>{' '}
              your own room!
            </>
          }
        />
      </ContentWrapper>
    </Container>
  )
}
