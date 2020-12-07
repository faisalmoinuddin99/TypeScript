let theatreName: string = "Inox"
let numberOfSeat: number = 350
let movieScreenpresent: Array<number> = [10, 11, 12]
let restaurantDetails: [string, number] = ["MacD", 1]
enum movieStatus {
    Upcoming,
    Ongoing,
    Deleted

}

let tenet: string = movieStatus[1]
console.log(tenet);


let theatreLocation: string | number
theatreLocation = "Worli naka"
theatreLocation = 400706

console.log(theatreLocation);
