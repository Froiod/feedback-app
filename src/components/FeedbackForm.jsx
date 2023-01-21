import { useState } from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

const FeedbackForm = () => {

  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be atleast 10 characters')
      setBtnDisabled(true)
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }

    setText(e.target.value)
  }

  return (
    <Card>
      <form>
       <h2>How would you rate your service with us?</h2> 

      <RatingSelect />

       <div className="input-group">
        <input 
          type="text" 
          placeholder='Write a review'
          value={text}
          onChange={handleTextChange}
        />
        <Button 
          type='submit'
          isDisabled={btnDisabled}
        >
            Send
        </Button>        
       </div>

       {message && <div className='message'>{message}</div>} 

      </form>
    </Card>
  )
}

export default FeedbackForm