import {
	MdPayment,
	MdOutlineDeliveryDining,
	MdStorefront,
	MdOutlineHealthAndSafety,
	MdPersonOutline,
	MdLogout,
	MdOutlineAnalytics
} from 'react-icons/md';
import { HiOutlineUsers } from 'react-icons/hi';
import { TbReport, TbNotification, TbLayoutDashboard } from 'react-icons/tb';
import { FiSettings } from 'react-icons/fi';

const Sidebar = () => {
	return (
		<div className='z-10 min-h-screen w-1/6 min-w-max bg-white'>
			<div className='flex h-20 items-center justify-center'>
				<span className='text-xl font-bold text-indigo-500'>Ad.min</span>
			</div>
			<div className='h-full shadow-xl shadow-slate-300/40'>
				<div>
					<ul className='sidebar-nav flex flex-col items-center justify-center space-y-5'>
						<div>
							<h3>Menu</h3>
							<li>
								<TbLayoutDashboard className='icon icon-stroke' />
								<span>Dashboard</span>
							</li>
							<li>
								<MdOutlineAnalytics className='icon icon-fill' />
								<span>Stats</span>
							</li>
							<li>
								<MdPayment className='icon icon-fill' />
								<span>Orders</span>
							</li>
						</div>
						<div>
							<h3>Management</h3>
							<li>
								<HiOutlineUsers className='icon icon-stroke' />
								<span>Users</span>
							</li>
							<li>
								<MdStorefront className='icon icon-fill' />
								<span>Products</span>
							</li>
							<li>
								<MdOutlineDeliveryDining className='icon icon-fill' />
								<span>Delivery</span>
							</li>
							<li>
								<TbReport className='icon icon-stroke' />
								<span>Logs</span>
							</li>
						</div>
						<div>
							<h3>Service</h3>
							<li>
								<MdOutlineHealthAndSafety className='icon icon-fill' />
								<span>System Health</span>
							</li>
						</div>
						<div>
							<h3>User</h3>
							<li>
								<MdPersonOutline className='icon icon-fill' />
								<span>Profile</span>
							</li>
							<li>
								<FiSettings className='icon icon-stroke' />
								<span>Settings</span>
							</li>
							<li>
								<TbNotification className='icon icon-stroke' />
								<span>Notifications</span>
							</li>
							<li>
								<MdLogout className='icon icon-fill' />
								<span>Logout</span>
							</li>
						</div>
					</ul>
				</div>
			</div>
			<div></div>
		</div>
	);
};
export default Sidebar;
