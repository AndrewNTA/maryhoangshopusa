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
  },
  imageGallery: {
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  productInfo: {
    flex: 1,
    paddingLeft: 16
  },
}));

export default useStyles;
