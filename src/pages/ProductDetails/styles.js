import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '32px',
    [theme.breakpoints.down('md')]: {
      padding: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '16px',
    },
  },
  topSection: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 48,
    [theme.breakpoints.down('sm')]: {
      gap: 0,
    },
  },
  imageGallery: {
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  productInfo: {
    flex: 1,
    padding: '32px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '24px 2px',
    },
  },
  productName: {
    fontSize: '2.2rem',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.6rem',
    },
  },
  priceBox: {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      gap: 8
    },
  },
  priceNew: {
    fontWeight: 700,
    fontSize: '2.2rem',
    color: 'var(--mary--main-color)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  priceOld: {
    textDecoration: 'line-through',
    fontSize: '1.6rem',
    color: '#9E9FA5',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
}));

export default useStyles;
