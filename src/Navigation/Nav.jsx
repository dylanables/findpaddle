import { FaTableTennisPaddleBall } from "react-icons/fa6";
import './Nav.css';

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Badge from '@mui/material/Badge';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SvgIcon from '@mui/material/SvgIcon';

import { Outlet, Link } from "react-router-dom";

import { addLike } from '../redux/likedRedux';
import { useDispatch } from 'react-redux';
import Liked from "../components/Liked/Liked";
import { useSelector } from "react-redux";


const pages = [
  {text: 'Advanced Search', href: '/search'}, 
  {text: 'Recommendation Quiz', href: '/quiz'}, 
  {text: 'Find Similar', href: '/similar'},
];


//const pages = ["search", "quiz", "similar"];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [openLikes, setOpenLikes] = useState(false);

  const numLikes = useSelector(state=>state.liked.quantity);
  const likes = useSelector(state=>state.liked);

  const dispatch = useDispatch();

  useEffect(() => {
    const data = window.localStorage.getItem('LIKED_PADDLES')
    //JSON.parse(data)?.paddles.map((paddle)=>{
    //  dispatch(addLike(paddle))
    //})
  }, [])

  useEffect(() => {
    window.localStorage.setItem('LIKED_PADDLES', JSON.stringify(likes))
  }, [likes])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" style={{ background: '#000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to='/'>
            <SvgIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} className="logo-icon">
              <svg width="348" height="726" viewBox="0 0 348 726" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3.5" y="467.5" width="464" height="341" rx="93.5" transform="rotate(-90 3.5 467.5)" stroke="yellow" strokeWidth="7"/>
              <path d="M73 464C83.2222 468.228 119 485.5 142 529" stroke="yellow" strokeWidth="7"/>
              <path d="M275 464C264.778 468.228 229 485.5 206 529" stroke="yellow" strokeWidth="7"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M196.721 669.528L196.721 565L149.721 565L149.721 668.282L149.721 668.282L149.721 677.348L149.639 677.794C149.634 677.824 149.629 677.854 149.627 677.885L145.98 717.909C145.927 718.495 146.388 719 146.976 719L200.288 719C200.885 719 201.348 718.482 201.282 717.889L196.832 677.909C196.829 677.884 196.825 677.858 196.82 677.833L196.721 677.311L196.721 669.528ZM142.721 676.521L142.721 669.528L142.721 565L142.721 558L149.721 558L196.721 558L203.721 558L203.721 565L203.721 669.528L203.721 676.523L203.721 676.528L203.698 676.528C203.706 676.571 203.714 676.615 203.721 676.658C203.749 676.816 203.771 676.975 203.789 677.135L204.501 683.528L208.239 717.115C208.767 721.854 205.057 726 200.288 726L146.976 726C142.271 726 138.582 721.96 139.009 717.274L142.084 683.528L142.656 677.25C142.672 677.073 142.694 676.897 142.721 676.722C142.732 676.657 142.743 676.592 142.755 676.528L142.721 676.528L142.721 676.521Z" fill="yellow"/>
              <rect x="3.5" y="467.5" width="464" height="341" rx="93.5" transform="rotate(-90 3.5 467.5)" fill="yellow" stroke="yellow" strokeWidth="7"/>
              <path d="M73 464C83.2222 468.228 119 485.5 142 529" stroke="yellow" strokeWidth="7"/>
              <path d="M275 464C264.778 468.228 229 485.5 206 529" stroke="yellow" strokeWidth="7"/>
              <rect x="136.5" y="558.5" width="32" height="73" rx="3.5" transform="rotate(-90 136.5 558.5)" fill="yellow" stroke="yellow" strokeWidth="7"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M196.721 669.528L196.721 565L149.721 565L149.721 668.282L149.721 668.282L149.721 677.348L149.639 677.794C149.634 677.824 149.629 677.854 149.627 677.885L145.98 717.909C145.927 718.495 146.388 719 146.976 719L200.288 719C200.885 719 201.348 718.482 201.282 717.889L196.832 677.909C196.829 677.884 196.825 677.858 196.82 677.833L196.721 677.311L196.721 669.528ZM142.721 676.521L142.721 669.528L142.721 565L142.721 558L149.721 558L196.721 558L203.721 558L203.721 565L203.721 669.528L203.721 676.523L203.721 676.528L203.698 676.528C203.706 676.571 203.714 676.615 203.721 676.658C203.749 676.816 203.771 676.975 203.789 677.135L204.501 683.528L208.239 717.115C208.767 721.854 205.057 726 200.288 726L146.976 726C142.271 726 138.582 721.96 139.009 717.274L142.084 683.528L142.656 677.25C142.672 677.073 142.694 676.897 142.721 676.722C142.732 676.657 142.743 676.592 142.755 676.528L142.721 676.528L142.721 676.521Z" fill="yellow"/>
              <path d="M143.5 529C141.1 512.2 102.833 479 84 464.5L261.5 467.5C241.9 481.5 213 514.333 201 529L200 677.5L205.5 718L202.5 722L146.5 723L143.5 719L147.5 679.5C147.167 636.333 145.9 545.8 143.5 529Z" fill="yellow"/>
              </svg>
            </SvgIcon>
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to='/' className="logo-text"> FIND PADDLE</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                  <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                    <Link to={page.href} className='nav-link-black'>
                      <Typography textAlign="center">{page.text}</Typography>
                    </Link>
                  </MenuItem>
              ))}
            </Menu>
          </Box>

          <Link to='/'>
            <SvgIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} className="logo-icon">
            <svg width="348" height="726" viewBox="0 0 348 726" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3.5" y="467.5" width="464" height="341" rx="93.5" transform="rotate(-90 3.5 467.5)" stroke="yellow" strokeWidth="7"/>
            <path d="M73 464C83.2222 468.228 119 485.5 142 529" stroke="yellow" strokeWidth="7"/>
            <path d="M275 464C264.778 468.228 229 485.5 206 529" stroke="yellow" strokeWidth="7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M196.721 669.528L196.721 565L149.721 565L149.721 668.282L149.721 668.282L149.721 677.348L149.639 677.794C149.634 677.824 149.629 677.854 149.627 677.885L145.98 717.909C145.927 718.495 146.388 719 146.976 719L200.288 719C200.885 719 201.348 718.482 201.282 717.889L196.832 677.909C196.829 677.884 196.825 677.858 196.82 677.833L196.721 677.311L196.721 669.528ZM142.721 676.521L142.721 669.528L142.721 565L142.721 558L149.721 558L196.721 558L203.721 558L203.721 565L203.721 669.528L203.721 676.523L203.721 676.528L203.698 676.528C203.706 676.571 203.714 676.615 203.721 676.658C203.749 676.816 203.771 676.975 203.789 677.135L204.501 683.528L208.239 717.115C208.767 721.854 205.057 726 200.288 726L146.976 726C142.271 726 138.582 721.96 139.009 717.274L142.084 683.528L142.656 677.25C142.672 677.073 142.694 676.897 142.721 676.722C142.732 676.657 142.743 676.592 142.755 676.528L142.721 676.528L142.721 676.521Z" fill="yellow"/>
            <rect x="3.5" y="467.5" width="464" height="341" rx="93.5" transform="rotate(-90 3.5 467.5)" fill="yellow" stroke="yellow" strokeWidth="7"/>
            <path d="M73 464C83.2222 468.228 119 485.5 142 529" stroke="yellow" strokeWidth="7"/>
            <path d="M275 464C264.778 468.228 229 485.5 206 529" stroke="yellow" strokeWidth="7"/>
            <rect x="136.5" y="558.5" width="32" height="73" rx="3.5" transform="rotate(-90 136.5 558.5)" fill="yellow" stroke="yellow" strokeWidth="7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M196.721 669.528L196.721 565L149.721 565L149.721 668.282L149.721 668.282L149.721 677.348L149.639 677.794C149.634 677.824 149.629 677.854 149.627 677.885L145.98 717.909C145.927 718.495 146.388 719 146.976 719L200.288 719C200.885 719 201.348 718.482 201.282 717.889L196.832 677.909C196.829 677.884 196.825 677.858 196.82 677.833L196.721 677.311L196.721 669.528ZM142.721 676.521L142.721 669.528L142.721 565L142.721 558L149.721 558L196.721 558L203.721 558L203.721 565L203.721 669.528L203.721 676.523L203.721 676.528L203.698 676.528C203.706 676.571 203.714 676.615 203.721 676.658C203.749 676.816 203.771 676.975 203.789 677.135L204.501 683.528L208.239 717.115C208.767 721.854 205.057 726 200.288 726L146.976 726C142.271 726 138.582 721.96 139.009 717.274L142.084 683.528L142.656 677.25C142.672 677.073 142.694 676.897 142.721 676.722C142.732 676.657 142.743 676.592 142.755 676.528L142.721 676.528L142.721 676.521Z" fill="yellow"/>
            <path d="M143.5 529C141.1 512.2 102.833 479 84 464.5L261.5 467.5C241.9 481.5 213 514.333 201 529L200 677.5L205.5 718L202.5 722L146.5 723L143.5 719L147.5 679.5C147.167 636.333 145.9 545.8 143.5 529Z" fill="yellow"/>
            </svg>
            </SvgIcon>
          </Link>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to='/' className="logo-text"> FIND PADDLE</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={page.href} className='nav-link-white'>{page.text}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Liked Paddles">
            <MenuItem onClick={()=>setOpenLikes(!openLikes)}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={numLikes} color="error">
                  <FavoriteBorderOutlinedIcon />
                </Badge>
              </IconButton>
            </MenuItem>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      {openLikes && <Liked/>}
    </AppBar>
  );
}

export default Nav