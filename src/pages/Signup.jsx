import useSignup from 'hooks/useSignup';
import { signupData } from 'data/signupData';
import { ContainButton, InputField, TextButton, Loading } from 'components';
import styles from 'styles/index.module.css';
import Alert from '@mui/material/Alert';

const Signup = () => {
  const {
    canSubmit,
    user,
    valid,
    onHandle,
    onSubmit,
    onReset,
    loading,
    onLink,
    error,
  } = useSignup();

  if (loading) return <Loading />;

  return (
    <main className={styles.page}>
      <div className={styles.div}>
        <h2>Sign up</h2>
        {signupData.map((data) => (
          <InputField
            key={data.id}
            name={data.name}
            type={data.type}
            label={data.label}
            value={user[data.name]}
            err={valid[data.name].err}
            msg={valid[data.name].msg}
            onChange={onHandle}
          />
        ))}
        <section className={styles.account}>
          <p>Do you have an account?</p>
          <TextButton label='LOG IN' onClick={onLink} />
        </section>
        <section className={styles.buttons}>
          <ContainButton
            label='SUBMIT'
            disabled={!canSubmit}
            onClick={onSubmit}
          />
          <ContainButton label='RESET' onClick={onReset} />
        </section>
        {!error.success && <Alert severity='error'>{error.message}</Alert>}
      </div>
    </main>
  );
};

export default Signup;
