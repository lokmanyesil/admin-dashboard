import React from 'react';
import Acordions from '../../scenes/Acordions';
import MyChart from '../../scenes/MyChart';
import DailyTasks  from '../../scenes/DailyTasks';

const HomePage = () => {
  return (
		<div className=" overflow-hidden mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
			<div className="mt-4">
				<div>{/* <Dashboard/> */}</div>
				{/* <div className="mt-4">
					<Acordions />
				</div> */}
				<div className="mt-4">
					<MyChart />
				</div>
				<div className="mt-8">
					<DailyTasks />
				</div>
			</div>
		</div>
	);
}

export default HomePage