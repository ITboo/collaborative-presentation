import { Outlet } from 'react-router-dom'
import Header from '../../widgets/Header'

const MainLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default MainLayout