
import { useState,useEffect } from "react";

export const AddUserForm = ({setList, Seva,edit}) => {
   
    const [avata,SetAvata] = useState("")
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [id,setId] = useState("")

    // ======== khi edit co gia tri khi an vao edit o user
    useEffect(()=>{
        if(edit){
            SetAvata(edit.image)
            setName(edit.name)
            setId(edit.id)
            setDescription(edit.description)
        }
    },[edit])

    useEffect(() => {

        setList({id:id, avatar: avata, name: name, description:description})
    
    }, [avata,name,description])

    const Avata = (e)=>{
        SetAvata(e.target.value)
    }

    const Name = (e) =>{
        setName(e.target.value)
    }

    const Description = (e) =>{
        setDescription(e.target.value) 
    }

    const ADD = () =>{
        Seva()
        SetAvata("")
        setName("")
        setId("")
        setDescription("")
    }

    return <div>
        <div className="field-input-group">
            <input placeholder="Avatar" type="text" className="ant-input" value={avata} onChange={Avata}/>
        </div>
        <div className="field-input-group">
            <input placeholder="Name" type="text" className="ant-input" value={name} onChange = {Name} />
        </div>
        <div className="field-input-group">
            <input placeholder="Content" type="text" className="ant-input" value={description} onChange = {Description} />
        </div>
        <div className="modal-new-user-footer">
            <button className="ant-btn ant-btn-primary" onClick={ADD}>
                Save
            </button>
            <button className="ant-btn" style={{marginLeft: 10}}>
                Cancel
            </button>
        </div>
    </div>
}
