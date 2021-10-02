import AsyncStorage from "@react-native-async-storage/async-storage";

//Buscar os itens salvos

export async function getMoviesSave(key){
    const myMovies = await AsyncStorage.getItem(key)

    let moviesSave = JSON.parse(myMovies) || [];
    
    return moviesSave;

}

//Salvar um novo filme
export async function saveMovie(key, newMovie){
    let moviesStored = await getMoviesSave(key);

    const hasMovie = moviesStored.some(item => item.id === newMovie.id);

    if(hasMovie) {
        console.log("ESSE FILME JÁ EXISTE NA SUA LISTA");
        return;
    }

    moviesStored.push(newMovie);

    await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
    console.log("FILME SALVO COM SUCESSO");
}


//Deletar filme

export async function deleteMovie(id){
let moviesStored = await getMoviesSave('@primereact');

let myMovies = moviesStored.filter(item => {
    return (item.id !== id)
})

await AsyncStorage.setItem('@primereact', JSON.stringify(myMovies));
console.log("FILME DELETADO COM SUCESSO");
return myMovies;

}

//Filtrar
export async function hasMovie(movie){
    let moviesStored = await getMoviesSave('@primereact');

    const hasMovie = moviesStored.find(item => item.id === movie.id);

    if(hasMovie) {
        return true;
    }
    return false;
}
