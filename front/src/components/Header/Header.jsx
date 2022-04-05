import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOCALES } from "../../i18n/locales";
import { getLogoutUser } from "../../redux/actions/userAC/userAC";
import "./Header.css";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
const languages = [
  { name: "English", code: LOCALES.ENGLISH },
  { name: "Русский", code: LOCALES.RUSSIAN },
  { name: "Français", code: LOCALES.FRENCH },
  { name: "Deutsche", code: LOCALES.GERMAN },
];

const options = [
  { name: "About me", link: "about" },
  { name: "Yoga", link: "yoga" },
  { name: "Practices", link: "practices" },
  { name: "Inspiration", link: "inspiration" },
  { name: "Feedback", link: "feedback" },
];

const ITEM_HEIGHT = 48;

export default function Header({ currentLocale, handleChange }) {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event) => {
    const { option } = event.currentTarget.dataset;
    console.log(option);
    setAnchorEl(null);
    handleCloseMenu();
  };

  const handleLogoutClick = () => {
    dispatch(getLogoutUser());
    navigate('/home')
  };
  
  return (
    <>
      <div className="headerMenu">
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <ViewModuleIcon fontSize="large" color="primary"/>
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          onClick={handleCloseMenu}
          anchorEl={anchorEl}
          open={open}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option.name}
              data-option={option}
              selected={option === "Pyxis"}
              className="headerNavIcons"
              onClick={handleMenuItemClick}
            >
              <Link to={`/${option.link}`}>
                <FormattedMessage id={"section_" + option.link} />
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div className="navigIcons">
        <Link to={"/home"}>
          <LightTooltip title="Home">
            <HomeIcon fontSize="large" className="headerNavIcons" color="primary"/>
          </LightTooltip>
        </Link>
        {!user.firstname && (
          <Link to={"/registration"}>
            <LightTooltip title="Registration">
              <AppRegistrationIcon
                fontSize="large"
                className="headerNavIcons"
              />
            </LightTooltip>
          </Link>
        )}
        {!user.firstname ? (
          <Link to={"/login"}>
            <LightTooltip title="Login">
              <LoginIcon fontSize="large" className="headerNavIcons" color="primary"/>
            </LightTooltip>
          </Link>
        ) : (
          <Link to={"/cabinet"}>
            <LightTooltip title="Personal Cabinet">
              <PersonIcon className="headerNavIcons" fontSize="large" color="primary"/>
            </LightTooltip>
          </Link>
        )}
        {user.firstname && (
          <LightTooltip title="Logout">
            <LogoutIcon
              fontSize="large"
              onClick={handleLogoutClick}
              className="headerNavIcons"
            />
          </LightTooltip>
        )}
        <Link to={"/book"}>
          <LightTooltip title="Booking">
            <BookmarkAddedIcon fontSize="large" className="headerNavIcons" color="primary"/>
          </LightTooltip>
        </Link>
        <Box sx={{ minWidth: 100 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currentLocale}
              onChange={handleChange}
            >
              {languages.map(({ name, code }) => (
                <MenuItem key={code} value={code}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
    </>
  );
}

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
}));
