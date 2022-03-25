import React from "react";
import Styled from "styled-components";

const StyledContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    
`;

const StyledLogoContainer = Styled.div`
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15em;
    
`;

const StyledListContainer = Styled.div`
display: flex;
width: 600px;
justify-content: space-around;


`;
const StyledList = Styled.ul`
display: flex;
list-style-type: none;
width: 600px;
justify-content: space-around;


`;
const StyledListElement = Styled.li`
color: #ADADAD; /* button text color */
outline: none;
background: transparent;
border: none;
padding: 8px 0px; 
//text-transform: uppercase;
font: bold 16px 'Bitter', sans-serif; /* use google font */
line-height: 2;
position: relative;
display: inline-block;
cursor: pointer;
text-decoration: none; /* remove underline if using A instead of BUTTON tag */
overflow: hidden;
transition: all .5s;
    :hover {
        color: #000;
    }

    :before,
    :after{
        content: '';
        position: absolute;
        left: 0;
        top: 20%;
        right: 0;
        bottom: 0;
        height: 50%;
         background: #E5FE9E ; /* onhover background color */
        z-index: -1;
         transform: translate3D(-100%,0,0); /* move elements above button so they don't appear initially */
        transition: all .2s;
}


    :hover:after{
        transform: translate3D(0,0,0);
        transition: all .5s;
        color: black;
    }
}
`;

export default function NavBar() {
  return (
    <StyledContainer>
      <StyledLogoContainer>SASIYA.656</StyledLogoContainer>
      <StyledListContainer>
        <StyledList>
          <StyledListElement>
            <a>work</a>
          </StyledListElement>
          <StyledListElement>
            <a>about</a>
          </StyledListElement>
          <StyledListElement>
            <a>Linktree</a>
          </StyledListElement>
          <StyledListElement>
            <a>contact</a>
          </StyledListElement>
        </StyledList>
      </StyledListContainer>
    </StyledContainer>
  );
}

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";

// const pages = ["Work", "About", "Linktree", "Contact"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const NavBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
//     null
//   );
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
//     null
//   );

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
//           >
//             SASIYA.656
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
//           >
//             NAT
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default NavBar;
