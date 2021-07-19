import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import leftimg from '../../img/exists_nft.svg';
import rightimg from '../../img/create_nft.svg';


export default function MainItemModal({open, handleClose}) {

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="true" maxWidth="lg" className="text-center rounded-2xl">
        <DialogTitle id="form-dialog-title" ><h1 className="font-bold text-12 text-blue-500 mx-auto px-8">DOES YOUR ITEM ALREADY EXIST?</h1></DialogTitle>
        <DialogContent>
            <DialogContentText>
            Is the item live on the blockchain or is it a new item you want to make?
            </DialogContentText>
        </DialogContent>
        <div className="grid grid-cols-4 gap-4 p-4 py-8 rounded-2xl">
            <div className="col-span-2 rounded-xl shadow-xl">
                <button className="focus:outline-none">
                  <a href="/">
                    <img src={leftimg} width="100px" height="100px" className="mx-auto"/>
                    <p>The NFT is already in my wallet</p>
                  </a>
                </button>

            </div>
            <div className="col-span-2 rounded-xl shadow-xl focus:outline-none">
                <button className="focus:outline-none">
                  <a href="/gasless">
                    <img src={rightimg} width="100px" height="100px" className="mx-auto"/>
                    <p>Create a new item</p>
                  </a>
                </button>
                
            </div>
        </div>
      </Dialog>
    </div>
  );
}
