import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE } from '../queries/queries'
const Mutate = () => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const [mutateFunction, { loading, error }] = useMutation(CREATE, {
    variables: { content: inputValue },
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`You entered: ${inputValue}`)
    mutateFunction()
    // try {
    //   mutateFunction()
    // } catch (errorr) {
    //   console.log(errorr, error)
    // }
    setInputValue('')
  }
  //   if (error) return <p>Oh no!</p>

  return (
    <>
      <h3>Mutate</h3>
      <p>{loading ? loading && <span>Loading!</span> : ''}</p>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='myInput'>Content:</label>
          <input
            type='text'
            id='myInput'
            value={inputValue}
            onChange={handleChange}
            placeholder='Type here...'
          />
          <button type='submit'>Submit</button>
        </form>
        {error ? { error } : ''}
      </div>
    </>
  )
}

export default Mutate
