import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '0',
    },
  },
}));

export default useStyles;
