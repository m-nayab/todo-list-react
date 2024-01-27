import React, { Component} from 'react'

 class TodoList extends Component {
  item={}
  state={
    input:'',
    item:[]
  };
   inputHandle = (event) => {
    this.setState({
      input:event.target.value
    })
   }
   Storing=(event)=>{
    event.preventDefault()
    const {input}=this.state
    input==="" ? alert("oops u forgot to type") :
    this.setState({
      item:[...this.state.item,input],
      input:""
    })
   }
   deleteitem=(key)=>{
   const allitem=this.state.item
   allitem.splice(key,1)
   this.setState({
    item:allitem
   })
   }
   edit = (index) => {
    const edititem = window.prompt("Enter the text to be updated:");
  
    this.setState((prevState) => {
      if (edititem !== '') {
        return {
          item: [
            ...prevState.item.slice(0, index),
            edititem,
            ...prevState.item.slice(index + 1),
          ],
        };
      } else {
        return prevState;
      }
    });
  };
  render() {
    const {input,item} = this.state
    return (
      <div>
        <div className='container-list'>
           <h1>Todo List</h1>
           <form onSubmit={this.Storing}>
             <div className='inputbutton'>
                <input type='text' placeholder='Enter...' onChange={this.inputHandle} value={input}></input><button type='button' className='btn' onClick={this.Storing}>Add</button>
             </div>
           </form>
           <ul className='order'>
            {item.map((data,index)=>(
            <li className='order-list' key={index}>{data}<div className='inner'><i className="fa-solid fa-pen" onClick={()=>this.edit(index)}></i><i className="fa-solid fa-trash-can" onClick={()=>this.deleteitem(index)}></i></div></li>
            ))
            }
           </ul>
        </div>
      </div>
    )
  }
}
export default TodoList