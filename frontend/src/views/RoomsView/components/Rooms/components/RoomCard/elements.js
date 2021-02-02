import styled, { css } from 'styled-components'

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    height: 40px;
    margin: ${theme.spacing.mid};
    background-color: ${theme.color.lightGray}33;
    border-radius: 5px;
    border: 1px solid ${theme.color.lightGray};
  `,
)

const TitleWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-left: ${theme.spacing.mid};
  `,
)

const ActionsWrapper = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin-right: ${theme.spacing.mid};
    gap: ${theme.spacing.mid};
  `,
)

const InfoTitle = styled.b(
  ({ theme }) => css`
    margin-right: ${theme.spacing.mid};
  `,
)

export const RoomCardElements = {
  Container,
  TitleWrapper,
  ActionsWrapper,
  InfoTitle,
}
