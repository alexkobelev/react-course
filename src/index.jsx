import { createRoot } from 'react-dom/client';
import './assets/styles/style.scss';
import UserListApp from './components/Users/UserListApp';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<UserListApp />);
