import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import SvgIcon from "@mui/material/SvgIcon";
import Sticky from "sticky-js";
import Logo from "./Svg";


// function Logo(props) {
//   return (
//     <SvgIcon children={{width: '100%'}} fontSize='large' sx={{transform: "scale(2.5)", width:"400"}} viewBox='0 -30 70 70' {...props}>
//       <path
//         d="M23.446 15.015v-12.8c0-.184.123-.369.37-.369h1.169c.184 0 .369.123.369.37v12.86c0 .186-.123.37-.37.37h-1.169c-.184-.061-.369-.184-.369-.43zm4.43-11.63V2.154c0-.185.124-.37.37-.37h1.292c.185 0 .37.124.37.37v1.23c0 .185-.123.37-.37.37h-1.292c-.246 0-.37-.123-.37-.37zm.062 11.63V5.908c0-.185.185-.37.37-.37h1.107c.185 0 .37.124.37.37v9.169c0 .185-.123.37-.37.37h-1.107c-.185-.062-.37-.185-.37-.432zm4.37 0V5.908c0-.185.123-.37.369-.37h1.108c.184 0 .369.124.369.37v.615h.061c.37-.492.985-.923 1.908-1.17h.062c1.415-.184 2.523.124 3.261.924.616.677.985 1.538.985 2.707v6.092c0 .184-.123.37-.37.37h-1.107c-.185 0-.37-.123-.37-.37v-5.6c0-1.662-.677-2.525-2.092-2.525-.677 0-1.292.185-1.723.616-.43.43-.615.985-.615 1.661v5.846c0 .185-.123.37-.37.37h-1.108c-.245-.06-.368-.182-.368-.429zm10.277 0v-12.8c0-.184.123-.369.369-.369h1.108c.184 0 .369.123.369.37v7.753h.061l3.877-4.246c0-.123.123-.185.185-.185h1.415c.308 0 .431.37.246.554l-2.83 3.2a.297.297 0 0 0 0 .431l3.446 5.17c.123.245 0 .553-.308.553h-1.23a.48.48 0 0 1-.308-.123l-3.139-4.677h-.061l-1.293 1.416c-.061.062-.061.123-.061.246v2.83c0 .185-.123.37-.37.37h-1.107c-.185-.123-.37-.246-.37-.493zm10.523-2.707v-5.17H52c-.185 0-.37-.123-.37-.369v-.861c.062-.185.185-.37.37-.37h1.17v-2.03c0-.185.122-.37.37-.37h1.045c.185 0 .37.124.37.37v2.03h2.092c.184 0 .369.124.369.37v.861c0 .185-.122.37-.37.37h-2.092v4.984c0 .553.062.923.247 1.169.184.246.491.37.984.37h.43c.185 0 .37.123.37.369v1.046c0 .185-.123.37-.37.37h-.553c-1.046 0-1.784-.246-2.277-.739-.431-.616-.677-1.354-.677-2.4zm6.277 2.707V5.908c0-.185.123-.37.307-.37h1.046c.185 0 .37.124.37.37v.738h.061c.185-.37.493-.677.861-.923.37-.246.739-.308 1.17-.308.184 0 .429 0 .615.062.185.061.247.246.247.37l-.185 1.107c-.062.184-.246.308-.43.246-.123 0-.246-.062-.431-.062-1.169 0-1.784.8-1.784 2.4v5.416c0 .184-.123.37-.37.37h-1.17c-.184.06-.307-.062-.307-.309zm12.984-2.83l.8.615c.123.123.186.308.063.43-.37.555-.86 1.047-1.415 1.478-.679.43-1.539.677-2.462.677-1.354 0-2.461-.493-3.323-1.416-.862-.923-1.292-2.216-1.292-3.754 0-1.6.43-2.832 1.292-3.755.862-.923 1.908-1.415 3.262-1.415 1.293 0 2.4.492 3.2 1.415.8.923 1.23 2.216 1.23 3.816v.186c0 .184-.122.369-.369.369h-6.4c-.185 0-.37.185-.37.37.062.677.309 1.293.678 1.784.493.553 1.108.861 1.969.861.43 0 .8-.061 1.108-.184.307-.124.615-.308.8-.493.246-.246.37-.43.492-.554.063-.061.124-.184.186-.246.12-.246.367-.307.551-.184zm-5.784-2.893h5.292c-.062-.738-.246-1.415-.677-1.907-.43-.554-1.109-.8-1.97-.8-.8 0-1.476.307-1.908.861-.491.554-.737 1.17-.737 1.846zm16.492 2.893l.8.615c.123.123.185.308.062.43-.37.555-.86 1.047-1.416 1.478-.677.43-1.538.677-2.461.677-1.354 0-2.462-.493-3.322-1.416-.862-.923-1.294-2.216-1.294-3.754 0-1.6.43-2.832 1.294-3.755.86-.923 1.907-1.415 3.261-1.415 1.293 0 2.4.492 3.2 1.415.8.923 1.231 2.216 1.231 3.816v.186c0 .184-.123.369-.37.369h-6.4a.397.397 0 0 0-.37.37c.062.677.307 1.293.677 1.784.493.553 1.108.861 1.968.861.432 0 .801-.061 1.11-.184.307-.124.615-.308.8-.493.244-.246.368-.43.491-.554.063-.061.124-.184.185-.246.123-.246.37-.307.554-.184zm-5.785-2.893h5.294c-.063-.738-.246-1.415-.678-1.907-.43-.554-1.108-.8-1.969-.8-.8 0-1.476.307-1.908.861-.493.554-.739 1.17-.739 1.846z"
//         className="sc-kfzBvY uQQrK"
//       ></path>
//       <path
//         d="M7.385.43a.81.81 0 0 0-1.416 0l-5.292 9.6c-.246.493.123 1.047.677 1.047h3.57v3.63c0 .37.307.678.676.678h2.092c.37 0 .677-.308.677-.677v-3.631h-.984a.8.8 0 0 1-.8-.677c0-.123 0-.246.061-.37L9.6 4.676 7.385.43z"
//         className="sc-fKFxtB kuwPmt"
//       ></path>
//       <path
//         d="M12.062.43a.81.81 0 0 1 1.415 0l5.292 9.6c.246.493-.123 1.047-.677 1.047h-3.507v3.63c0 .37-.308.678-.678.678h-2.215a.683.683 0 0 1-.677-.677v-3.631H12a.8.8 0 0 0 .8-.677c0-.123 0-.246-.062-.37L9.785 4.677 12.062.43z"
//         className="sc-bBXrwG bmbhoR"
//       ></path>
//     </SvgIcon>
//   );
// }

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  var sticky = new Sticky('.selector');

  return (
    <AppBar className={sticky} sx={{ color: '#000', backgroundColor: '#fff', zIndex: 100 }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Logo />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Logo />
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#000", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
