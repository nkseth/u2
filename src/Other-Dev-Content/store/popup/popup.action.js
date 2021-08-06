export const TOGGLE_POPUP = 'TOGGLE_POPUP'

export const changeStatus = (status) =>{
    return{
        type:TOGGLE_POPUP,
        status
    }
}