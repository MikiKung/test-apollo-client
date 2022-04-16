import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { GET_VEHICLE } from '../queries/starWar.queries'

const Home: NextPage = () => {
  const [Films, setFilms] = useState([])
  const { error, loading, data } = useQuery(GET_VEHICLE)
  useEffect(() => {
    if (data) {
      console.log(data.allVehicles.totalCount);
      setFilms(data.allVehicles.vehicles)
    }
  }, [data])
  return (
    <div className='flex flex-wrap gap-9 h-[100vh] w-[100vw]'>{Films.map((e: any, i: number) => (
      <div className='bg-slate-800 w-[auto] h-24 flex items-center p-5 text-white' key={i}>{e.name}</div>
    ))}</div>
  )
}

export default Home
