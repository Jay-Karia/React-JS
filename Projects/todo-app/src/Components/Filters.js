import React from 'react'

export default function Filters(props) {
  return (
    <>
    <div className="container filters">
        <div className="button button-1 mx-5" onClick={props.allTasks}>All Tasks</div>
        <div className="button button-2 mx-5" onClick={props.completed}>Completed Tasks</div>
        <div className="button button-3 mx-5" onClick={props.remaining}>Remaining Tasks</div>
    </div>
    </>
  )
}
