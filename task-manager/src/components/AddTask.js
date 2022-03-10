import React from 'react'

export default function AddTask() {
    return (
            <form className="border p-3 my-3">
                <h1 className="text-center display-4">Add New Task</h1>
                <div className="form-group">
                    <input type="text" className="form-control"  placeholder="Type Title of Task" />
                </div>
                <button type="submit" className="btn btn-primary w-100 my-3">Submit</button>
            </form>
    )
}
