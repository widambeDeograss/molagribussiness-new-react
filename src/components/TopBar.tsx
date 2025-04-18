
import React, { useEffect, useState } from 'react';
//@ts-ignore 
import { Layout, Menu, Dropdown, Avatar, Typography, Space, Badge, Modal, Button, Image } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
//@ts-ignore 
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const { Header } = Layout;

const TopBar = () => {
  const [IsNavBarOpen, setIsNavBarOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavBarOpen((cur) => !cur);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = useLocation();
  const router = useNavigate();

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const handler = (e: any) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handler);
    return () => darkModeMediaQuery.removeEventListener('change', handler);
  }, []);

  const menus = [
    {
      label: 'Home',
      path: "/home"
    },
    {
      label: 'About Us',
      path: "/aboutus"
    },
    {
      label: 'Products & Services',
      path: "/products"
    },
    {
      label: 'News & Blog',
      path: "/news"
    },
    {
      label: 'Contact Us',
      path: "/contactus"
    },
  ]
  return (
    <Header className='bg-white/70   px-8  h-24 py-3 sticky top-0  dark:bg-black/10'
      style={{ zIndex: 999 }}
    >
      <div className='container mx-auto '>
        <div className='flex flex-row justify-between items-center '>
          <div className='cursor-pointer hover:scale-105 ' onClick={() =>  router('/')}> 
            <Image src='/mol logo.png' alt='logo mol' width={100} height={70} preview={false} />
          </div>
          <div>
            <ul className='hidden lg:flex justify-between items-center gap-10 sm:hidden text-xs font-medium'>
              {menus.map((link) => {
                return (<li className={pathname.pathname === link.path ? 'text-green-900 font-bold' : "" + 'cursor-pointer hover:bg-[#023F3A]  hover:text-white dark:text-white  p-2'} key={link.path} onClick={() => {
                  router(link.path)
                }}>
                  {link.label}
                </li>)
              })}
            </ul>
            <span
              // size="sm"
              color="blue-gray"
              // variant="text"
              onClick={toggleIsNavOpen}
              className="ml-auto text-center lg:hidden hover:bg-gray-300 rounded-lg cursor-pointer flex sm:flex"
            >
              {!IsNavBarOpen && <MenuOutlined className='dark:text-white' />}
            </span>
          </div>
        </div>
      </div>

      <Modal
        title="Menu"
        open={IsNavBarOpen}
        onCancel={toggleIsNavOpen}
        footer={null}
        styles={{
          content: {
            backgroundColor: isDarkMode ? "black" : "white", color: isDarkMode ? "white" : "black"
          }, // turns the Modal red
        }}
      >
        <ul className='flex flex-col gap-4'>
          {menus.map((link) => {
            return (<li
              key={link.path} className={pathname.pathname === link.path ? 'text-green-900 font-bold text-center' : "" + 'block text-center p-2 cursor-pointer'} onClick={
                () => {
                  router(link.path);
                  setIsNavBarOpen(false);

                }
              }
            >
              {link.label}
            </li>)
          })}
        </ul>
      </Modal>
    </Header>
  );
};

export default TopBar;
