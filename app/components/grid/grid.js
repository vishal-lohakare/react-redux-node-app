import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {GridList, GridListTile} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'

const styles = {
    paper: {
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

const useStyles = makeStyles(styles)
const classes = useStyles()

class GridEmployee extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return <div>
        <Grid container spacing={16}>
            <Grid item xs={3} sm={6} md={4}>
                <Paper className={classes.paper}>
                    <Typography>3 of 4</Typography>
                </Paper>
            </Grid>
            <Grid item xs={3} sm={6} md={4}>
                <Paper className={classes.paper}>
                    <Typography>3 of 4</Typography>
                </Paper>
            </Grid>
            <Grid item xs={3} sm={6} md={4}>
                <Paper className={classes.paper}>
                    <Typography>3 of 4</Typography>
                </Paper>
            </Grid>
            <Grid item xs={3} sm={6} md={12}>
                <Paper className={classes.paper}>
                    <Typography>3 of 4</Typography>
                </Paper>
            </Grid>
        </Grid>
        </div>
    }

}
export default GridEmployee;