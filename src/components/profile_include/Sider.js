import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import DomainRoundedIcon from '@material-ui/icons/DomainRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import RecordVoiceOverRoundedIcon from '@material-ui/icons/RecordVoiceOverRounded';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import Divider from '@material-ui/core/Divider';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

export default function Sider() {
    const [openKeys, setOpenKeys] = React.useState(['sub1']);

    const onOpenChange = keys => {
      const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };


  return (
      <div className="mt-4">
        <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256}}>
        <Menu.Item key="1" icon={<HomeRoundedIcon />}>Home</Menu.Item>
        <Menu.Item key="2" icon={<StorefrontRoundedIcon />}>Store</Menu.Item>
        <Menu.Item key="3" icon={<DomainRoundedIcon />}>My NFTs</Menu.Item>
        <Menu.Item key="4" icon={<AccountBalanceWalletRoundedIcon />}>My Earning</Menu.Item>
        <SubMenu key="sub1" icon={<LocalMallRoundedIcon />} title="My Orders">
            <Menu.Item key="5">Won Auction</Menu.Item>
            <Menu.Item key="6">Bidding History</Menu.Item>
        </SubMenu>
        <Menu.Item key="7" icon={<StarsRoundedIcon />}>Reviews</Menu.Item>
        <SubMenu key="sub2" icon={<FormatListBulletedRoundedIcon />} title="Listing">
            <Menu.Item key="8">Itmes on sale</Menu.Item>
            <Menu.Item key="9">Sold items</Menu.Item>
        </SubMenu>
        <Menu.Item key="10" icon={<HistoryRoundedIcon />}>History</Menu.Item>
        <Menu.Item key="11" icon={<RecordVoiceOverRoundedIcon />}>Ad Manager</Menu.Item>
        <Menu.Item key="12" icon={<InboxIcon />}>Shop Widget</Menu.Item>
        <Menu.Item key="13" icon={<SettingsApplicationsRoundedIcon />}>Setting</Menu.Item>
        <Divider />
        <Button variant="contained" color="primary" style={{margin:"10px 30px 10px 30px"}} disableElevation>
            Disable elevation
        </Button>
        <Button variant="outlined" color="primary" style={{margin:"10px 30px 10px 30px"}} disableElevation>
            Disable elevation
        </Button>
        
        
        </Menu>
        
      </div>
   
  );
}
