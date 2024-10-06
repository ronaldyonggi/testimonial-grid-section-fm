import { ITestimony } from '../../types';
import styles from './TestimonyCard.module.css';

interface TestimonyCardProps {
  testimony: ITestimony;
}

export default function TestimonyCard({ testimony }: TestimonyCardProps) {
  return (
    <div>
      <img src={testimony.image} alt='Profile picture of testimony author' />
      <h2>{testimony.author}</h2>
      <p>{testimony.reviewTitle}</p>
      <blockquote>{testimony.reviewBody}</blockquote>
    </div>
  );
}
