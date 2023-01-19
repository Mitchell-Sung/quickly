import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  const styles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
  };

  return <CircularProgress sx={styles} size={50} />;
};

export default Loading;
