import React, { useState, useEffect } from 'react';
import { Typography, Paper, Switch, Button, SvgIcon } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BarChartIcon from '@material-ui/icons/BarChart';

import { useRouter } from 'next/router';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AddBoxIcon from '@material-ui/icons/AddBox';

import Unlock from '../unlock';

import stores from '../../stores';
import { formatAddress } from '../../utils';

import classes from './navigation.module.css';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
function YearnIcon(props) {
  const { color, altColor, className, width, height } = props;
  return (
    <SvgIcon viewBox="0 0 105 37" fill="none" width={width} height={height} className={className}>
      <path d="M8.14 14.88H13.82V9.32L21.78 0H15.56L11.14 5.14L6.8 0H0L8.14 9.28V14.88Z" fill={color} />
      <path d="M22.3366 0V14.88H38.9566V11.16H27.9366V9.12H38.5766V5.5H27.9366V3.64H38.7966V0H22.3366Z" fill={color} />
      <path
        d="M52.9373 8.76H47.9973L50.4373 3.64L52.9373 8.76ZM55.9173 14.88H62.1373L54.3573 0H46.7173L39.3573 14.88H45.1173L46.2573 12.48H54.7573L55.9173 14.88Z"
        fill={color}
      />
      <path
        d="M68.4658 3.62H74.9858C76.2658 3.62 76.7058 4.18 76.7058 4.88V4.9C76.7058 5.62 76.2458 6.18 74.9858 6.18H68.4658V3.62ZM68.4658 9.78H73.9058C76.1458 9.78 76.9258 10.66 76.9258 12.36V14.1C76.9258 14.52 76.9658 14.72 77.1058 14.88H82.9058V14.78C82.7658 14.52 82.6258 14.14 82.6258 13.1V10.9C82.6258 8.98 81.4058 7.78 79.5658 7.36C80.6858 7.1 82.5658 6.2 82.5658 4.04V3.82C82.5658 1.4 80.6458 0 76.3058 0H62.7858V14.88H68.4658V9.78Z"
        fill={color}
      />
      <path d="M84.192 0V14.88H89.832V5.86L99.152 14.88H104.832V0H99.192V8.46L90.552 0H84.192Z" fill={color} />
      <path
        d="M6.9 35.8807V30.1207H5.625V28.9807H6.9V28.0657C6.9 27.3157 7.115 26.7607 7.545 26.4007C7.985 26.0307 8.58 25.8457 9.33 25.8457H10.395V26.9857H9.45C9 26.9857 8.675 27.1007 8.475 27.3307C8.285 27.5507 8.19 27.8857 8.19 28.3357V28.9807H10.395V30.1207H8.19V35.8807H6.9Z"
        fill={color}
      />
      <path d="M20.7081 28.9807V35.8807H19.4181V28.9807H20.7081ZM19.3131 25.8457H20.8131V27.4057H19.3131V25.8457Z" fill={color} />
      <path
        d="M34.2531 28.7857C34.7231 28.7857 35.1431 28.8607 35.5131 29.0107C35.8931 29.1607 36.2081 29.3707 36.4581 29.6407C36.7181 29.9107 36.9131 30.2307 37.0431 30.6007C37.1831 30.9707 37.2531 31.3757 37.2531 31.8157V35.8807H35.9631V31.9207C35.9631 31.3507 35.8131 30.8857 35.5131 30.5257C35.2131 30.1657 34.7481 29.9857 34.1181 29.9857C33.8381 29.9857 33.5631 30.0407 33.2931 30.1507C33.0331 30.2507 32.8031 30.4007 32.6031 30.6007C32.4031 30.7907 32.2381 31.0307 32.1081 31.3207C31.9881 31.6107 31.9281 31.9357 31.9281 32.2957V35.8807H30.6381V28.9807H31.9281V29.7307C32.1581 29.4507 32.4681 29.2257 32.8581 29.0557C33.2481 28.8757 33.7131 28.7857 34.2531 28.7857Z"
        fill={color}
      />
      <path
        d="M49.7604 28.7857C50.2504 28.7857 50.6954 28.8457 51.0954 28.9657C51.5054 29.0857 51.8554 29.2607 52.1454 29.4907C52.4354 29.7207 52.6604 30.0057 52.8204 30.3457C52.9804 30.6757 53.0604 31.0557 53.0604 31.4857V35.8807H51.7704V35.1307C51.5004 35.4207 51.1654 35.6507 50.7654 35.8207C50.3754 35.9907 49.9104 36.0757 49.3704 36.0757C48.9604 36.0757 48.5854 36.0257 48.2454 35.9257C47.9054 35.8357 47.6104 35.6957 47.3604 35.5057C47.1104 35.3157 46.9154 35.0807 46.7754 34.8007C46.6354 34.5107 46.5654 34.1707 46.5654 33.7807C46.5654 33.3607 46.6454 33.0107 46.8054 32.7307C46.9754 32.4407 47.2004 32.2107 47.4804 32.0407C47.7604 31.8607 48.0804 31.7357 48.4404 31.6657C48.8104 31.5857 49.1954 31.5457 49.5954 31.5457H51.7704C51.7704 30.9757 51.5754 30.5757 51.1854 30.3457C50.8054 30.1057 50.3304 29.9857 49.7604 29.9857C49.3404 29.9857 48.9454 30.0707 48.5754 30.2407C48.2154 30.4107 47.9654 30.6607 47.8254 30.9907H46.4004C46.5004 30.6307 46.6554 30.3157 46.8654 30.0457C47.0854 29.7757 47.3404 29.5457 47.6304 29.3557C47.9304 29.1657 48.2604 29.0257 48.6204 28.9357C48.9804 28.8357 49.3604 28.7857 49.7604 28.7857ZM51.7704 32.6707H49.5804C49.0404 32.6707 48.6154 32.7607 48.3054 32.9407C48.0054 33.1207 47.8554 33.4007 47.8554 33.7807C47.8554 34.1607 48.0054 34.4407 48.3054 34.6207C48.6054 34.7907 49.0054 34.8757 49.5054 34.8757C50.2054 34.8757 50.7554 34.7157 51.1554 34.3957C51.5654 34.0657 51.7704 33.6407 51.7704 33.1207V32.6707Z"
        fill={color}
      />
      <path
        d="M66.4211 28.7857C66.8911 28.7857 67.3111 28.8607 67.6811 29.0107C68.0611 29.1607 68.3761 29.3707 68.6261 29.6407C68.8861 29.9107 69.0811 30.2307 69.2111 30.6007C69.3511 30.9707 69.4211 31.3757 69.4211 31.8157V35.8807H68.1311V31.9207C68.1311 31.3507 67.9811 30.8857 67.6811 30.5257C67.3811 30.1657 66.9161 29.9857 66.2861 29.9857C66.0061 29.9857 65.7311 30.0407 65.4611 30.1507C65.2011 30.2507 64.9711 30.4007 64.7711 30.6007C64.5711 30.7907 64.4061 31.0307 64.2761 31.3207C64.1561 31.6107 64.0961 31.9357 64.0961 32.2957V35.8807H62.8061V28.9807H64.0961V29.7307C64.3261 29.4507 64.6361 29.2257 65.0261 29.0557C65.4161 28.8757 65.8811 28.7857 66.4211 28.7857Z"
        fill={color}
      />
      <path
        d="M84.1634 30.9907C83.9834 30.6807 83.7334 30.4357 83.4134 30.2557C83.0934 30.0757 82.7284 29.9857 82.3184 29.9857C81.9784 29.9857 81.6684 30.0507 81.3884 30.1807C81.1084 30.3007 80.8634 30.4707 80.6534 30.6907C80.4534 30.9107 80.2934 31.1707 80.1734 31.4707C80.0634 31.7707 80.0084 32.0907 80.0084 32.4307C80.0084 32.7707 80.0634 33.0907 80.1734 33.3907C80.2934 33.6907 80.4534 33.9507 80.6534 34.1707C80.8634 34.3907 81.1084 34.5657 81.3884 34.6957C81.6684 34.8157 81.9784 34.8757 82.3184 34.8757C82.7284 34.8757 83.0934 34.7857 83.4134 34.6057C83.7334 34.4257 83.9834 34.1807 84.1634 33.8707H85.5734C85.3234 34.5407 84.9084 35.0757 84.3284 35.4757C83.7584 35.8757 83.0884 36.0757 82.3184 36.0757C81.8084 36.0757 81.3334 35.9857 80.8934 35.8057C80.4534 35.6157 80.0734 35.3607 79.7534 35.0407C79.4334 34.7107 79.1784 34.3257 78.9884 33.8857C78.8084 33.4357 78.7184 32.9507 78.7184 32.4307C78.7184 31.9107 78.8084 31.4307 78.9884 30.9907C79.1784 30.5407 79.4334 30.1557 79.7534 29.8357C80.0734 29.5057 80.4534 29.2507 80.8934 29.0707C81.3334 28.8807 81.8084 28.7857 82.3184 28.7857C83.0884 28.7857 83.7584 28.9857 84.3284 29.3857C84.9084 29.7857 85.3234 30.3207 85.5734 30.9907H84.1634Z"
        fill={color}
      />
      <path
        d="M98.1097 34.8757C98.5197 34.8757 98.8797 34.8007 99.1897 34.6507C99.5097 34.4907 99.7597 34.2557 99.9397 33.9457H101.335C101.095 34.6157 100.685 35.1407 100.105 35.5207C99.5347 35.8907 98.8697 36.0757 98.1097 36.0757C97.5897 36.0757 97.1097 35.9857 96.6697 35.8057C96.2297 35.6257 95.8447 35.3757 95.5147 35.0557C95.1947 34.7257 94.9447 34.3357 94.7647 33.8857C94.5847 33.4357 94.4947 32.9457 94.4947 32.4157C94.4947 31.8957 94.5797 31.4157 94.7497 30.9757C94.9297 30.5357 95.1747 30.1557 95.4847 29.8357C95.7947 29.5057 96.1647 29.2507 96.5947 29.0707C97.0347 28.8807 97.5147 28.7857 98.0347 28.7857C98.5247 28.7857 98.9747 28.8807 99.3847 29.0707C99.8047 29.2507 100.165 29.5007 100.465 29.8207C100.765 30.1407 101 30.5207 101.17 30.9607C101.34 31.3907 101.425 31.8507 101.425 32.3407C101.425 32.4207 101.425 32.5107 101.425 32.6107C101.425 32.7107 101.415 32.8107 101.395 32.9107H95.8297C95.8697 33.1907 95.9547 33.4507 96.0847 33.6907C96.2147 33.9307 96.3797 34.1407 96.5797 34.3207C96.7797 34.4907 97.0097 34.6257 97.2697 34.7257C97.5297 34.8257 97.8097 34.8757 98.1097 34.8757ZM98.0347 29.9857C97.4347 29.9857 96.9397 30.1507 96.5497 30.4807C96.1597 30.8107 95.9247 31.2457 95.8447 31.7857H100.075C99.9947 31.2457 99.7747 30.8107 99.4147 30.4807C99.0647 30.1507 98.6047 29.9857 98.0347 29.9857Z"
        fill={color}
      />
    </SvgIcon>
  );
}

function CDPIcon(props) {
  const { color, altColor, className } = props;
  return (
    <SvgIcon viewBox="0, 0, 24, 24" className={className}>
      <path fill={color} d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
    </SvgIcon>
  );
}

function CDPIconSelected(props) {
  const { color, altColor, className } = props;
  return (
    <div
      style={{
        background: color,
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '12px',
      }}
    >
      <SvgIcon viewBox="0, 0, 24, 24" className={className}>
        <path fill={altColor} d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
      </SvgIcon>
    </div>
  );
}

const StyledSwitch = withStyles((theme) => ({
  root: {
    width: 58,
    height: 32,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(28px)',
      color: '#212529',
      '& + $track': {
        backgroundColor: '#ffffff',
        opacity: 1,
      },
    },
    '&$focusVisible $thumb': {
      color: '#ffffff',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 32 / 2,
    border: `1px solid #212529`,
    backgroundColor: '#212529',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

function Navigation(props) {
  const router = useRouter();

  const account = stores.accountStore.getStore('account');

  const [darkMode, setDarkMode] = useState(false);
  const [unlockOpen, setUnlockOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavigate(route) {
    router.push(route);
  }

  const onMenuClicked = () => {
    setMenuOpen(!menuOpen);
  };

  const handleToggleChange = (event, val) => {
    setDarkMode(val);
    props.changeTheme(val);
  };

  const onAddressClicked = () => {
    setUnlockOpen(true);
  };

  const closoeUnlock = () => {
    setUnlockOpen(false);
  };

  useEffect(function () {
    const localStorageDarkMode = window.localStorage.getItem('rulerprotocol-dark-mode');
    setDarkMode(localStorageDarkMode ? localStorageDarkMode === 'dark' : false);
  }, []);

  useEffect(
    function () {
      setDarkMode(props.theme.palette.type === 'dark' ? true : false);
    },
    [props.theme],
  );

  const activePath = router.asPath;
  const renderNavs = () => {
    return (
      <React.Fragment>
        {account &&
          account.address &&
          renderNav(
            'Vesting',
            'vesting',
            <CDPIcon className={classes.icon} color={darkMode ? 'white' : 'rgb(33, 37, 41)'} altColor={darkMode ? 'rgb(33, 37, 41)' : 'white'} />,
            <CDPIconSelected className={classes.iconHack} color={darkMode ? 'white' : 'rgb(33, 37, 41)'} altColor={darkMode ? 'rgb(33, 37, 41)' : 'white'} />,
          )}
        {account &&
          account.address &&
          renderNav(
            'Voting',
            'voting',
            <CDPIcon className={classes.icon} color={darkMode ? 'white' : 'rgb(33, 37, 41)'} altColor={darkMode ? 'rgb(33, 37, 41)' : 'white'} />,
            <CDPIconSelected className={classes.iconHack} color={darkMode ? 'white' : 'rgb(33, 37, 41)'} altColor={darkMode ? 'rgb(33, 37, 41)' : 'white'} />,
          )}
        {account &&
          account.address &&
          renderNav(
            'Gauges',
            'gauges',
            <CDPIcon className={classes.icon} color={darkMode ? 'white' : 'rgb(33, 37, 41)'} altColor={darkMode ? 'rgb(33, 37, 41)' : 'white'} />,
            <CDPIconSelected className={classes.iconHack} color={darkMode ? 'white' : 'rgb(33, 37, 41)'} altColor={darkMode ? 'rgb(33, 37, 41)' : 'white'} />,
          )}
      </React.Fragment>
    );
  };

  const renderNav = (title, link, icon, iconSelected) => {
    return (
      <div
        className={classes.navigationOptionContainer}
        onClick={() => {
          handleNavigate('/' + link);
        }}
      >
        {activePath.includes('/' + link) || (activePath === '/' && link === 'invest') ? (
          <div className={darkMode ? classes.navigationOptionSelectedWhite : classes.navigationOptionSelected}></div>
        ) : (
          <div className={classes.navigationOptionNotSelected}></div>
        )}
        {activePath.includes('/' + link) || (activePath === '/' && link === 'invest') ? iconSelected : icon}
        <Typography variant="h2">{title}</Typography>
      </div>
    );
  };

  return (
    <Paper elevation={0} className={classes.navigationContainer}>
      <div className={classes.navigationHeading}>
        <YearnIcon
          color={darkMode ? 'white' : 'rgb(33, 37, 41)'}
          altColor={darkMode ? 'rgb(33, 37, 41)' : 'white'}
          width="123px"
          height="42.3px"
          className={classes.yearnLogo}
        />
      </div>

      <div className={classes.navigationContent}>{renderNavs()}</div>

      {menuOpen && (
        <Paper elevation={0} className={classes.navigationContentMobile}>
          <div className={classes.menuIcon}>
            <Button color={props.theme.palette.type === 'light' ? 'primary' : 'secondary'} onClick={onMenuClicked} disableElevation>
              <CloseIcon fontSize={'large'} />
            </Button>
          </div>
          <div className={classes.navigationHeading}>
            <img src="/logo-stacked.svg" width="123px" height="42.3px" />
          </div>
          <div className={classes.navigationContentNavs}>{renderNavs()}</div>
          <div className={classes.headerThings}>
            <div className={classes.themeSelectContainer}>
              <StyledSwitch
                icon={<Brightness2Icon className={classes.switchIcon} />}
                checkedIcon={<WbSunnyOutlinedIcon className={classes.switchIcon} />}
                checked={darkMode}
                onChange={handleToggleChange}
              />
            </div>
            <Button disableElevation className={classes.accountButton} variant="contained" color="secondary" onClick={onAddressClicked}>
              <div className={`${classes.accountIcon} ${classes.metamask}`}></div>
              <Typography variant="h5">{account ? formatAddress(account.address) : 'Connect Wallet'}</Typography>
            </Button>

            {unlockOpen && <Unlock modalOpen={unlockOpen} closeModal={closoeUnlock} />}
          </div>
        </Paper>
      )}

      <div className={classes.menuIcon}>
        <Button color={props.theme.palette.type === 'light' ? 'primary' : 'secondary'} onClick={onMenuClicked} disableElevation>
          <MenuIcon fontSize={'large'} />
        </Button>
      </div>

      {props.backClicked && (
        <div className={classes.backButtonContainer}>
          <div className={classes.backButton}>
            <Button color={props.theme.palette.type === 'light' ? 'primary' : 'secondary'} onClick={props.backClicked} disableElevation>
              <ArrowBackIcon fontSize={'large'} />
            </Button>
          </div>
        </div>
      )}

      <div className={classes.socials}>
        <a className={`${classes.socialButton}`} href="https://twitter.com/iearnfinance" target="_blank" rel="noopener noreferrer">
          <svg version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill={props.theme.palette.type === 'light' ? '#212529' : '#FFF'}
              d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
            />
          </svg>
        </a>
        <a className={`${classes.socialButton}`} href="https://medium.com/iearn" target="_blank" rel="noopener noreferrer">
          <svg width="100%" viewBox="0 0 256 256" version="1.1">
            <g>
              <rect fill={props.theme.palette.type === 'light' ? '#212529' : '#FFF'} x="0" y="0" width="256" height="256"></rect>
              <path
                d="M61.0908952,85.6165814 C61.3045665,83.5054371 60.4994954,81.4188058 58.9230865,79.9979257 L42.8652446,60.6536969 L42.8652446,57.7641026 L92.7248438,57.7641026 L131.263664,142.284737 L165.145712,57.7641026 L212.676923,57.7641026 L212.676923,60.6536969 L198.947468,73.8174045 C197.763839,74.719636 197.176698,76.2025173 197.421974,77.670197 L197.421974,174.391342 C197.176698,175.859021 197.763839,177.341902 198.947468,178.244134 L212.355766,191.407842 L212.355766,194.297436 L144.91283,194.297436 L144.91283,191.407842 L158.802864,177.923068 C160.16778,176.558537 160.16778,176.157205 160.16778,174.070276 L160.16778,95.8906948 L121.54867,193.97637 L116.329871,193.97637 L71.3679139,95.8906948 L71.3679139,161.628966 C70.9930375,164.392788 71.9109513,167.175352 73.8568795,169.174019 L91.9219516,191.086776 L91.9219516,193.97637 L40.6974359,193.97637 L40.6974359,191.086776 L58.7625081,169.174019 C60.6942682,167.172038 61.5586577,164.371016 61.0908952,161.628966 L61.0908952,85.6165814 Z"
                fill={props.theme.palette.type === 'light' ? '#FFF' : '#212529'}
              ></path>
            </g>
          </svg>
        </a>
        <a className={`${classes.socialButton}`} href="https://discord.com/invite/6PNv2nF/" target="_blank" rel="noopener noreferrer">
          <svg version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill={props.theme.palette.type === 'light' ? '#212529' : '#FFF'}
              d="M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z"
            />
          </svg>
        </a>
        <a className={`${classes.socialButton}`} href="https://github.com/antonnell/yearn-finance.git" target="_blank" rel="noopener noreferrer">
          <svg version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill={props.theme.palette.type === 'light' ? '#212529' : '#FFF'}
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
        </a>
      </div>
    </Paper>
  );
}

export default withTheme(Navigation);
