export const SAVE_SINGUP_DATA = 'SAVE_SINGUP_DATA';

export const saveSingUpData = (singUpDetails) =>{
    console.log(singUpDetails)
    return{
        type:SAVE_SINGUP_DATA,
        singUpDetails
    }
}