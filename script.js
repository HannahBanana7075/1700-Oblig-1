let tickets = [];

function addTicket(ticket){
    tickets.push(ticket);
    showTicketList();
}

function validation(){
    resetErrors();
    let amount = document.getElementById("amount").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;

    console.log(amount);
    console.log(firstName);
    console.log(lastName);
    console.log(phoneNumber);
    console.log(email);
    
    let invalid = false;  //include return on all validations
    if(firstName.length===0){
        invalid = true;
    }
    if(lastName.length===0){
        invalid = true;
    }
    if(!(phoneNumber.length===8||phoneNumber.length===10))
    {
        document.getElementById("phoneNumberError").innerHTML= "Phone number must be valid.";
        invalid = true 
    } //if statement validates phone number length
    if(email.length===0){
        invalid = true;
    }
    if(invalid){
        return;
    } 

    //check that  first and last name are valid
    //do validation here
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

function resetErrors(){
    document.getElementById("phoneNumberError").innerHTML="";
    //do this for all error messages
} //this function resets error messages