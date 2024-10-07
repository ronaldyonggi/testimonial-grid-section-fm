import { testimonies } from '../../testimonies';
import TestimonyCard from '../TestimonyCard/TestimonyCard';
import styles from './Section.module.css';

export default function Section() {
  return (
    <div className={styles.container}>
      {testimonies.map((testimony, index) => (
        <TestimonyCard
          key={index}
          testimony={testimony}
          className={styles[`card${index + 1}`]}
        />
      ))}
    </div>
  );
}
