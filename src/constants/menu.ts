import { ROUTES } from './routes';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const DRAWER_LIST = [
  {
    route: ROUTES.main,
    literal: 'Dashboard',
    Icon: DashboardIcon,
  },
  {
    route: ROUTES.offers,
    literal: 'Offers',
    Icon: LocalOfferIcon,
  },
  {
    route: ROUTES.customers,
    literal: 'Customers',
    Icon: ShoppingCartIcon,
  },
  // {
  //   route: ROUTES.inventory,
  //   literal: 'Inventory',
  //   Icon: AttachMoneyIcon,
  // },
];
