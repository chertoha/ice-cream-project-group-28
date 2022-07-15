(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),

      menu: document.querySelector(".backdrop-mob"),
      body: document.querySelector("body"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    
    function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  
    function toggleModal() {
      refs.modal.classList.toggle("mob-menu__modal--is-hidden");
      if (!refs.menu.classList.contains("is-hidden")) { 
        toggleMenu();
      }
    }
  })();