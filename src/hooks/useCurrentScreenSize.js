import { useState, useEffect } from 'react';

const MAX_WIDTH_MOBILE = 600; //xs
const MAX_WIDTH_TABLET = 960; //sm
const MAX_WIDTH_MEDIUM = 1280; //md

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const getHeight = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

export const useCurrentWidth = () => {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return width;
};

export const useCurrentHeight = () => {
  const [height, setHeight] = useState(getHeight());

  useEffect(() => {
    const resizeListener = () => {
      setHeight(getHeight());
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return height;
};

export const isPhoneScreen = (width) => {
  return width < MAX_WIDTH_MOBILE;
};

export const isTabletScreen = (width) => {
  return width < MAX_WIDTH_TABLET && width >= MAX_WIDTH_MOBILE;
};

export const isMediumScreen = (width) => {
  return width < MAX_WIDTH_MEDIUM && width >= MAX_WIDTH_TABLET;
};

export const isMobileScreen = (width) => {
  return isPhoneScreen(width) || isTabletScreen(width);
};
