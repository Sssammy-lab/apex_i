document.addEventListener("DOMContentLoaded", function () {
    const paymentSelect = document.getElementById("payment");

    paymentSelect.addEventListener("change", function () {
        if (this.value === "bank") {
            createBankForm();
        } else if (this.value === "m_pesa") {
            createMpesaForm();
        }
        else if (this.value==="paypal") {
            createPaypalForm();
        }
    });
});

function createBankForm() {
    // Remove any existing form
    const existingForm = document.getElementById("form");
    if (existingForm) existingForm.remove();

    // Create form elements
    const form = document.createElement("form");
    const exp_date = document.createElement("input");
    const cvv = document.createElement("input");
    const card_no = document.createElement("input");
    const amount = document.createElement("input");
    const submit = document.createElement("button");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    // Append elements to form
    document.body.appendChild(form);
    form.appendChild(h1);
    form.appendChild(p);
    form.appendChild(card_no);
    form.appendChild(exp_date);
    form.appendChild(cvv);
    form.appendChild(amount);
    form.appendChild(submit);

    // Set element properties
    h1.textContent = "BANK PAYMENT";
    h1.id = "h1";

    p.textContent = "Enter your card details to pay";
    p.id = "p";

    card_no.type = "number";
    card_no.placeholder = "Enter Card Number";
    card_no.id = "card_no";
    card_no.required = true;

    exp_date.type = "date";
    exp_date.id = "exp_date";
    exp_date.required = true;

    cvv.type = "text";
    cvv.placeholder = "Enter CVV";
    cvv.id = "cvv";
    cvv.required = true;

    amount.type = "number";
    amount.placeholder = "Enter Amount";
    amount.id = "amount";
    amount.required = true;

    submit.type = "button";
    submit.textContent = "Pay";
    submit.id = "submit";

    form.id = "form";

    // Form submission logic
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        let errorMessage = "";
        if (card_no.value.trim() === "" || card_no.value.length !== 16) {
            errorMessage += "Invalid Card Number. ";
        }
        if (cvv.value.trim() === "" || cvv.value.length !== 3) {
            errorMessage += "Invalid CVV. ";
        }
        if (exp_date.value.trim() === "") {
            errorMessage += "Expiration Date Required. ";
        }
        if (amount.value.trim() === "") {
            errorMessage += "Enter a valid amount. ";
        }

        if (errorMessage) {
            p.textContent = errorMessage;
            p.style.color = "red";
            submit.style.backgroundColor = "red";
        } else {
            p.textContent = "Payment Successful!";
            p.style.color = "green";
            submit.style.backgroundColor = "green";
        }
    });
}

// M-Pesa Payment Form
function createMpesaForm() {
    // Remove any existing form
    const existingForm = document.getElementById("form");
    if (existingForm) existingForm.remove();

    // Create form elements
    const form = document.createElement("form");
    const phone_number = document.createElement("input");
    const amount = document.createElement("input");
    const comment = document.createElement("input");
    const submit = document.createElement("button");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    // Append elements to form
    document.body.appendChild(form);
    form.appendChild(h1);
    form.appendChild(p);
    form.appendChild(phone_number);
    form.appendChild(amount);
    form.appendChild(comment);
    form.appendChild(submit);

    // Set element properties
    h1.textContent = "M-PESA PAYMENT";
    h1.id = "h1mpesa";

    p.textContent = "Enter your phone number and amount to pay";
    p.id = "p1";

    phone_number.type = "number";
    phone_number.placeholder = "Enter Phone Number";
    phone_number.id = "phone_no";
    phone_number.required = true;

    amount.type = "number";
    amount.placeholder = "Enter Amount";
    amount.id = "amount1";
    amount.required = true;

    comment.type = "text";
    comment.placeholder = "Enter Your Comment";
    comment.id = "comment";
    comment.required = true;

    submit.type = "button";
    submit.textContent = "Pay";
    submit.id = "submit1";

    form.id = "form";

    // Form submission logic
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        let errorMessage = "";
        if (phone_number.value.trim() === "" || phone_number.value.length !== 10) {
            errorMessage += "Invalid Phone Number. ";
        }
        if (amount.value.trim() === "") {
            errorMessage += "Enter a valid amount. ";
        }

        if (errorMessage) {
            p.textContent = errorMessage;
            p.style.color = "red";
            submit.style.backgroundColor = "red";
        } else {
            p.textContent = "Payment Successful!";
            p.style.color = "green";
            submit.style.backgroundColor = "green";
        }
    });
}

function createPaypalForm() {
    //removing existing form
    const existingForm=document.getElementById('form','form1');
    if(existingForm) existingForm.remove();
    //creating elements
    const form = document.createElement("form");
    const email = document.createElement("input");
    const code = document.createElement("input");
    const amount = document.createElement("input");
    const submit = document.createElement("button");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    //appending elements
    document.body.appendChild(form);
    form.appendChild(h1);
    form.appendChild(p);
    form.appendChild(email);
    form.appendChild(amount);
    form.appendChild(code);
    form.appendChild(submit);

    //setting properties

    form.id="form2";

    h1.textContent = "PAYPAL PAYMENT";
    h1.id = "h1paypal";

    p.textContent = "Enter your email and amount to pay";
    p.id = "p2";

    email.type = "email";
    email.placeholder = "Enter Email";
    email.id = "email";
    email.required =true;

    code.type = "number";
    code.placeholder = "Enter Code";
    code.id = "code";
    code.required = true;

    amount.type = "number";
    amount.placeholder = "Enter Amount";
    amount.id = "amount2";
    amount.required = true;

    submit.type = "button";
    submit.textContent = "pay";
    submit.id = "submit2";

    //form submission logic

    submit.addEventListener("click", function(){
        let errorMessage="";
        if(email.value.trim()==="" || !email.value.includes("@")){
            errorMessage+="Invalid Email. ";
        }
        if(code.value.trim===""|| code.value.length!==4){
            errorMessage+="Invalid code. ";
        }
        if (amount.value.trim()==="") {
            errorMessage+="Enter a valid amount. ";
        }

        if (errorMessage) {
            p.textContent = errorMessage;
            p.style.color = "red";
            submit.style.backgroundColor = "red";
        }
        else{
            p.textContent = "Payment Succesful";
            p.style.color ="green";
            submit.style.backgroundColor = "green";
        }
    })
}