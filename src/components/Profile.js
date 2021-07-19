import React from 'react';
import Sider from "./profile_include/Sider"
import Avartar from "../img/profile.jpg"
import TabPanel from "./profile_include/TabPanel.js"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

export default function ClippedDrawer() {

  return (
    <div>
        <div className="flex">
            <div className="flex-none">
                    <Sider />
            </div>
            <div className='flex-grow bg-gray-100'>

                <div className="mt-8 m-auto w-10/12 h-44 bg-white  rounded-2xl relative border-2 border-gray-300 shadow-lg">
                    <div className="absolute -bottom-16 left-8">
                        <img src={Avartar} width="120" height="120" alt="avatar" className="rounded-full border-2 border-gray-300 shadow-lg" />
                    </div>
                    <div className="absolute bottom-4 right-4 ">
                        <button className="border-2 w-16 h-8 rounded-xl shadow-xl focus:outline-none">
                            <DeviceHubIcon style={{width:"20px", height:"20px", marginBottom:"3px"}}/>
                        </button>
                    </div>
                    <div className="absolute bottom-4 left-40">
                        <button className="border-2 w-auto p-1 rounded-xl shadow-xl focus:outline-none text-lg">
                            Please connect wallet
                        </button>
                    </div>
                    <div className="absolute bg-gray-300 rounded-xl top-4 right-4">
                        <button className="w-auto p-1 rounded-xl shadow-xl focus:outline-none text-md text-white font-bold">
                            <CameraAltIcon style={{color:"white", paddingRight:"5px"}}/>
                            <sapn>Edit</sapn>
                        </button>
                    </div>
                </div>

                <div className="mt-8 ml-24 mt-20 flex">
                    <TabPanel />
                    <div className="relative m-auto inline-block w-5/12 h-44 bg-white  rounded-2xl border-2 border-gray-200 shadow-lg">
                        <div className="absolute top-4 right-4"><button className="border-2 w-8 rounded-md shadow-lg focus:outline-none"><ArrowForwardIosIcon style={{width:"15px", height:"15px", marginBottom:"3px"}}/></button></div>
                    </div>
                </div>
                <div className="mt-8 ml-24 mt-20 flex">
                    <div className="relative inline-block w-3/12 h-44 bg-white  rounded-2xl border-2 border-gray-200 shadow-lg">
                        <div className="absolute top-4 right-4"><button className="border-2 w-8 rounded-md shadow-lg focus:outline-none"><ArrowForwardIosIcon style={{width:"15px", height:"15px", marginBottom:"3px"}}/></button></div>
                        <p className="font-bold text-xl ml-4 mt-4">My Orders</p>
                    </div>
                    <div className="relative m-auto inline-block w-3/12 h-44 bg-white  rounded-2xl border-2 border-gray-200 shadow-lg">
                        <div className="absolute top-4 right-4"><button className="border-2 w-8 rounded-md shadow-lg focus:outline-none"><ArrowForwardIosIcon style={{width:"15px", height:"15px", marginBottom:"3px"}}/></button></div>
                        <p className="font-bold text-xl ml-4 mt-4">Transaction History</p>
                    </div>
                    <div className="relative mr-auto inline-block w-3/12 h-44 bg-white  rounded-2xl border-2 border-gray-200 shadow-lg">
                        <div className="absolute top-4 right-4"><button className="border-2 w-8 rounded-md shadow-lg focus:outline-none"><ArrowForwardIosIcon style={{width:"15px", height:"15px", marginBottom:"3px"}}/></button></div>
                        <p className="font-bold text-xl ml-4 mt-4">My Myssage</p>
                    </div>
                </div>
            </div>

        </div>
        {/* <div>
        <Footer />
        </div> */}
    
          
         
    </div>
  );
}
