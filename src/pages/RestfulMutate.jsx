import { useState } from 'react'
import axios from 'axios'
import { URL } from '../config'

const RestfulMutate = () => {
  const postFunction = async (stuff) => {
    // axios
    //   .post('http://localhost:5002/api/newstrang', {
    //     content,
    //   })
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
    try {
      const response = await axios.post(`${URL}/api/newstrang`, {
        content: stuff,
      })
      console.log('response:', response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`You entered: ${inputValue}`)
    postFunction(inputValue)
    setInputValue('')
  }

  return (
    <>
      <h3>Mutate</h3>

      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='myInput'>Content:</label>
          <input
            type='text'
            id='myInput'
            autoComplete='off'
            value={inputValue}
            onChange={handleChange}
            placeholder='Type here...'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default RestfulMutate
