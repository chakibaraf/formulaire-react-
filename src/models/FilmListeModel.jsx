import React, { Fragment } from 'react'
import ListeFilms from '../View/ListeFilms';
import FilmListeViewModel from '../viewModel/FilmListeViewModel';

const FilmListeModel = () => {

    /**
     * injecrion de la logique via notre ViewModel
     */
    const ViewModel = FilmListeViewModel ();

    const rajouterFilm = (film) =>{
        film.preventDefault();
        ViewModel.ajouterFilm(film.target.titre.value);
        film.target.titre.value="";
    }
    
  return (
   <Fragment>
    <h3> ma liste de film </h3>
    <ListeFilms
    listeFilms = {ViewModel.films}
    retirerFilm={ViewModel.supprimerFilm}
    ajouterFilm={rajouterFilm}/>
   </Fragment>
  )
}

export default FilmListeModel;