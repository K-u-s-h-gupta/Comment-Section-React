import React from 'react'
import CommentItems from './CommentItems'
export default function CommentList({inputList,setInputList}) {
  return (
    <div>

            {
                inputList.map(items=>(
                    <CommentItems
                        key={items.id}
                      
                        inputList={items}
                        setInputList={setInputList}
                    />
                ))
            }

    </div>
  )
}
