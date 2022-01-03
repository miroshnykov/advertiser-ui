import { ROUTES } from './routes';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

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
    route: ROUTES.profile,
    literal: 'Profile',
    Icon: ShoppingCartIcon,
  }
];
