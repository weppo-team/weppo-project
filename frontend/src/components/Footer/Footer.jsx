import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FooterElements } from './elements'
import { AppInfoContext } from '../../context/AppInfoContext'

const { AntdFooter } = FooterElements

export const Footer = () => {
  const { title, repoUrl } = useContext(AppInfoContext)

  return (
    <AntdFooter>
      {title} ©2021 Created by three students.{' '}
      <Link to={{ pathname: repoUrl }}>Details</Link>
    </AntdFooter>
  )
}
