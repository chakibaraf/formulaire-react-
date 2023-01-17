
import { useState } from 'react';

const FilmListeViewModel = () => {

    /**
     * composant de type ViewModel 
     * gestion de ma liste de film
     * 
     * 
     */

    const [films,setfilms] = useState([]);

    const ajouterFilm = (film) => {
        setfilms([...films,film]);
    };

    const supprimerFilm =(film)=>{
        setfilms(films.filter(f => f !== film));
    };

  return {films,ajouterFilm,supprimerFilm}
}

export default FilmListeViewModel