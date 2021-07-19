import React, { Component } from 'react';
import CheckboxLabels from './browse_include/CheckboxLabels';
import CateCard from './browse_include/CateCrad';
import Pagination from '@material-ui/lab/Pagination';

class Browse extends Component {

  render() {
    return (
        <div className="bg-gray-100  grid grid-cols-12 flex">
            <div className="pl-6 mt-10 col-span-2">
              <CheckboxLabels />
            </div>
            <div className="bg-white col-span-10 m-8 mt-16 p-4 rounded-xl">
              <div className="grid  grid-cols-3 gap-2">
                <div className="col-span-2  md:col-span-1">
                    <CateCard />
                </div>
                <div className="col-span-2  md:col-span-1">
                    <CateCard />
                </div>
                <div className="col-span-2  md:col-span-1">
                    <CateCard />
                </div>
                <div className="col-span-2  md:col-span-1">
                    <CateCard />
                </div>
                <div className="col-span-2  md:col-span-1">
                    <CateCard />
                </div>
                <div className="col-span-2  md:col-span-1">
                    <CateCard />
                </div>
                <div className="col-span-2  md:col-span-1">
                    <CateCard />
                </div>
                <div className="col-span-2  md:col-span-1">
                    <CateCard />
                </div>
                <div className="col-span-2  md:col-span-1">
                    <CateCard />
                </div>
                <div className="col-span-2  md:col-span-1">
                    <CateCard />
                </div>
                <div className="col-span-2  md:col-span-1">
                    <CateCard />
                </div>
                <div className="col-span-2  md:col-span-1">
                    <CateCard />
                </div>
                <div className="col-start-2">
                <Pagination count={3} variant="outlined" shape="rounded" className="" />
                </div>
              </div>
              
              
            </div>
            
        </div>
    );
  }
}

export default Browse;
