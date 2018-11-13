import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {scroller} from 'react-scroll';
import { element } from 'prop-types';

const SideDrawer = (props) => {
    
    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay:100,
            smooth: true,
            offset: -150
        });
        props.onClose(false);
    }

    
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}>

        <List component="nav">
        

                <ListItem button onClick={()=> scrollToElement('event')}>
                    Hackathon
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('hacknfo')}>
                    Hackathon info
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('highlights')}>
                    Høydepunkter
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('price')}>
                    Pris
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('location')}>
                    Lokasjon
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('footer')}>
                    Mer info
                </ListItem>


        </List>

        </Drawer>
    );
};

export default SideDrawer;