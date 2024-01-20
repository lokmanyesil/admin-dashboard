import React from 'react';
import Acordions from '../../scenes/Acordions';
import MyChart from '../../scenes/MyChart';
import DailyTasks  from '../../scenes/DailyTasks';

const HomePage = () => {
  return (
    <div className='w-full'>
      <div className='mt-1 sm:flex'>
        <div className='sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>      
          {/* <Dashboard/> */}
            </div>
            <div className='sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5'>
              <div className='mt-5'>
                <Acordions/> 
              </div>
            </div>
            <div className='mt-5'>
          <MyChart/>
        </div>
          <div className='mt-5'>
            <DailyTasks />
          </div>
      </div>
    </div>
  )
}

export default HomePage