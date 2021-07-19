import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Left from '../../img/left_img.svg';

var forgetLink = {
    color:"red",
    paddingLeft:"20px",
    paddingTop:"30px"
  };

var forgetLink = {
color:"red",
paddingLeft:"20px",
paddingTop:"30px"
};

var dataInput = {
    paddingTop:"20px",
    fontSize:"30px",

}


export default function Login({open, handleClose}) {

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="true" maxWidth="lg">
        <div className="grid grid-cols-3 gap-4 p-4 py-8 rounded-2xl">
            <div className='col-span-1 bg-gray-200 rounded-xl'>
              <p className="p-4 font-bold pt-8">You’re just a step away from buying and <br/> selling digital items to earn some cool cash</p>
              <img className="pt-8" src={Left} width="300" height="300" alt="loginpicture"/>
            </div>
            <div className='col-span-2'>
                <p style={{paddingLeft:"60%", paddingTop:"30px"}}>Don't you have an account? <a href="#" style={{color:"red"}} >SIGN UP</a></p>
                <DialogTitle id="form-dialog-title" ><h1 style={{fontWeight:"bold", fontSize:"25px"}}>Welcome back to the NFT market!</h1></DialogTitle>
                <DialogContent>
                  <DialogContentText>
                  Please input Username and Password
                  </DialogContentText>
                  <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="User name"
                      type="text"
                      fullWidth
                      style={dataInput}
                  />
                  <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Password"
                      type="password"
                      fullWidth
                      style={dataInput}
                  />
                </DialogContent>

                <a href="#" style={forgetLink} >Forget My PassWord</a>

                <DialogActions>
                
                <Button onClick={handleClose} variant="contained" color="primary">
                    Login
                </Button>
                <Button onClick={handleClose} variant="contained" color="secondary">
                    Cancel
                </Button>
                </DialogActions>
            </div>
        </div>
      </Dialog>
    </div>
  );
}
