import { FooterElements } from './elements'
import { useAppInfo } from '../../context/AppInfoContext'

const { AntdFooter } = FooterElements

export const Footer = () => {
  const { title, repoUrl } = useAppInfo()

  return (
    <AntdFooter>
      {title} ©2021 Created by three students. <a href={repoUrl}>Details</a>
    </AntdFooter>
  )
}
