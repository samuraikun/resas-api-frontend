import 'antd/dist/antd.css'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from 'utils/apollo-client'
import DashboardLayout from 'components/templates/DashboardLayout/index'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </ApolloProvider>
  )
}
