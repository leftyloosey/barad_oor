import { useQuery } from '@apollo/client'
import { STRANG_LIST } from '../queries/queries'

const Query = () => {
  const { data, loading, error } = useQuery(STRANG_LIST)

  if (loading) return <p>Loading!</p>
  if (error) return <p>Oh no!</p>

  return (
    <>
      <h3>Query</h3>
      <div>
        {data.strangList.map((item, key) => (
          <p key={key}>{item.content}</p>
        ))}
      </div>
    </>
  )
}

export default Query
