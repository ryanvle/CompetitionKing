
import FinishedEvents from './finishedEvents'
import GrandChampion from './grandChampion'
import SchedulePublic from '../../components/competition/schedulePublic'

const PublicView = () => {
  return (
    <div>
        <SchedulePublic/>
        <FinishedEvents />
        <GrandChampion />

    </div>
  )
}

export default PublicView