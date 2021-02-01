import PropTypes from 'prop-types'
import { message, Table } from 'antd'
import { useEffect, useState } from 'react'
import { stats } from '../../../../../../services/stats/statsServices'

export const StatsTable = ({ name }) => {
  const [elo, setElo] = useState(0)
  const [won, setWon] = useState(0)
  const [tied, setTied] = useState(0)
  const [lost, setLost] = useState(0)

  useEffect(() => {
    stats(name)
      .then((response) => {
        console.log(response.data)
        setElo(response.data.eloScore)
        setWon(response.data.amountOfWonGames)
        setTied(response.data.amountOfTiedGames)
        setLost(response.data.amountOfLostGames)
      })
      .catch((error) => message.error(error.data.message))
  }, [])

  console.log(name)
  const columns = [
    {
      title: 'Parameter',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ]

  const data = [
    {
      key: '1',
      label: 'Rating',
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
  name: PropTypes.string.isRequired,
}
