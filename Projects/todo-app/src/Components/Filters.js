import React from 'react'

export default function Filters(props) {
  let bgs = ['#ffc107','#0d6efd','#fd7e14','#dc3545','#198754']
  return (
    <>
      <h2 className='text-center my-4'><strong>Filters</strong></h2>
      <hr />
    <div className="container filters">
        <div className="button button-1 mx-5" onClick={props.allTasks}>All Tasks</div>
        <div className="button button-2 mx-5" onClick={props.completed}>Completed Tasks</div>
        <div className="button button-3 mx-5" onClick={props.remaining}>Remaining Tasks</div>
    </div>
    <hr />
    <h2 className='text-center my-4'><strong>Categories</strong></h2>
    <div className="container filters categoryF">
        <div className="button button-4 mx-5" onClick={()=>{props.filterCategory('work', bgs[0])}}>Work 👨‍💻</div>
        <div className="button button-5 mx-5" onClick={()=>{props.filterCategory('travel', bgs[1])}}>Travel ✈</div>
        <div className="button button-6 mx-5" onClick={()=>{props.filterCategory('food', bgs[2])}}>Food 🍉</div>
        <div className="button button-7 mx-5" onClick={()=>{props.filterCategory('urgent', bgs[3])}}>Urgent ⌚</div>
        <div className="button button-8 mx-5" onClick={()=>{props.filterCategory('entertainment', bgs[4])}}>Entertainment 🍿</div>
    </div>
    <hr />
    {props.filter.length===0?"":<><h2 className='text-center my-4'><strong>Custom Categories</strong></h2>
    <div className="container filters categoryF d-flex text-center flex-wrap" style={{height:'200px'}}>
        {props.filter.map((e, i)=>{
          return <>
          <div >
           <div className="button mx-5 my-2" style={{backgroundColor:props.filter[i].color}} onClick={()=>{props.filterCategory(props.filter[i].category, props.filter[i].color)}}>{props.filter[i].category} {props.filter[i].char}</div>
           <img src={require('../del.png')} alt="" onClick={()=>{props.delFilter(i)}}/>
          </div>
          </>
        })}
        
    </div></>}
    
    </>
  )
}
