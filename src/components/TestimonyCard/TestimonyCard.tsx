import { ITestimony } from '../../types';
import styles from './TestimonyCard.module.css';

interface TestimonyCardProps {
  testimony: ITestimony;
}

export default function TestimonyCard({ testimony }: TestimonyCardProps) {
  const coloring = {
    backgroundColor: `var(--color-${testimony.color})`,
    color:
      testimony.theme === 'dark'
        ? 'var(--color-light-grayish-blue)'
        : 'var(--color-very-dark-grayish-blue)',
  };

  const imageBorder = {
    border: `4px solid var(--color-${testimony.color}-border)`,
  };

  return (
    <div className={styles.container} style={coloring}>
      <div className={styles.header}>
        <img
          src={testimony.image}
          alt='Profile picture of testimony author'
          style={imageBorder}
        />
        <div className={styles.nameWrapper}>
          <h2 className={styles.name}>{testimony.author}</h2>
          <p className={styles.verified}>Verified Graduate</p>
        </div>
      </div>
      <p className={styles.quote}>{testimony.quote}</p>
      <p className={styles.review}>{testimony.review}</p>
    </div>
  );
}
