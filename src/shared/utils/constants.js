import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MessageIcon from '@mui/icons-material/Message';
import DescriptionIcon from '@mui/icons-material/Description';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import SettingsIcon from '@mui/icons-material/Settings';

const MENUITEMS = [
    {
        title: 'Home',
        icon: <HomeIcon />
    },
    {
        title: 'Projects',
        icon: <PostAddIcon />
    },
    {
        title: 'Dashboard',
        icon: <DashboardIcon />
    },
    {
        title: 'Messages',
        icon: <MessageIcon />
    },
    {
        title: 'Documents',
        icon: <DescriptionIcon />
    },
    {
        title: 'Organizations',
        icon: <AddBusinessIcon />
    },
    {
        title: 'Settings',
        icon: <SettingsIcon />
    }
];

const DRAWERWIDTH = 240;

export {
    MENUITEMS,
    DRAWERWIDTH
}