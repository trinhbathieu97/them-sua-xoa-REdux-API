import './ListUser.css'
import { GetTodo } from '../store/Action'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const ListUser = ({EditTodo,DeleteTodo}) => {
    const listTodo = useSelector(state => state.myTodo.todo)
    console.log(listTodo)
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(GetTodo())
    },[])

    // ========== Edit
    const Edit = (todo) =>{
            EditTodo(todo)
    }
    const Remove = (id)=>{
        DeleteTodo(id)
    }


    return <div className="ant-list-items">
        <div className="ant-list-item">
           {
               listTodo.map(todo =>  <div className="ant-list-item-meta" key={todo.id}>
               <div className="ant-list-item-meta-avatar">
                   <span className="ant-avatar ant-avatar-circle ant-avatar-image">
                       <img src={todo.image}/>
                   </span>
               </div>
               <div className="ant-list-item-meta-content">
                   <h4 className="ant-list-item-meta-title">
                       <a>{todo.name}</a>
                   </h4>
                   <div className="ant-list-item-meta-description">
                      {todo.description}
                   </div>
               </div>
               <ul className="ant-list-item-action">
                   <li onClick={()=> Edit(todo)}>
                       <a>Edit</a>
                   </li>
                   <li onClick={()=> Remove(todo.id)}>
                       <a>Remove</a>
                   </li>
               </ul>
           </div>)
           }
        </div>
    </div>
}