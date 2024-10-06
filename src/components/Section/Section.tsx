import { testimonies } from '../../testimonies';
import TestimonyCard from '../TestimonyCard/TestimonyCard';

export default function Section() {
  return (
    <div>
      {testimonies.map((testimony) => (
        <TestimonyCard key={testimony.author} testimony={testimony} />
      ))}
    </div>
  );
}
