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


var dataInput = {
    paddingTop:"10px",
    fontSize:"30px",

}


export default function Signup({open, handleClose}) {
//   const [open, setOpen] = React.useState(true);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

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
                <p style={{paddingLeft:"70%", paddingTop:"30px"}}>Aleady a member? <a href="#" style={{color:"red"}} >SIGN IN</a></p>
                <DialogTitle id="form-dialog-title" ><h1 style={{fontWeight:"bold", fontSize:"25px"}}>Create an account!</h1></DialogTitle>
                <DialogContent>
                <DialogContentText>
                Please input Username, Email and Password
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
                    label="Email"
                    type="email"
                    fullWidth
                    style={dataInput}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Confirm Email"
                    type="email"
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

                <DialogActions>
                <Button onClick={handleClose} variant="contained" color="primary">
                    SignUp
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
