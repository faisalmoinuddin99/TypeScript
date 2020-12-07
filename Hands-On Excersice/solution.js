var theatreName = "Inox";
var numberOfSeat = 350;
var movieScreenpresent = [10, 11, 12];
var restaurantDetails = ["MacD", 1];
var movieStatus;
(function (movieStatus) {
    movieStatus[movieStatus["Upcoming"] = 0] = "Upcoming";
    movieStatus[movieStatus["Ongoing"] = 1] = "Ongoing";
    movieStatus[movieStatus["Deleted"] = 2] = "Deleted";
})(movieStatus || (movieStatus = {}));
var tenet = movieStatus[1];
console.log(tenet);
var theatreLocation;
theatreLocation = "Worli naka";
theatreLocation = 400706;
console.log(theatreLocation);
