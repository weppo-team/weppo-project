import { useHistory } from 'react-router-dom'
import { InfoCircleTwoTone } from '@ant-design/icons'

import { Button } from 'antd'
import { ContentHeadingSection } from '../../components/ContentHeadingSection'
import { useSelectedGameObject } from '../../lib/utlis'
import { RoomsViewElements } from './elements'
import {
  useCheckForGameExistence,
  useCheckForGameAvailability,
  useGetRooms,
} from './utils'
import { LockView } from '../../components/LockView'
import { LoadingSpinnerForViews } from '../../components/LoadingSpinnerForViews'
import { Rooms } from './components/Rooms'
import { useUserData } from '../../services/auth/authServices'

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
  const { rooms, loading: roomsLoading } = useGetRooms()
  const { userData, loading: userDataLoading } = useUserData()

  if (!gameExists || !isGameAvailable) {
    history.push('/')
  }

  if (roomsLoading || userDataLoading) {
    return <LoadingSpinnerForViews />
  }

  const handleCreateNewRoom = () => {
    history.push(`/game/${selectedGame.name}/${userData.username}`)
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
        {rooms.length === 0 ? (
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
        ) : (
          <Rooms rooms={rooms} />
        )}
      </ContentWrapper>
    </Container>
  )
}
