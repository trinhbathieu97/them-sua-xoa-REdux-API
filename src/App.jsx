import React, {useState} from 'react';
import { Modal, Switch } from 'antd';
import {ListUser} from './components/ListUser'
import {AddUserForm} from './components/AddUserForm'
import { useDispatch } from 'react-redux';
import { ADDtodo,EditAction,Delete} from './components/store/Action';

import 'antd/dist/antd.css'
import './App.css';

function App() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [list,setList] = useState({id:"", avatar: "", name: "", description: ""})
    const [edit,setEdit] = useState(null)

    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }
// =====================
    const dispatch = useDispatch()


    const AddTodo = ()=>{
        dispatch(ADDtodo(list))
        handleCancel()
    }

    // ===========
     const EditTodo = (item) =>{
        handleOpenModal()
        setEdit(item)
     }


    const EditActions = ()=>{
        dispatch(EditAction(list))
        handleCancel()
    }

    //  ===== seva
    const Seva = () =>{
       switch (list.id) {
            case "" :
                AddTodo()
                break
            default:
                EditActions()
                
                
        }
    }
    // ======= delete
    const DeleteTodo = (id) =>{
        dispatch(Delete(id))
    }


    return (
        <div className="App">
            <h2>List user</h2>
            <div className="header-add-user">
                <button className="ant-btn ant-btn-primary" onClick={handleOpenModal}>
                    Add New User
                </button>
            </div>
            <ListUser
                EditTodo = {EditTodo}
                DeleteTodo = {DeleteTodo}
             />
            <Modal title="Basic Modal" visible={isModalVisible} footer={null} onCancel={handleCancel}>
                <AddUserForm
                setList = {setList}
                Seva = { Seva}
                edit = {edit}
                />
            </Modal>
        </div>
    );
}

export default App;
