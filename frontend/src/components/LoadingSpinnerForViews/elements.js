import styled from 'styled-components'

const LoadingSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .ant-spin-dot {
    width: 45px;
    height: 45px;
  }
`

export const LoadingSpinnerElements = {
  LoadingSpinnerWrapper,
}
