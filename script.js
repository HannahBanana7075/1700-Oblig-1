let tickets = [];

function addTicket(ticket){
    tickets.push(ticket);
    showTicketList();
}

function validation(){
    console.log("I have been called");
    let amount = document.getElementById("amount").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;
    //do validation here

    let ticket = {
        amount: amount,
        firstName: firstName, 
        lastName: lastName, 
        phoneNumber: phoneNumber, 
        email: email
    }

    addTicket(ticket)
}

function showTicketList(){
    let myHTML = [];
    let headers = `
    <table>
    <tr>
    <th>Amount</th>
    <th>First name</th>
    <th>Last name</th>
    <th>Phone number</th>
    <th>E-Mail</th>
    </tr>
    `;
    myHTML.push(headers);




    let result = myHTML.join();
    document.getElementById("allTickets").innerHTML= result;
}
