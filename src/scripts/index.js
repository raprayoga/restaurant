import 'regenerator-runtime'
import '../styles/style.css'
// import '../styles/responsive.css'
import App from './views/app'
// import swRegister from './utils/sw-register'
// import WebSocketInitiator from './utils/websocket-initiator'
import CONFIG from './globals/config'

const app = new App({
  burgerButton: document.querySelector('#burger-btn'),
  closeButton: document.querySelector('#close-btn'),
  drawer: document.querySelector('#mySidenav'),
  content: document.querySelector('#root'),
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  //   swRegister()
  //   WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER)
})
