import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Prefecture } from 'types';

type PrefecturesData = {
  prefectures: Array<Prefecture>
}

const GET_PREFECTURES = gql`
  {
    prefectures {
      prefCode
      prefName
    }
  }
`

const PrefecturesPage = () => {
  const { loading, error, data } = useQuery<PrefecturesData>(GET_PREFECTURES)

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error :(</p>

  return (
    <ul>
      {data?.prefectures.map(prefecture => (
        <li key={prefecture.prefCode}>{prefecture.prefName}</li>
      ))}
    </ul>
  )
}

export default PrefecturesPage
