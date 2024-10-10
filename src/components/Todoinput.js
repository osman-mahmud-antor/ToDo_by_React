import React, { Component } from 'react';

class Todoinput extends Component {
    render() {
        const {item, handleChange,handleSubmit} = this.props;
        return (
            <div className='card card-body my-3'>
                <form onSubmit = {handleSubmit}>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <div className='input-group-text bg-primary text-white'>
                                <i className='fa fa-book' />
                            </div>
                        </div>
                        <input type='text' className='form-control text-capitalize' placeholder='Enter a To Do item' value={item} onChange={handleChange} />
                    </div>
                    <button type='submit' className='fa fa-plus-square-o btn btn-block btn-primary mt-3'> Add Item</button>
                </form>
            </div>
        );
    }
}

export default Todoinput;