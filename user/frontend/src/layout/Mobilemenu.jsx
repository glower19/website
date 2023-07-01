import React, { useContext, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ThingsContext from '../context/context';
import { useNavigate } from 'react-router-dom';
import { SiderIcon, SiderIconGray } from '../components/SiderIcons';
const Mobilemenu = ({ selectCategory, items }) => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false)
    const itemsArr = [...items]
    itemsArr.pop()
    // const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setOpen(open => !open)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='mobile-sider-menu'>

            <div className='mobile-sider-menu-button'>
                <Button
                className='trigger-btn'
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={(e) => {
                        console.log('click')
                        handleClick(e)
                    }}
                >
                    <SiderIconGray />
                </Button>
                {open ? null :

                    itemsArr.map((it) => {
                        if (selectCategory == it.key) {
                            return (
                                <a className='mobile-menu-item selected' href={`#${it.key}`}>
                                    {it.icon}
                                </a>
                            )
                        } else {
                            return (
                                <a className='mobile-menu-item' href={`#${it.key}`}>
                                    {it.icon}
                                </a>
                            )
                        }
                    })

                }

            </div>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Button
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <SiderIcon /> <div className='sider-icon-name'>Название</div>
                </Button>
                {items.map((it) => {
                    if (selectCategory == it.key) {
                        return (
                            <a className='nav-links' href={`#${it.key}`}>
                                <MenuItem onClick={() => {
                                    setOpen(false)
                                }} key={it.key}>
                                    <div className='mr20 selected'>
                                        {it.icon}
                                    </div>
                                    <div className='font-selected'>
                                        {it.label}
                                    </div>
                                </MenuItem>
                            </a>
                        )
                    }
                    return (
                        <a className='nav-links' href={`#${it.key}`}>
                            <MenuItem onClick={() => {
                                setOpen(false)
                            }} key={it.key}>
                                <div className='mr20 '>
                                    {it.icon}
                                </div>
                                <div>
                                    {it.label}
                                </div>
                            </MenuItem>
                        </a>
                    )
                })}
            </Menu>
        </div >
    );
};

export default Mobilemenu;