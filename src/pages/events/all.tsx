import { ClockIcon, ShareIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { EventCard } from '../../components/global/EventCard'
import { CLIENT_URL } from '../../constants'
import { useFindUserEventTypesQuery, useMeQuery } from '../../generated/graphql'

const Events = () => {
  const router = useRouter()

  const { data: loggedInUser, loading } = useMeQuery()

  if (!loggedInUser?.me && !loading) router.replace('/login')

  const { data: userEvents } = useFindUserEventTypesQuery()

  return (
    <div className="space-y-3 p-12">
      <div className="flex justify-between space-y-3">
        <div>
          <h2 className="text-xl font-medium">Event Types</h2>
          <p>Create events to share for people to book on your calendar</p>
        </div>
        <Link href="/events/new">
          <button className="cursor-pointer rounded-md bg-indigo-500 p-2 text-white">
            Create New Event
          </button>
        </Link>
      </div>
      <div className="justify-center space-y-4">
        {userEvents?.findUserEventTypes.map((event) => (
          <EventCard
            id={event.id}
            length={event.length}
            title={event.title}
            url={`${CLIENT_URL}/events/book/${event.length}`}
            key={event.id}
          />
        ))}
      </div>
    </div>
  )
}
export default Events
