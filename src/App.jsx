import { useState } from 'react'
import './App.css'

function App() {

  const quotesArray = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Success usually comes to those who are too busy to be looking for it.",
    "The way to get started is to quit talking and begin doing.",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    "Don't watch the clock; do what it does. Keep going.",
    "You can never plan the future by the past.",
  ];

  const initialEmojis = {
    "❤️": 0,
    "😂": 0,
    "🔥": 0,
    "😢": 0,
  }

  const [quote, setquote] = useState("Click Button to view the quote")
  const [emojis, setemojis] = useState({...initialEmojis})

  function showQuote(){
    const randomIndex = Math.floor(Math.random() * quotesArray.length)
    setquote(quotesArray[randomIndex])
    setemojis({...initialEmojis})
  }

  const incrementEmoji = (emoji) => {
    setemojis((prev)=>({
      ...prev,
      [emoji]: prev[emoji] + 1 
    }))
  }

  return (
    <div className='bg-gray-100 text-gray-800 flex flex-col items-center justify-center min-h-screen p-6 space-y-6'>
      <div className="quote-container bg-white shadow-lg rounded-xl p-6 max-w-xl w-full text-center">
        <p className="quote text-xl font-semibold italic">{quote}</p>
      </div>

      <div className="emoji-container flex space-x-6 text-lg font-medium">
      {Object.entries(emojis).map(([emoji, count]) => (
          <button
            key={emoji}
            onClick={() => incrementEmoji(emoji)}
            className="text-2xl hover:scale-110 transition text-white"
          >
            {emoji} {count}
          </button>
        ))}
      </div>
      <button className="new-quote mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow" onClick={showQuote}>
        New Quote
      </button>
    </div>
  )
}

export default App
