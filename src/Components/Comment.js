import React,{useState,useRef} from 'react'

import CommentList from './CommentList'
import uuid from 'react-uuid'
import '../style.css'
import { useEffect } from 'react'


export default function Comment() {

  const [text, setText] = useState('')
  const [inputList , setInputList] = useState([])
  const [count , setCount] = useState(250)
  const commentInput = useRef(null)

  const displayTime = new Date().toLocaleString()
  const isDisabled = text.length===0


  function handleChange(event){
    setText(event.target.value)
  }
  function handleClick(){
      setInputList([...inputList, {id: uuid() , body: text , time:displayTime }])
      setText('')
      setCount(250)
      commentInput.current.focus()
  }


  useEffect(()=>{
    const json = JSON.stringify(inputList)
    localStorage.setItem('lists' , json)
  },[inputList])
  
  useEffect(()=>{
    commentInput.current.focus()
    const json = localStorage.getItem('lists')
    const loadItem = JSON.parse(json)
    setInputList(loadItem)
    
  },[])

  const isCount = count-text.length
  return (
    <div>
      <div className='inputField'>
      <textarea className='input' type="text" placeholder='Enter your text....' value={text} onChange={handleChange} disabled={isCount===0} ref={commentInput}  />
      <button onClick={handleClick} className={`btn ${isDisabled? 'disable' : ''}`} disabled={isDisabled}>Add Post</button>
      <p>{isCount}</p>

      </div>

      <CommentList inputList= {inputList} setInputList={setInputList}  />
    </div>
  )
}
