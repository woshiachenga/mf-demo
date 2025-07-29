import Counter from '@/exposes/Counter';
import styles from './index.less';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Counter />
    </div>
  );
};

export default HomePage;
