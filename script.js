let tickets = [];

function addTicket(ticket){
    tickets.push(ticket);
    displayTickets();
}

function displayTickets(){
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = '';
    tickets.forEach(ticket =>){
        
    }

}