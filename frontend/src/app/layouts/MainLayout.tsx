import { Outlet } from 'react-router-dom'
import Header from '../../widgets/Header'
import { useState } from 'react';

const MainLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
    <Header/>
    <Outlet context={{ isModalOpen, closeModal }}/>
    </>
  )
}

export default MainLayout