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
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  productInfo: {
    flex: 1,
    padding: '32px 0',
    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
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
  price: {
    fontWeight: 700,
    fontSize: '2.2rem',
    marginBottom: '16px',
    color: 'var(--mary--main-color)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  comboPrice: {
    fontWeight: 600,
    fontSize: '1.6rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  infoMessage: {
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 600,
  },
  contactInfoTitle: {
    fontSize: '1.1rem',
    fontWeight: 500,
    marginTop: 32,
  },
  bottomSection: {
    width: '100%',
    padding: '32px 0',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 500,
    marginBottom: 24,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 16,
    },
  },
  contentDetails: {
    textAlign: 'justify',
    lineHeight: '2rem'
  },
}));

export default useStyles;
