import { OFFLINE_CACHE_KEY } from './config';

function handleConnectionChange(event, alert) {
  if (event.type === 'online') {
    document.body.classList.remove('offline');
    alert({ open: true, title: 'Yay! you are back online', type: 'success' });
  }
  if (event.type === 'offline') {
    document.body.classList.add('offline');
    alert({ open: true, title: 'Currently you are offline', type: 'error' });
  }
}

export default ({ alertAction: alert }) => {
  window.addEventListener('online', (e) => handleConnectionChange(e, alert));
  window.addEventListener('offline', (e) => handleConnectionChange(e, alert));
};
