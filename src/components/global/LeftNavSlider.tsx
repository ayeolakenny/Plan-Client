import { useContext } from 'react'
import {
  XCircleIcon,
  UserIcon,
  CashIcon,
  LogoutIcon,
} from '@heroicons/react/solid'
import Link from 'next/link'
import { LeftSliderContext } from '../../context/NavSlider.context'
import {
  MeDocument,
  useLogoutMutation,
  useMeQuery,
} from '../../generated/graphql'
import { useRouter } from 'next/router'

export const LeftNavSlider = () => {
  const router = useRouter()

  const { toggleLeftSlider, setToggleLeftSlider } =
    useContext(LeftSliderContext)

  const [logout] = useLogoutMutation({
    refetchQueries: [{ query: MeDocument }],
  })

  const handleLogout = () => {
    setToggleLeftSlider(false)
    logout()
  }

  const { data: loggedInUser, loading } = useMeQuery()
  if (!loggedInUser?.me && !loading) router.replace('/login')

  return (
    <>
      <div className="flex items-end justify-end px-4">
        <div
          className={`${
            toggleLeftSlider ? 'left-0 transition' : '-left-96'
          } fixed top-0  z-20 h-screen w-10/12 bg-gray-200 shadow-2xl delay-150 duration-200 ease-out lg:w-72`}
        >
          <XCircleIcon
            width={40}
            className="absolute top-0 right-0 cursor-pointer p-2"
            onClick={() => setToggleLeftSlider(!toggleLeftSlider)}
          />
          <nav role="navigation" className="p-6">
            <div className="flex items-center gap-4 pb-4 font-medium text-gray-600">
              <p>PLAN.COM</p>
            </div>

            <div className="relative -mx-4 mt-4 h-[85vh] overflow-y-auto overflow-x-hidden">
              <ul className="mb-12 space-y-4 px-4">
                <li className="cursor-pointer">
                  <Link href="/events/all">
                    <span className="flex items-center gap-4 text-gray-600 transition hover:text-indigo-500">
                      <UserIcon width={30} />
                      <p>Events Types</p>
                    </span>
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/">
                    <span className="flex items-center gap-4 text-gray-600 transition hover:text-indigo-500">
                      <CashIcon width={30} />
                      <p>Bookings</p>
                    </span>
                  </Link>
                </li>
                <li className="cursor-pointer" onClick={() => handleLogout()}>
                  <span className="flex items-center gap-4 text-gray-600 transition hover:text-indigo-500">
                    <LogoutIcon width={30} />
                    <p>Logout</p>
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div
          onClick={() => setToggleLeftSlider(false)}
          className={`${
            toggleLeftSlider ? 'opacity-100 transition' : ''
          } fixed top-0 left-0 z-10 h-screen w-screen bg-gray-900 bg-opacity-30 opacity-0 duration-200`}
        ></div>
      </div>
    </>
  )
}
