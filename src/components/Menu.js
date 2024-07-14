import React, { useState, useCallback, useEffect } from 'react';
import { MobileMenu, StandardMenu } from 'components';
import { FREE_SHIPPING_MESSAGE } from 'constants';
import { useCurrentWidth, isMobileScreen } from 'hooks/useCurrentScreenSize';
import useStyles from './styles';

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
      <div className={classes.menuHeader}>{FREE_SHIPPING_MESSAGE}</div>
      {isMobile ? <MobileMenu /> : <StandardMenu />}
    </div>
  );
}

export default Menu;
