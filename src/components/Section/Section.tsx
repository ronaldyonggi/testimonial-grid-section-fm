import { testimonies } from '../../testimonies';
import TestimonyCard from '../TestimonyCard/TestimonyCard';
import styles from './Section.module.css';

export default function Section() {
  return (
    <div className={styles.container}>
      {testimonies.map((testimony) => (
        <TestimonyCard key={testimony.author} testimony={testimony} />
      ))}
    </div>
  );
}
