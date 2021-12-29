import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

export const mainListItems = (
  <div>
    <Link href={"/dashboard"}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon/>
        </ListItemIcon>
        <ListItemText primary="Dashboard"/>
      </ListItem>
    </Link>
    <Link href={"/offers"}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon/>
        </ListItemIcon>
        <ListItemText primary="Offers"/>
      </ListItem>
    </Link>
    <Link href={"/customers"}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon/>
        </ListItemIcon>
        <ListItemText primary="Customers"/>
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon/>
      </ListItemIcon>
      <ListItemText primary="Reports"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon/>
      </ListItemIcon>
      <ListItemText primary="Integrations"/>
    </ListItem>
  </div>
);
