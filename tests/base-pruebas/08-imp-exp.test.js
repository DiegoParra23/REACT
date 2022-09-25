import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    

    test('getHeroeById debe de retornar un héroe por ID', () => {
        
        const id = 1;
        const hero = getHeroeById( id );

        //toEqual nos sirve para comparar cuando estamos evaluando un objeto con otro
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById debe de retornar undefined si no existe', () => {
        
        const id = 100;
        const hero = getHeroeById( id );
        //toBeFalsy hace referencia a que el valor esperado sea un null, undefined or false
        expect( hero ).toBeFalsy();

    });
    test('getHerosbyOwner debe regresar los heroes de DC',()=>{

        const owner=('DC')

        const hero = getHeroesByOwner(owner)

        console.log(hero)

        expect(hero.length).toBe(3);
        expect(hero).toEqual(  [ 
        { id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }
         ]  
          )
          expect(hero).toEqual(hero.filter((heroe)=>heroe.owner ===owner))
       


    })

    test('getHeroesByOwner debe de regresar heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )
        

    });
    
});


