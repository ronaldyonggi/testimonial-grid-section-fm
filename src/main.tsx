import './styles/reset.css';
import './styles/global.css';
import { createRoot } from 'react-dom/client';
import Section from './components/Section/Section';

export function App() {
  return (
    <main>
      <Section />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
