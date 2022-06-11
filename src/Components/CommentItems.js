import React,{useState,useEffect} from 'react'

export default function CommentItems({inputList, setInputList}) {

  const [editText , setEditText] = useState('')
  const [CommentEdit , setCommentEdit] = useState(null)

  function deleteList(id){
    setInputList(prevList=> prevList.filter(item=> item.id !== id))
  }

  function SubmitEdit(id){
  
   setInputList(prevList=> (
     prevList.map((item)=> {
      if(item.id===id){
        item.body = editText
      }
      return item
     })
   ))
   setCommentEdit(null)
   setEditText('')
  }

  return (
    <div>
        <div className='main-field'>
          <div className='username'>
            <h3>Kushagra Gupta</h3>
            <p>@Kushgupta</p>
          </div>
            {
              CommentEdit === inputList.id ? (

                <textarea type="text" value={editText} onChange={(e)=> setEditText(e.target.value)} className="edit-input" />
              ):
              (
                <p className='input-body'>{inputList.body}</p>

              )
            }
          <div className='features'>
            <p>{inputList.time}</p>
            <div className='btns'>
              <button onClick={()=>deleteList(inputList.id)} className='delete-btn'><i className="fa-solid fa-trash-can"></i></button>
              {
                CommentEdit === inputList.id ? (
                <button className='submit-btn' onClick={()=> SubmitEdit(inputList.id)}>Submit</button>
                ):
                (

                  <button className='edit-btn' onClick={()=>setCommentEdit(inputList.id)}><i className="fa-solid fa-pen-to-square"></i></button>
                )
              }
            </div>
          </div>
        </div>
    </div>
  )
}
