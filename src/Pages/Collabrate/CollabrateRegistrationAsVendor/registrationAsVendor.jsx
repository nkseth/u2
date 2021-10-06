import React from "react"
import { TextField, Button, Grid } from "@material-ui/core";
import groupimg1 from "../../../Images/collabrate/groupimg1.png"


export default function RegistrationAsVendor() {
    return (
        <div style={{ paddingRight: "5%", paddingLeft: "5%" }}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <img src={groupimg1} />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>

                    <Grid style={{ display: "flex", justifyContent: "space-around", alignItems: "baseline" }}>
                        <Grid>
                            <p>Welcome Vendor</p>
                        </Grid>
                        <Grid>
                            <Button>Register</Button>
                            <Button>Login</Button>
                        </Grid>
                    </Grid>

                    <Grid>
                        <p>Create a new account to get started.</p>
                    </Grid>

                    <Grid container spacing={3}>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField placeholder="Full Name" variant="outlined" size="small" fullWidth required />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField placeholder="Email Id*" variant="outlined" size="small" fullWidth required />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField placeholder="Phone Number*" variant="outlined" size="small" fullWidth required />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField placeholder="Password*" variant="outlined" size="small" fullWidth required />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField placeholder="Vintage*" variant="outlined" size="small" fullWidth required />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField placeholder="Boutique Name*" variant="outlined" size="small" fullWidth required />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField placeholder="Pan card no*" variant="outlined" size="small" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField placeholder="GST no*" variant="outlined" size="small" fullWidth required />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField placeholder="Vat no*" variant="outlined" size="small" fullWidth required />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField placeholder="Adhaar no*" variant="outlined" size="small" fullWidth required />
                        </Grid>

                    </Grid>

                    <Grid style={{ display: "flex", justifyContent: "center", marginTop:"43px"}}>
                        <Button>Register as a Vendor</Button>
                    </Grid>

                </Grid>

            </Grid>

        </div>
    );
}
