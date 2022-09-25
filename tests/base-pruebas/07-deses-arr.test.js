import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';


describe('Pruebas en 07-deses-arr', () => {
    
    test('debe de retornar un string y un número', () => {
        
        const [ letters, numbers ] = retornaArreglo();
        
        //busqueda para un valor en especifico
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        // busqueda para un tipo de valor
        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        expect( letters ).toEqual( expect.any(String) );

    });


});