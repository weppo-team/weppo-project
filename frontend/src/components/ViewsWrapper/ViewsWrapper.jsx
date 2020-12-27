import { Layout } from 'antd'
import PropTypes from 'prop-types'
import { Footer } from '../Footer'
import { Sidebar } from '../Sidebar'
import { ViewsWrapperElements } from './elements'

const { Header, Content, MainLayout } = ViewsWrapperElements

export const ViewsWrapper = ({ children }) => (
  <MainLayout>
    <Sidebar />
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  </MainLayout>
)

ViewsWrapper.propTypes = {
  children: PropTypes.node,
}
