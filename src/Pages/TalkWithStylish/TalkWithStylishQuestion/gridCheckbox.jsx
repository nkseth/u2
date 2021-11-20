import { useMediaQuery, Grid, Button, createMuiTheme, MuiThemeProvider, Container, MobileStepper } from "@material-ui/core";
import React, { useState } from "react"
import Fashion from "./Components/Fashion/fashion";
import Trends from "./Components/Trends/trends";
import AboutShopping from "./Components/AboutShopping/aboutShopping";
import InterestedCloths from "./Components/InterestedCloths/interrestedCloths";
import TypeOfCloth from "./Components/TypeOfCloths/typeOfClothes"
import TypeOfFabric from "./Components/FabricType/fabricType"
import KnowyourBudget from "./Components/KnowBudget/knowBudget";
import PreferredColor from "./Components/PreferredColor/preferredColor"




export default function GridCheckbox() {



    const [checkBoxes, setCheckBoxes] = useState(0)




    return (

        <div>
            {checkBoxes === 0 ?
                <Fashion change={setCheckBoxes} />
                : <></>}
            {checkBoxes === 1 ?
                <AboutShopping change={setCheckBoxes} />
                : <></>}
            {checkBoxes === 2 ?
                <Trends change={setCheckBoxes} />
                : <></>}
            {checkBoxes === 3 ?
                <InterestedCloths change={setCheckBoxes} />
                : <></>}
            {checkBoxes === 4 ?
                <TypeOfCloth change={setCheckBoxes} />
                : <></>}
            {checkBoxes === 5 ?
                <TypeOfFabric change={setCheckBoxes} />
                : <></>}
            {checkBoxes === 6 ?
                <KnowyourBudget change={setCheckBoxes} />
                : <></>}
            {checkBoxes === 7 ?
                <PreferredColor change={setCheckBoxes} />
                : <></>}

        </div>

    );
}





