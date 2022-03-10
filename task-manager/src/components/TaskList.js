import React from 'react'

export default function TaskList() {
    return (
        <ul className="list-unstyled">
            <li className="border p-3">
                Name of Task
                <button className="btn btn-danger float-end ">Delet</button>
                <button className="btn btn-info float-end mx-3">Edit</button>
            </li>

            <li className="border p-3">
                Name of Task
                <button className="btn btn-danger float-end ">Delet</button>
                <button className="btn btn-info float-end mx-3">Edit</button>
            </li>

            <li className="border p-3">
                Name of Task
                <button className="btn btn-danger float-end ">Delet</button>
                <button className="btn btn-info float-end mx-3">Edit</button>
            </li>

            <li className="border p-3">
                Name of Task
                <button className="btn btn-danger float-end ">Delet</button>
                <button className="btn btn-info float-end mx-3">Edit</button>
            </li>

        </ul>
    )
}
