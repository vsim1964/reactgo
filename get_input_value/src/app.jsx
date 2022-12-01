// import { useState } from 'react';
import { useRef, useState } from 'react';

// ! Вариант с ref
export function App(event) {
  const [value, setValue] = useState('')
  const inputRef = useRef(null);

  const handleClick = () => {
    setValue(inputRef.current.value)
  }

  return (
    <>
      <input type="text" placeholder='placeholder' ref={inputRef} />
      <button onClick={handleClick}>Get value</button>
      <p>{value}</p>
    </>
  )
}


// ! Вариант с состояними
// export function App(event) {
//   const [value, setValue] = useState('')
//   const [text, setText] = useState('Здесь будет значение  input')

//   const nandleChange = (event) => {
//     setValue(event.target.value)
//   }

//   const handleClick = () => {
//     setText(value)
//   }

//   return (
//     <>
//       <input type="text" placeholder='placeholder' onChange={nandleChange} />
//       <button onClick={handleClick}>Get value</button>
//       <p>{text}</p>
//     </>
//   )
// }


// ! Традиционный вариант

// export function App() {
//   const [value, setValue] = useState('Здесь будет значение  input')
//   const handleClick = (e) => {
//     e.preventDefault()
//     setValue(document.querySelector('input').value)
//   }

//   return (
//     <>
//       <input type="text" value="" placeholder='placeholder' />
//       <button onClick={handleClick}>Get value</button>
//       <p>{value}</p>
//     </>
//   )
// }
