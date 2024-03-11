import { ADDMOVIE, DELETEMOVIE, EDITMOVIE } from "./actiontype"

export const add =(data)=>{
return{ 
    type:ADDMOVIE,
    payload:data
  }
}
export const del =(id)=>{
    return{ 
        type:DELETEMOVIE,
        payload:id
      }
}
export const edit = (id, data)=>{
return {
  type: EDITMOVIE,
  payload:{id, data} 
}
}
