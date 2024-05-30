import React, { Fragment } from 'react'

const Todolist = (props) => {
    console.log(props.items);
    let {items} = props
  return (
   <section className='todo'>
    <h2>Courses</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Courses</th>
                <th>Trainer</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {items.length>0 &&  items.map((items)=>
                { 
                    return (<Fragment key={items.id}>
                            <tr>
                                <td>{items.id}</td>
                                <td>{items.course}</td>
                                <td>{items.trainer}</td>
                                <td>
                                    <button onClick={()=>handleDelete(items.id)}>DELETE</button>
                                    <button onClick={()=>handleUpdate(items.id)}>UPDATE</button>
                                </td>
                            </tr>
                        </Fragment>
                    )
                })
            }
        </tbody>
    </table>
   </section>
  )
}

export default Todolist