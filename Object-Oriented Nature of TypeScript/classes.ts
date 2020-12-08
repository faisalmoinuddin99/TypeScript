class Booking {
    private ticketPrice: number
    private numberOfTicket: number
    private movieName: string

    constructor(price: number, noOfticketBooked: number, name: string) {
        this.ticketPrice = price
        this.numberOfTicket = noOfticketBooked
        this.movieName = name
    }

    public totalAmount() {
        return this.numberOfTicket * this.ticketPrice
    }

    public printTicket() {
        return `
        Movie : ${this.movieName}, 
        Price : ${this.ticketPrice} $
        Ticket_Count : ${this.numberOfTicket}
        Total_Amount : ${this.totalAmount()} $
        `
    }

}

let ticketOne = new Booking(4, 2, "Narnia")
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
