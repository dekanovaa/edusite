import './Modal.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Modal() {
  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    i18n.changeLanguage(event)

  }
    const [state, setState] = React.useState({
        right: false,
      });

      const toggleDrawer = (anchor, open,modal__btn) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {[
              <div className='modal__wrap'>
                <button className='modal__btn'>X</button>
              <Link to="/" className='modal__link'>{t('navbar.link1')}</Link>
          <Link to="/about" className='modal__link'>{t('navbar.link2')}</Link>
          <Link to="/new" className='modal__link'>{t('navbar.link3')}</Link>
          <Link to="/course" className='modal__link'>{t('navbar.link4')}</Link>
        <div className='modal__wrapper'>
        <button className='modal__lang_btn' onClick={()=>handleChange('uz')} >UZ</button>
          <button className='modal__lang_btn' onClick={()=>handleChange('en')} >EN</button>
          <button className='modal__lang_btn' onClick={()=>handleChange('ru')} >RU</button>
        </div>
          <Link to="/contact" className='modal__link_btn'>{t('navbar.btn')}</Link>
              </div>
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
         

        </Box>
      );

    return(
        <>
        
        {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><i class="fa-solid fa-bars"></i></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
        
        </>
    )
}
export default Modal
  