
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add error boundary for image loading issues
window.addEventListener('error', function(e) {
  // Only handle image loading errors
  if (e.target && (e.target as HTMLElement).tagName === 'IMG') {
    e.preventDefault();
    // The error will be handled by the component's onError handler
    return false;
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
