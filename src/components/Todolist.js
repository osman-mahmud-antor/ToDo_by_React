import React, { Component } from 'react';
import Todoitem from './Todoitem'

class Todolist extends Component {
    render() {
        const {items, clearList,handleDelete} = this.props;
        return (
            <ul className='list-group my-5'>
                <h3 className='text-capitalize text-center'>To Do list</h3>

                {
                    items.map(item=>{
                        return(
                            <Todoitem key={item.id}
                            title={item.title} 
                            handleDelete={() => handleDelete(item.id)}
                            />
                        );
                    }
                    )
                }
                <button className='btn btn-danger btn-block text-capitalize mt-5' onClick={clearList}>Clear List</button>
            </ul>
               
        );
    }
}

export default Todolist;