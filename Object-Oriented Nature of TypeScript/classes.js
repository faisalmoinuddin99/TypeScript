var Booking = /** @class */ (function () {
    function Booking(price, noOfticketBooked, name) {
        this.ticketPrice = price;
        this.numberOfTicket = noOfticketBooked;
        this.movieName = name;
    }
    Booking.prototype.totalAmount = function () {
        return this.numberOfTicket * this.ticketPrice;
    };
    Booking.prototype.printTicket = function () {
        return "\n        Movie : " + this.movieName + ", \n        Price : " + this.ticketPrice + " $\n        Ticket_Count : " + this.numberOfTicket + "\n        Total_Amount : " + this.totalAmount() + " $\n        ";
    };
    return Booking;
}());
var ticketOne = new Booking(4, 2, "Narnia");
console.log(ticketOne);
console.log(ticketOne.totalAmount());
console.log(ticketOne.printTicket());
/*
Output :

        Movie : Narnia,
        Price : 4 $
        Ticket_Count : 2
        Total_Amount : 8 $
*/
