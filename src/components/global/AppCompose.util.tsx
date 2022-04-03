import { useContext } from 'react'
import { LeftSliderContext } from '../../context/NavSlider.context'
import { useMeQuery } from '../../generated/graphql'
import { LeftNavSlider } from '../global/LeftNavSlider'

export const AppComposeUtils = () => {
  const { data: loggedInUser, loading } = useMeQuery()

  const { toggleLeftSlider, setToggleLeftSlider } =
    useContext(LeftSliderContext)

  return (
    <>
      {!loading && loggedInUser?.me ? (
        <>
          <span className={`${toggleLeftSlider ? 'visible' : 'hidden'}`}>
            <LeftNavSlider />
          </span>
        </>
      ) : null}
    </>
  )
}
