const initState = {
    todo:[
     
   ]
}

const todoReduce = (state =initState,action) =>{
    switch(action.type){
        case "GET_TODO" :
            return {
                ...state,
                todo:action.payload
            }

        case "ADD_TODO":
            return{
                ...state,
                todo : [...state.todo,action.payload]
            }    

        case "EDIT_TODO" :  
              
            return{
                ...state,
                todo: state.todo.map(element => {
                    if(element.id === action.payload.id) {
                        // Object.keys(element).forEach(property => {
                        //     element[property] = action.payload[property]
                        // })
                        element.name = action.payload.name;
                        element.image = action.payload.image;
                        element.description = action.payload.description

                    }
                    return element
                })
                      
            } 

            case "DELETE_TODO" : 
            return{
                ...state,
                todo: state.todo.filter(item => item.id !== action.payload.id)
            }
            default:
                return state
    }
}

export default todoReduce