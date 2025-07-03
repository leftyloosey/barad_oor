import axios from 'axios'
import { URL } from '../config'
import { useState, useEffect } from 'react'

const Restful = () => {
  const [strangs, setStrangs] = useState(null)
  async function getHello() {
    try {
      const response = await axios.get(`${URL}/api/hello`)
      const data = await response

      //console.log(JSON.parse(data))
      return data
      // return JSON.parse(data)
      // const response = await axios.get('http://localhost:5002/api/hello')
      // console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getHello().then((result) => {
      setStrangs(result.data)
    })
  }, [])
  return (
    <>
      <p>Restful</p>
      <div>
        {strangs?.map((item, key) => (
          <p key={key}>{item.content}</p>
        ))}
      </div>
    </>
  )
}

export default Restful
