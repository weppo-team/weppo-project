import PropTypes from 'prop-types'
import { Table } from 'antd'

export const StatsTable = ({ elo, won, tied, lost }) => {
  const columns = [
    {
      title: 'Statistics',
      dataIndex: 'label',
      key: 'label',
      width: 300,
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      width: 300,
    },
  ]

  const data = [
    {
      key: '1',
      label: 'Rating ELO',
      value: elo,
    },
    {
      key: '2',
      label: 'Games won',
      value: won,
    },
    {
      key: '3',
      label: 'Games lost',
      value: lost,
    },
    {
      key: '4',
      label: 'Games tied',
      value: tied,
    },
  ]

  return <Table columns={columns} dataSource={data} pagination={false} />
}

StatsTable.propTypes = {
  elo: PropTypes.number.isRequired,
  won: PropTypes.number.isRequired,
  tied: PropTypes.number.isRequired,
  lost: PropTypes.number.isRequired,
}
