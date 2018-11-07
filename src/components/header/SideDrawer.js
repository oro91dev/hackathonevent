import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}>

        <List component="nav">
        <ListItem button onClick={()=> console.log('Event')}>
                    Hackathon
                </ListItem>

                <ListItem button onClick={()=> console.log('Hackathon NFO')}>
                    Hackathon Info
                </ListItem>

                <ListItem button onClick={()=> console.log('Hoydepunkter')}>
                    Høydepunkter
                </ListItem>

                <ListItem button onClick={()=> console.log('Pris')}>
                    Pris
                </ListItem>

                <ListItem button onClick={()=> console.log('Lokasjon')}>
                    Lokasjon
                </ListItem>


        </List>

        </Drawer>
    );
};

export default SideDrawer;