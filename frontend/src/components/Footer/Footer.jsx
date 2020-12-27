import { Link } from 'react-router-dom'
import { FooterElements } from './elements'
import { useAppInfo } from '../../context/AppInfoContext'

const { AntdFooter } = FooterElements

export const Footer = () => {
  const { title, repoUrl } = useAppInfo()

  return (
    <AntdFooter>
      {title} ©2021 Created by three students.{' '}
      <Link to={{ pathname: repoUrl }}>Details</Link>
    </AntdFooter>
  )
}
