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
  


const inc = document.getElementsByClassName("stepper");
for (i = 0; i < inc.length; i++) {
  let incI = inc[i].querySelector("input"),
    id = incI.getAttribute("id"),
    min = incI.getAttribute("min"),
    max = incI.getAttribute("max"),
    step = incI.getAttribute("step");
  document.getElementById(id).previousElementSibling.setAttribute("onclick", "stepperInput('" + id + "', -" + step + ", " + min + ")");
  document.getElementById(id).nextElementSibling.setAttribute("onclick", "stepperInput('" + id + "', " + step + ", " + max + ")");
}
function stepperInput(id, s, m) {
  const el = document.getElementById(id);
  if (s > 0) {
    if (parseInt(el.value) < m) {
      el.value = parseInt(el.value) + s;
    }
  } else {
    if (parseInt(el.value) > m) {
      el.value = parseInt(el.value) + s;
    }
  }
}