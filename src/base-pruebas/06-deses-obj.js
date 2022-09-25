

export const usContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {

    
    return {
        nombreClave: clave,
        nombre:nombre,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

