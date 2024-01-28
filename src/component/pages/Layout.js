import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

function Layout() {
  return (
    <div>
      <CssBaseline/>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout
