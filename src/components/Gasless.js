import React, { Component } from 'react';
import ActiveLastBreadcrumb from './Gasless_include/Breadcrumb.js'
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import Checkbox from '@material-ui/core/Checkbox';
import Textediting from './Gasless_include/Textediting'
import Tooltip from '@material-ui/core/Tooltip';
import Infor from '../img/info.svg'
import NumericInput from 'react-numeric-input';
import { makeStyles } from '@material-ui/core/styles';


import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckboxLabels from './browse_include/CheckboxLabels';
import CateCard from './browse_include/CateCrad';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  
  button: {
    margin: theme.spacing(1),
  },
  customWidth: {
    maxWidth: 200,
    fontSize: 12,
    textAlign:'center',
    backgroundColor:'#1A1A1A'
  },
  noMaxWidth: {
    color: '#1A1A1A',
    
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      height: '5ch'
    },
  },

  
}));
const longText1 = 'This is the name of the listing on mintable - can be the same as the name.';
const longText2 = 'This is the listing subtitle.';
const longText3 = 'This is the images people will see when browsing your NFT. The first image uploaded is the images on the token.';
const longText4 = 'Only the owner of the NFT can access this private file. It is not shown any where publicly';
const longText5 = 'When a buyer purchases this item, they have the rights to use the file commercially.';

export default function Gasless() {
  
 
    const classes = useStyles();

    return (
        <div className="w-full">
          <div>
            <div className="pt-12 ml-8">
              <ActiveLastBreadcrumb/>
            </div>
            <p className="text-2xl font-bold text text-center mt-4">Create and List an item for sale</p>
          </div>
          <Divider />
          <div className="w-full grid grid-cols-12 gap-2 p-8">
            <div className="col-span-10 md:col-start-4 md:col-end-10">
                <p className="">What kind of item are you making?</p>

                <p className="text-lg mb-1">Listing title
                  <Tooltip title={longText1} classes={{ tooltip: classes.customWidth, arrow:classes.noMaxWidth }} className="inline ml-2" placement="right" arrow>
                  <img src={Infor} />
                  </Tooltip>
                </p>
                <Input className="h-8" />
               
                <p className="text-lg mb-1 mt-4">Listing Subtitle
                  <Tooltip title={longText2} classes={{ tooltip: classes.customWidth, arrow:classes.noMaxWidth }} className="inline ml-2" placement="right" arrow>
                  <img src={Infor} />
                  </Tooltip>
                </p>
                <Input className="h-8" />

                <p className="mt-4">Upload item preview images.
                  <Tooltip title={longText3} classes={{ tooltip: classes.customWidth, arrow:classes.noMaxWidth }} className="inline ml-2" placement="right" arrow>
                  <img src={Infor} />
                  </Tooltip>
                </p>
                <p>The <b>first preview image</b> you upload will be displayed on <b>all wallets as the token image!</b><br/> 
                (.GLB files will be displayed in an interactive 3D viewer)</p>
                <div className="w-1/4 bg-gray-100">
                  <Button 
                  //  variant="contained"
                   component="label"
                   className="w-full"
                   >
                    <p className="text-4xl text-blue-500 font-bold mb-2 text-center">+</p>
                    <input
                    type="file"
                    hidden
                  />
                  
                  </Button>
                  <p className="text-lg text-blue-800 font-bold text-center">Uploading...</p>
                  <Divider />
                  <br/>
                  <p className="text-center">(image, videos, <br/> gifts)</p>
                </div>

                <Checkbox
                  // checked="true"
                  // onChange={handleChange}
                  name="checkedA"
                  color="primary"
                  className=""
                />
                <p className="inline text-lg">Attach a private file/unlockable content?</p>
                <Tooltip title={longText4} classes={{ tooltip: classes.customWidth, arrow:classes.noMaxWidth }} className="inline ml-2" placement="right" arrow>
                <img src={Infor} />
                </Tooltip>

                <p className="text-lg">Item description</p>
                <Textediting />
                <Checkbox
                  // checked="true"
                  // onChange={handleChange}
                  name="checkedA"
                  color="primary"
                />
                <p className="text-lg inline">Transfer Copyright when purchased?</p>
                <Tooltip title={longText5} classes={{ tooltip: classes.customWidth, arrow:classes.noMaxWidth }} className="inline ml-2" placement="right" arrow>
                <img src={Infor} />
                </Tooltip>
                <p className="text-2xl font-bold text mb-2 mt-8">Price and type</p>
                <Divider />
                <button class="border-2 border-purple-700 text-purple-700 bg-blue-100 font-bold py-2 px-4 rounded-full focus:outline-none border-purple-700">
                  Fixed
                </button>
                <button class="border-2 border-purple-700 text-purple-700 bg-blue-100 font-bold py-2 px-4 rounded-full focus:outline-none ml-4">
                  Auction
                </button>
                <button class="border-2 border-purple-700 text-purple-700 bg-blue-100 font-bold py-2 px-4 rounded-full focus:outline-none ml-4">
                  Auction with Buy now
                </button>
                <p className="font-bold text-lg mt-8">Fixed price - in USD</p>
                <NumericInput step={0.01} precision={2} value={0.000} className="h-8 w-36" snap/>
                <p className="text-blue-500 mt-4">Price in ETH: 0.000000</p>
                <p>Current ETH price: 1 ETH = $1883.50</p>
                <button className="text-white text-md bg-purple-700 rounded-md p-2 focus:outline-none ">LIST THIS ITEM</button>

            </div>
          </div>
            
        </div>
    );
  
}

