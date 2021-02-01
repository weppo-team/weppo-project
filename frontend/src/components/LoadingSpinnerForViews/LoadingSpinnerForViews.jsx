import { Spin } from 'antd'
import { LoadingSpinnerElements } from './elements'

const { LoadingSpinnerWrapper } = LoadingSpinnerElements

export const LoadingSpinnerForViews = () => (
  <LoadingSpinnerWrapper>
    <Spin size="large" />
  </LoadingSpinnerWrapper>
)
