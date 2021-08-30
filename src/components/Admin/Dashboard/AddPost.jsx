import { Paper, TextField } from '@material-ui/core'
import React from 'react'

export default function AddPost() {
    return (
        <div>
            <Paper elevation={0} />
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
            <Paper />
        </div>
    )
}
