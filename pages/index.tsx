import Link from 'next/link'
import { FC } from 'react'
import gql from 'graphql-tag'
import Layout from '../components/Layout'
import apolloClient from '../utils/apollo-client';

apolloClient.query({
  query: gql`
    {
      wages(prefCode: "13", sicCode: "-", simcCode: "-", wagesAge: BETWEEN_25_AND_29) {
        prefCode
        prefName
        sicName
        sicCode
        simcName
        simcCode
        data {
          year
          value
        }
      }
    }
  `
})
.then(result => console.log(result))

const IndexPage: FC = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
