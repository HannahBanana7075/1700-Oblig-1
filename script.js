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


    if(phoneNumber.length!==8||phoneNumber.length!==10){

    }
    //do validation here
    //check phone number length is either 8 or 10, and consists of numbers
    //check that  first and last name
    //check that email has a @ and .domain 
    //check that no fields are empty
    //explain descisions
    //add citations

    let ticket = {
        amount: amount,
        firstName: firstName, 
        lastName: lastName, 
        phoneNumber: phoneNumber, 
        email: email
    }
    document.getElementById("amount").value= null;    //empties amount
    addTicket(ticket)
}

function showTicketList(){

    if(tickets.length===0){
        document.getElementById("allTickets").innerHTML = "There are no tickets. :)";
        return;
    }

    let myHTML = [];
    let headers =`
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

    for (let i = 0; i< tickets.length; i++){
        let row =`
        <tr>
        <td>
        ${tickets[i].amount}
        </td>
        <td>
        ${tickets[i].firstName}
        </td>
        <td>
        ${tickets[i].lastName}
        </td>
        <td>
        ${tickets[i].phoneNumber}
        </td>
        <td>
        ${tickets[i].email}
        </td>
        </tr>
        `;
        myHTML.push(row);
    }

    let result = myHTML.join(""); //empty quotes to prevent commas in the output.
    document.getElementById("allTickets").innerHTML= result;
}

function emptyList(){
    tickets = [];
    showTicketList();
} //this function empties the list
