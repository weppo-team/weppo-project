import { render as reactRender } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { AppProviders } from '../context/AppProviders'

export const render = (ui, options) =>
  reactRender(
    <BrowserRouter>
      <AppProviders>{ui}</AppProviders>
    </BrowserRouter>,
    options,
  )
