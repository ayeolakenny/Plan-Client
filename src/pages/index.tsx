import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import { useMeQuery } from '../generated/graphql'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  const { data: loggedInUser, loading } = useMeQuery()

  if (!loggedInUser?.me && !loading) router.replace('/login')

  return (
    <div className="space-y-3 p-12">
      <div className="flex justify-between space-y-3">
        <div>
          <h2 className="text-xl font-medium">Event Types</h2>
          <p>Create events to share for people to book on your calendar</p>
        </div>
        <Link href="/events/new">
          <button className="cursor-pointer rounded-md bg-indigo-500 p-2 text-white">
            Book event
          </button>
        </Link>
      </div>
      <div className="justify-center space-y-4">
        <div className="space-y-4">
          <div className="rounded-lg bg-gray-300 py-3 px-5 shadow">
            <div className="flex flex-row items-center justify-between">
              <div>
                <h6 className="text-2xl">Mon Mar 28 2022</h6>
                <h4 className="text-left text-xl text-black">2:00 PM</h4>
              </div>
              <div>
                <h6 className="text-xl">15min meeting with Kehinde</h6>
                <h6 className="text-xl">Upcoming</h6>
                <h4 className="text-left text-xl text-black">
                  ayeolakenny@gmail.com
                </h4>
              </div>
              <div>
                <div className="flex w-full items-center justify-center">
                  <button
                    type="button"
                    className="mx-5 flex transform rounded-md bg-blue-600 px-4 py-2 text-white shadow-lg outline-none transition-transform focus:ring-4 active:scale-x-75"
                  >
                    <span className="ml-2">Cancel</span>
                  </button>

                  <button
                    type="button"
                    className="flex transform rounded-md bg-blue-600 px-4 py-2 text-white shadow-lg outline-none transition-transform focus:ring-4 active:scale-y-75"
                  >
                    <span className="ml-2">Reschedule</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center space-y-4">
        <div className="space-y-4">
          <div className="rounded-lg bg-gray-300 py-3 px-5 shadow">
            <div className="flex flex-row items-center justify-between">
              <div>
                <h6 className="text-2xl">Mon Mar 28 2022</h6>
                <h4 className="text-left text-xl text-black">2:00 PM</h4>
              </div>
              <div>
                <h6 className="text-xl">10 min catchup</h6>
                <h6 className="text-xl">Upcoming</h6>
                <h4 className="text-left text-xl text-black">tobi@gmail.com</h4>
              </div>
              <div>
                <div className="flex w-full items-center justify-center">
                  <button
                    type="button"
                    className="mx-5 flex transform rounded-md bg-blue-600 px-4 py-2 text-white shadow-lg outline-none transition-transform focus:ring-4 active:scale-x-75"
                  >
                    <span className="ml-2">Cancel</span>
                  </button>

                  <button
                    type="button"
                    className="flex transform rounded-md bg-blue-600 px-4 py-2 text-white shadow-lg outline-none transition-transform focus:ring-4 active:scale-y-75"
                  >
                    <span className="ml-2">Reschedule</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center space-y-4">
        <div className="space-y-4">
          <div className="rounded-lg bg-gray-300 py-3 px-5 shadow">
            <div className="flex flex-row items-center justify-between">
              <div>
                <h6 className="text-2xl">Mon Mar 28 2022</h6>
                <h4 className="text-left text-xl text-black">2:00 PM</h4>
              </div>
              <div>
                <h6 className="text-xl">25min Quick Meeting</h6>
                <h6 className="text-xl">Upcoming</h6>
                <h4 className="text-left text-xl text-black">
                  taiwo@gmail.com
                </h4>
              </div>
              <div>
                <div className="flex w-full items-center justify-center">
                  <button
                    type="button"
                    className="mx-5 flex transform rounded-md bg-blue-600 px-4 py-2 text-white shadow-lg outline-none transition-transform focus:ring-4 active:scale-x-75"
                  >
                    <span className="ml-2">Cancel</span>
                  </button>

                  <button
                    type="button"
                    className="flex transform rounded-md bg-blue-600 px-4 py-2 text-white shadow-lg outline-none transition-transform focus:ring-4 active:scale-y-75"
                  >
                    <span className="ml-2">Reschedule</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
