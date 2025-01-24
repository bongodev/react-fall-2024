import { Outlet } from 'react-router';
import { Sidebar } from '../components';

export const RootLayout = () => {
  return (
    <div className="w-full flex gap-4 px-2 py-2">
      <div className="w-2/12 border border-gray-500 px-2 py-2">
        <Sidebar />
      </div>
      <div className="w-10/12 border border-gray-500">
        <Outlet />
      </div>
    </div>
  );
};
