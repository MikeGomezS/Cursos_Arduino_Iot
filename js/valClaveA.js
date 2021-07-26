const d = document;

export default function valClaveAr(form,clavep){
    const formClave = d.getElementById(form),
    claveForm = d.getElementById(clavep),
    direcA = "./CursoArduino.html",
    claveA = "2215Arduino1",
    direcI = "./CursoIot.html",
    claveI = "2215Iot1";
    
    let tester;

    formClave.addEventListener("submit", (e) => {
        e.preventDefault();
        
        if (claveForm.value === claveA) {
            tester = window.open(direcA, "tester");
        }else if (claveForm.value === claveI) {
            tester = window.open(direcI, "tester");
        }else{
            alert("Código incorrecto")
        }
    });
};


