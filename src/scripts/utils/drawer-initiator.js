const DrawerInitiator = {
  init({
    burgerButton, closeButton, drawer, content,
  }) {
    burgerButton.addEventListener('click', (event) => {
      this.openDrawer(event, drawer);
    });

    closeButton.addEventListener('click', (event) => {
      this.closeDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this.closeDrawer(event, drawer);
    });
  },

  openDrawer(event, drawer) {
    event.stopPropagation();
    drawer.style.width = '250px';
  },

  closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.style.width = '0';
  },
};

export default DrawerInitiator;
