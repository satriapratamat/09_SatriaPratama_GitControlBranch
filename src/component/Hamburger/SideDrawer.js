import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideDrawer = [
    {
        title: 'HOME',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'ABOUT',
        path: '/about/about-app',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
];

export default SideDrawer;