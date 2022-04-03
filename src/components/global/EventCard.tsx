import { ClockIcon, ShareIcon } from '@heroicons/react/outline'
import Link from 'next/link'

interface EventCardProps {
  id: string
  url: string
  title: string
  length: number
}

export const EventCard = ({ length, title, url, id }: EventCardProps) => {
  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-gray-300 py-3 px-5 shadow">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h6 className="text-xl">{url}min</h6>
            <Link href={`/event/book/${id}`}>
              <h4 className="text-left text-lg text-black">{title}</h4>
            </Link>
          </div>
          <div className="cursor-pointer">
            <ShareIcon width={30} />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start text-left">
          <ClockIcon width={30} />
          <p>
            <span className="text-teal-500">{length}min</span>
          </p>
        </div>
      </div>
    </div>
  )
}
