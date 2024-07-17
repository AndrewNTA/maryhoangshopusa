import React, { useState, useCallback, useEffect } from 'react';
import { MobileMenu, StandardMenu } from 'components';
import { FREE_SHIPPING_MESSAGE } from 'constant';
import { useCurrentWidth, isMobileScreen } from 'hooks/useCurrentScreenSize';
import useStyles from './styles';
import Container from '@mui/material/Container';

function Menu() {
  const classes = useStyles();
  const currentWidth = useCurrentWidth();
  const isMobile = isMobileScreen(currentWidth);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [controlNavbar, lastScrollY]);

  return (
    <div
      className={classes.menuWrapper}
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? 1 : 0,
        transition: 'visibility 0.2s, opacity 0.2s linear',
      }}
    >
      {isMobile ? (
        <>
          <div className={classes.menuHeader}>{FREE_SHIPPING_MESSAGE}</div>
          <MobileMenu />
        </>
      ) : (
        <Container maxWidth="xl">
          <div className={classes.menuHeader}>{FREE_SHIPPING_MESSAGE}</div>
          {isMobile ? <MobileMenu /> : <StandardMenu />}
        </Container>
      )}
    </div>
  );
}

export default Menu;
