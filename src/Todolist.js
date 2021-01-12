import React, {Component} from "react";
import ToDoItems from "./ToDoItems"

class Todolist extends Component {
    constructor(props){
        super(props);
    
         this.state = {
             items:[]
         };
         this.addItem = this.addItem.bind(this);
         this.deleteItem = this.deleteItem.bind(this);
     }
     addItem(e){
         
         console.log(this._inputElement.value);
         if(this._inputElement.value !== "")
         {var newItem = {
                            text : this._inputElement.value,
                            key : Date.now()
                        }
            this.state.items.push(newItem);            
            this.setState({});
                /*(preState)=>{
                    return{
                        items: preState.items.concat(newItem)
                    };
                }
            ) ;*/
            this._inputElement.value="" ;          
                   
         } 
         console.log(this.state.items);
         e.preventDefault(); 
     }
     deleteItem(key)
        {
            var filteredItems = this.state.items.filter((item)=>{
                return(item.key !== key)
            }
            );
            this.setState({
                items: filteredItems
            });
        }
    render()
    {
        return(
                 <div> 
                     <form id="form_1"  onSubmit ={this.addItem}>

                     <h1>MY TO DO LIST</h1> 
                         
                         <input  ref={(a)=>this._inputElement=a} placeholder="Enter Task" >
                         </input>

                         <button type="submit">+</button>
                         
                     </form>
                     {
                         this.props.ash ? this.props.ash :null
                     }
                     <ToDoItems entries={this.state.items} delete ={this.deleteItem} > </ToDoItems>
                 </div>
             );
                    
            
            
    }
 }
export default Todolist