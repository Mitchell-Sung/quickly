import styles from 'styles/Signup.module.css';
import useMyProfile from 'hooks/useMyProfile';
import { Loading, InfoField } from 'components';
import { FIRST_NAME, LAST_NAME, EMAIL } from 'constants';

const MyProfile = () => {
  const { loading, user } = useMyProfile();

  if (loading) return <Loading />;

  return (
    <main className={styles.page}>
      <div className={styles.div}>
        <h2>{`${user['full_name']} Profile`}</h2>
        <InfoField label='First name' value={user[FIRST_NAME]} />
        <InfoField label='Last name' value={user[LAST_NAME]} />
        <InfoField label='Email' value={user[EMAIL]} />
      </div>
    </main>
  );
};

export default MyProfile;
