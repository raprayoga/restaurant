const DrawerInitiator = {
  init({ burgerButton, closeButton, drawer, content }) {
    burgerButton.addEventListener('click', (event) => {
      this._openDrawer(event, drawer)
    })

    closeButton.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer)
    })

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer)
    })
  },

  _openDrawer(event, drawer) {
    event.stopPropagation()
    drawer.style.width = '250px'
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation()
    drawer.style.width = '0'
  },
}

export default DrawerInitiator
