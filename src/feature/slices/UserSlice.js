import {createSlice} from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';
import { clearAllUserImport } from '../../components/CreateAction';
const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload);
            // console.log(action.payload)
        },
        removeUser:(state,action)=>{
            state.splice(action.payload,1);

            // state.pop(action.payload);
            // let userIndexNum=state.indexOf(action.payload)
            // state.splice(userIndexNum,1);
        },
        // clearAll:(state,action)=>{
        //     return [];
        // },
    },

    extraReducers(builder){
        builder.addCase(clearAllUserImport,()=>{return[];})

    }
});

//console.log(userSlice.actions);

export default userSlice.reducer;
export const {addUser, removeUser, clearAll} = userSlice.actions;