const InitialArchivedData=[]

const archiveReducer=(state=InitialArchivedData,action)=>{
    switch (action.type) {
        case "ARCHIVEDITEM":{
            return [...state,{...action.payload,toggle:true}]
        }
        case "DELETEITEM":{
            const result=state.filter(ele=>{
                return ele.id!==action.payload.id
            })
            return result
        }
        case "UNDOITEM":{
            const result=state.filter(ele=>{
                return ele.id!==action.payload.id
            })
            return result
        }
        default:{
            return state
        }
    }
}
export default archiveReducer