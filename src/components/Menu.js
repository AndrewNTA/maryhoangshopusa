import React from 'react';
import { MobileMenu, StandardMenu } from 'components';
import { useCurrentWidth, isMobileScreen } from 'hooks/useCurrentScreenSize';
import { FREE_SHIPPING_MESSAGE } from 'constants';
import useStyles from './styles';

function Menu() {
  const classes = useStyles();
  const currentWidth = useCurrentWidth();
  const isMobile = isMobileScreen(currentWidth);

  return (
    <>
      <div className={classes.menuHeader}>{FREE_SHIPPING_MESSAGE}</div>
      {isMobile ? <MobileMenu /> : <StandardMenu />}
    </>
  );
}

export default Menu;
