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
}));

export default useStyles;
