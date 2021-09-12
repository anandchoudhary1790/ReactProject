import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase'; 
import IconButton from '@material-ui/core/IconButton'; 
import SearchIcon from '@material-ui/icons/Search'; 

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    background: '#404041',
    borderColor: '#404041',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    borderRadius: '6px',
    color: '#fff',
    width: '350px',
    paddingRight: '50px',
  },
  iconButton: {
    border: '1px solid #58595B',
    color: '#58595B',
    position: 'absolute',
    right: '0px',
    top: '0px',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    display: 'flex'
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedSearchInputBase() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}> 
      <InputBase
        className={classes.input} 
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton> 
    </Paper>
  );
}
