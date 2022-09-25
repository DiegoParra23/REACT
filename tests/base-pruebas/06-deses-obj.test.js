import { usContext } from "../../src/base-pruebas/06-deses-obj";
 
describe('Pruebas en 06-deses-obj', () => {
  test('usContext debe retornar un objeto', () => { 
    const datosEntrada = {
      clave: 'ElSrVelasco',
      edad: 22
    }
    
    const personaExpected  = {
      nombreClave: datosEntrada.clave,
      anios: datosEntrada.edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      },
    };
 
    const persona = usContext( datosEntrada );
 
    expect( persona ).toEqual( personaExpected );
  });
});