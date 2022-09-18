import React from 'react';
import { useState } from 'react';

export default function AddTodo(props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    function submit(e) {
        e.preventDefault();
        if (!title || !desc) {
            alert('enter value')
        } else {
            props.addTodo(title, desc);
        }

        setTitle('');
        setDesc('');
    }



    return (
        <div className='container' style={{
            maxWidth : '560px',
            padding : '12px',
        }}>
            {/* <div className="row justify-content-center"> */}
                {/* <div className="col-7"> */}
                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" placeholder="Buy groceries" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" value={desc} onChange={(e) => { setDesc(e.target.value) }} id="description" rows="3" placeholder="Buy tomato ketchup, bananas, soya chunks, wheat flour."></textarea>
                        </div>
                        <button style={{display : 'block', marginLeft : 'auto'}} type='submit' className="btn btn-sm btn-success">Submit</button>
                    </form>
                {/* </div> */}
            {/* </div> */}
        </div>
    )
}
