import { Loading } from 'components';
import ContainButton from 'components/ContainButton';
import InputField from 'components/InputField';
import TextButton from 'components/TextButton';
import { loginData } from 'data/loginData';
import useLogin from 'hooks/useLogin';
import styles from 'styles/index.module.css';

const Login = () => {
  const {
    canLogin,
    login,
    valid,
    onHandle,
    onSubmit,
    onReset,
    loading,
    onLink,
  } = useLogin();

  if (loading) return <Loading />;

  return (
    <main className={styles.page}>
      <div className={styles.div}>
        <h2>Login</h2>
        {loginData.map((data) => (
          <InputField
            key={data.id}
            name={data.name}
            type={data.type}
            label={data.label}
            value={login[data.name]}
            err={valid[data.name].err}
            msg={valid[data.name].msg}
            onChange={onHandle}
          />
        ))}
        <section className={styles.account}>
          <p>Don't have an account?</p>
          <TextButton label='SIGN UP' onClick={onLink} />
        </section>
        <section className={styles.buttons}>
          <ContainButton
            label='LOGIN'
            disabled={!canLogin}
            onClick={onSubmit}
          />
          <ContainButton label='RESET' onClick={onReset} />
        </section>
      </div>
    </main>
  );
};

export default Login;
