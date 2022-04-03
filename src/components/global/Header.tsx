import { MenuAlt3Icon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useContext } from 'react'
import { LeftSliderContext } from '../../context/NavSlider.context'
import { useMeQuery } from '../../generated/graphql'

export const Header = () => {
  const { toggleLeftSlider, setToggleLeftSlider } =
    useContext(LeftSliderContext)
  const { data: loggedInUser } = useMeQuery()
  return (
    <header className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <div className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
          {loggedInUser?.me ? (
            <MenuAlt3Icon
              width={35}
              className="cursor-pointer text-indigo-500 hover:text-indigo-700"
              onClick={() => setToggleLeftSlider(!toggleLeftSlider)}
            />
          ) : null}
          <span className="ml-3 text-xl">PLAN.COM</span>
        </div>
      </div>
    </header>
  )
}
