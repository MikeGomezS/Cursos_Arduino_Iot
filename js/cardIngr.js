const d = document;

export default function cardIngreso(panelBtn,popup,close){

    d.addEventListener("click", (e) =>{
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(popup).classList.toggle("is-active");
        }
        if (e.target.matches(close)) {
            d.querySelector(popup).classList.remove("is-active");
        }
    });
    
}