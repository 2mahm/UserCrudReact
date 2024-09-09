import React from 'react'

export default function User({id,name,deleateuser,editUser}) {
  return (
    <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>
        <button className="btn btn-info mx-2" onClick={()=>editUser(id)}>Edit</button>
        <button className="btn btn-danger" onClick={()=>deleateuser(id)}>Delete</button>
    </td>
</tr>
  )
}
