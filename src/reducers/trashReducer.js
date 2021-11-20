const initialTrashData=[]
const trashReducer=(state=initialTrashData,action)=>{
    switch (action.type) {
        case "DELETEITEM":{
            const result=state.every(ele=>{
                return ele.id!==action.payload.id
            })
            if(result){
                return [...state,{...action.payload,toggleTrash:true}]
            }
            else
            {
                const result1=state.filter(ele=>{
                    return ele.id!==action.payload.id
                })
                return result1
            }
        }
        case "DELETEALLTRASH":{
            return []
        }
        default:{
            return state
        }
    }
}
export default trashReducer