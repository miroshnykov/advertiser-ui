import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {DRAWER_LIST} from "../constants/menu";

export const mainListItems = (
  <div>
    {DRAWER_LIST.map(({
                        literal,
                        route,
                        Icon
                      }) => (
      <Link href={`${route}`} key={route}>
        <ListItem
          button
        >
          <ListItemIcon>
            <Icon/>
          </ListItemIcon>
          <ListItemText primary={literal}/>
        </ListItem>
      </Link>
    ))}

  </div>
);
