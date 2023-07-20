import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { getTeamEvents, getLeagueEvents } from '@core/selectors'

import LeagueScheduleList from './league-schedule-list'

const mapStateToProps = createSelector(
  getTeamEvents,
  getLeagueEvents,
  (teamEvents, leagueEvents) => {
    const events = teamEvents
      .concat(leagueEvents)
      .sort((a, b) => a.date.unix() - b.date.unix())

    return { events }
  }
)

export default connect(mapStateToProps)(LeagueScheduleList)
