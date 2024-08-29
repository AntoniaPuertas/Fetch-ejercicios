function obtenerEmpleados(){
    const urlEmpleados = '../empleados.json';

    fetch(urlEmpleados)
        .then(resultado => {
            return resultado.json()
        })
        .then( datos => {
            console.log(datos.empleados);
        })
}

//obtenerEmpleados();

async function obtenerEmpleados2(){
    const urlEmpleados = "../empleados.json";
    const resultado = await fetch(urlEmpleados);
    console.log(resultado);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados2();