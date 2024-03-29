const d= document;

function contacForm() {
    const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]");

    $inputs.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error","none")
        input.insertAdjacentElement("afterend",$span);
    });

    d.addEventListener("keyup",(e) => {
        if (e.target.matches(".contact-form [required]")) {
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;

            if (pattern && $input.value !== "") {
                console.log("El imput tiene patron");
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active")
                
            }
            if (!pattern) {
                return $input.value === ""
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active")
            }
        }
    });

    d.addEventListener("submit", (e) => {

        const $loader = d.querySelector(".mensaje--boton-loader"),
            $response = d.querySelector(".mensaje--boton-response");

        $loader.classList.remove("none");
        setTimeout(() => {
            $loader.classList.add("none");
            $response.classList.remove("none");
            $form.reset();
            setTimeout(() => $response.classList.add("none"), 2500);
        }, 3000);
    });

}

contacForm();