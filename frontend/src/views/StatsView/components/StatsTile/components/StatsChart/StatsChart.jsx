import PropTypes from 'prop-types'
import {
  XYPlot,
  VerticalBarSeries,
  XAxis,
  YAxis,
  HorizontalGridLines,
} from 'react-vis'

export const StatsChart = ({ won, tied, lost }) => {
  const data = [
    { x: 'Wins', y: won, color: 'green' },
    { x: 'Ties', y: tied, color: 'blue' },
    { x: 'Lost', y: lost, color: 'red' },
  ]

  return (
    <XYPlot height={300} width={600} xType="ordinal">
      <VerticalBarSeries colorType="literal" data={data} />
      <HorizontalGridLines />
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
