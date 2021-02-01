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
    { x: 'Wins', y: won + 300, color: 'red' },
    { x: 'Lost', y: lost + 100, color: 'black' },
    { x: 'Ties', y: tied + 50, color: 'yellow' },
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
