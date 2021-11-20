const initialNotesData=[]

const notesDataReducer=(state=initialNotesData,action)=>{
    switch (action.type) {
        case "ADDNOTESITEM":{
            const result=state.every(ele=>{
                return ele.id!==action.payload.id
            })
            if(result){
                return [...state,action.payload]
            }
            else
            {
                const result=state.map(ele=>{
                    if(ele.id===action.payload.id)
                    {
                        return {...ele,...action.payload}
                    }
                    else
                    {
                        return {...ele}
                    }
                })
                return result
            }
        }
        case "DELETEITEM":{
            const result=state.filter(ele=>{
                return ele.id!==action.payload.id
            })
            return result
        }
        case "ARCHIVEDITEM":{
            const result=state.filter(ele=>{
                return ele.id!==action.payload.id
            })
            return result
        }
        case "UNDOITEM":{
            return [{...action.payload,toggle:false},...state]
        }
        default:{
            return state
        }
    }
}
export default notesDataReducer