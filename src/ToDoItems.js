import React,{Component} from "react";

class ToDoItems extends Component{
    constructor(props){
        super(props);
    }
    delete(key)
    {
        return this.props.delete(key);
    }

      render(){
        let entries = this.props.entries;
        let listItems = entries.map((data) => {
            return <div id="listItems"><li  key ={data.key}  >{data.text} 
            </li><span onClick={()=> this.delete(data.key)}><i class="fa fa-trash-o"></i></span></div>
        });
      return(
         <div >
             <ul>
                {listItems}
             </ul>
         </div>
        );
      }
    

}

export default ToDoItems