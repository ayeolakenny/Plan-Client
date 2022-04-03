import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/global/Layout'
import { useMemo, useState } from 'react'
import { LeftSliderContext } from '../context/NavSlider.context'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { SERVER_URI_GRAPHQL } from '../constants'

const link = createHttpLink({
  uri: SERVER_URI_GRAPHQL,
  credentials: 'include',
})

const client: ApolloClient<object> = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
  const [toggleLeftSlider, setToggleLeftSlider] = useState(false)

  const leftSliderProvider = useMemo(
    () => ({
      toggleLeftSlider,
      setToggleLeftSlider,
    }),
    [toggleLeftSlider, setToggleLeftSlider]
  )

  return (
    <ApolloProvider client={client}>
      <LeftSliderContext.Provider value={leftSliderProvider}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LeftSliderContext.Provider>
    </ApolloProvider>
  )
}

export default MyApp
