
//botón con id="btnTop" 
const btnTop = document.getElementById("btnTop");
if (btnTop) {
  btnTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth"});
    });
}

console.log(btnTop);