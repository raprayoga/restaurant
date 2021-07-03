import 'regenerator-runtime';
import '../styles/style.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  burgerButton: document.querySelector('#burger-btn'),
  closeButton: document.querySelector('#close-btn'),
  drawer: document.querySelector('#mySidenav'),
  content: document.querySelector('#root'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
