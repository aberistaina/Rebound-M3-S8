
let formulario = document.getElementById("formulario")


let validar = {
    set: function(objeto, propiedad, valor){
        if(propiedad == "nombre"){
            let regex = /^[aA-zZñÑ\sáéíóúÁÉÍÓÚ]{3,20}$/gim
            if(typeof valor == "string" && regex.test(valor)){
                objeto[propiedad] = valor;
            }else{
                throw new Error ("Formato Incorrecto")
            }
        }
        else if (propiedad == "apellido"){
            let regex = /^[aA-zZñÑ\sáéíóúÁÉÍÓÚ]{3,20}$/gim
            if(typeof valor == "string" && regex.test(valor)){
                objeto[propiedad] = valor;
            }else{
                throw new Error ("Formato Incorrecto")
            }
        }
        else if(propiedad == "edad"){
            if(typeof valor == "number" && !isNaN(valor) && valor >= 18){
                objeto[propiedad] = valor;
                alert("Reserva Exitosa")
            }else {
                throw new Error ("Debes ser mayor de edad para reservar")
            }
        }else if(propiedad =="correo"){
            let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(valor != "" && regex.test(valor)){
            objeto[propiedad] = valor;
        }else{
            throw new Error("El formato Correo Electrónico está vacío o con un formato incorrecto")
        }
        }else if(propiedad =="fecha"){
            let regex = /^(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
            if(valor != "" && regex.test(valor)){
        objeto[propiedad] = valor;
    }else{
        throw new Error ("El formato Fecha está vacío o con un formato incorrecto")
    }
    }
    }
}

formulario.addEventListener("submit",crearObjeto)  
    

function crearObjeto(event){
    event.preventDefault()
    try{
        const form = new Proxy({}, validar) 
        form.nombre = nombre.value
        form.apellido = apellido.value
        form.correo = correo.value
        form.fecha = fecha.value
        form.edad = parseInt(edad.value)
        console.log(form)
    }catch(error){
        alert(error)
    }
}