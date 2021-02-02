import PropTypes from 'prop-types'
import { XYPlot, VerticalBarSeries, XAxis, YAxis } from 'react-vis'
import { theme } from '../../../../../../style/theme'

export const StatsChart = ({ won, tied, lost }) => {
  const data = [
    { x: 'Wins', y: won, color: theme.color.lightgreen },
    { x: 'Ties', y: tied, color: theme.color.blue },
    { x: 'Lost', y: lost, color: theme.color.indianred },
  ]

  const biggestValue = Math.max(won, tied, lost)
  const upperYRange = biggestValue > 0 ? Math.ceil(biggestValue / 10) * 10 : 10

  return (
    <XYPlot height={300} width={600} xType="ordinal" yDomain={[0, upperYRange]}>
      <VerticalBarSeries colorType="literal" data={data} />
      <XAxis />
      <YAxis />
    </XYPlot>
  )
}

StatsChart.propTypes = {
  won: PropTypes.number.isRequired,
  tied: PropTypes.number.isRequired,
  lost: PropTypes.number.isRequired,
}
