export interface MovieDetails {
    movieName: string
    movieDiscription: any
    moviePhoto: string
    movieTrailer: string
    movieDuration: number
}

let tenentDetails: MovieDetails = {
    movieName: "tenent",
    movieDiscription: "This is a suspense thriller",
    moviePhoto: "www.google.com/tenet",
    movieTrailer: "www.youtube.com/tenet",
    movieDuration: 90


}

console.log(tenentDetails.movieTrailer);
