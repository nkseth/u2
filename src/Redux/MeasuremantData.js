//  Here all the data exported by add measurement page submits
//  and read bu measurement page and further manupulated in API and backend opperations


//Upper body
export var NeckData = localStorage.getItem('NeckData')
export var ShoulderData = localStorage.getItem('ShoulderData')
export var ChestData = localStorage.getItem('ChestData')
export var ArmHoleData = localStorage.getItem('ArmHoleData')
export var SleeveLengthData = localStorage.getItem('SleeveLengthData')
export var WristData = localStorage.getItem('WristData')

//Lower Body
export var WaistData = localStorage.getItem('WaistData')
export var FullLengthData = localStorage.getItem('FullLengthData')
export var HipRoundData = localStorage.getItem('HipRoundData')
export var InSeamData = localStorage.getItem('InSeamData')
export var ThighData = localStorage.getItem('ThighData')
export var CalfData = localStorage.getItem('CalfData')
export var AnkleData = localStorage.getItem('AnkleData')


//Upper Body functions
export const NeckVALUE = (value) => {
    NeckData = value
    localStorage.setItem('NeckData', NeckData);
}
export const ShoulderVALUE = (value) => {
    ShoulderData = value
    localStorage.setItem('ShoulderData', ShoulderData);
}
export const ChestVALUE = (value) => {
    ChestData = value
    localStorage.setItem('ChestData', ChestData);
}
export const ArmHoleVALUE = (value) => {
    ArmHoleData = value
    localStorage.setItem('ArmHoleData', ArmHoleData);
}
export const SleeveLengthVALUE = (value) => {
    SleeveLengthData = value
    localStorage.setItem('SleeveLengthData', SleeveLengthData);
}
export const WristVALUE = (value) => {
    WristData = value
    localStorage.setItem('WristData', WristData);
}

//Lower Body functions

export const WaistVALUE = (value) => {
    WaistData = value
    localStorage.setItem('WaistData', WaistData);
}
export const FullLengthVALUE = (value) => {
    FullLengthData = value
    localStorage.setItem('FullLengthData', FullLengthData);
}
export const HipRoundVALUE = (value) => {
    HipRoundData = value
    localStorage.setItem('HipRoundData', HipRoundData);
}
export const InSeamVALUE = (value) => {
    InSeamData = value
    localStorage.setItem('InSeamData', InSeamData);
}
export const ThighVALUE = (value) => {
    ThighData = value
    localStorage.setItem('ThighData', ThighData);
}
export const CalfVALUE = (value) => {
    CalfData = value
    localStorage.setItem('CalfData', CalfData);
}
export const AnkleVALUE = (value) => {
    AnkleData = value
    localStorage.setItem('AnkleData', AnkleData);
}



// Product Data 


localStorage.setItem('Product_Type', 'Customised');

export var Product_Type = localStorage.getItem('Product_Type')

export const Product_Type_Change = (value) => {
    Product_Type = value
    localStorage.setItem('Product_Type', Product_Type);
}


export var Customer_Name = localStorage.getItem('Customer_Name')

export const Customer_Name_Change = (value) => {
    Customer_Name = value
    localStorage.setItem('Customer_Name', Customer_Name);
}



export var Customer_Size = localStorage.getItem('Customer_Size')

export const Customer_Size_Change = (value) => {
    Customer_Size = value
    localStorage.setItem('Customer_Size', Customer_Size);
}



export var Customer_Gender = localStorage.getItem('Customer_Gender')

export const Customer_Gender_Change = (value) => {
    Customer_Gender = value
    localStorage.setItem('Customer_Gender', Customer_Gender);
}



export var Customer_Fitting = localStorage.getItem('Customer_Fitting')

export const Customer_Fitting_Change = (value) => {
    Customer_Fitting = value
    localStorage.setItem('Customer_Fitting', Customer_Fitting);
}