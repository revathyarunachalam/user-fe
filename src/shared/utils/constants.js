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

const APIENDPOINT = 'https://rp6cgg2tec.execute-api.ap-south-1.amazonaws.com/dev';
const USERID = '6bb7a6e0-94db-11ed-a25d-0d7a282dfd77';

export {
    MENUITEMS,
    DRAWERWIDTH,
    APIENDPOINT,
    USERID
}