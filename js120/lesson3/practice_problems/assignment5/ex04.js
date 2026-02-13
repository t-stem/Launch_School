/*
Now we can build a factory function to create payments. The function can take an object argument in one of 3 forms:

Payment for one service, e.g., { internet: 1000 } or { phone: 1000 }.
Payment for both services, e.g., { internet: 2000, phone: 1000 }.
Payment with just an amount property, e.g., { amount: 2000 }.
The function should return an object that has the amount paid for each service and a total method that returns the payment total. 
  If the amount property is not present in the argument, it should return the sum of the phone and internet service charges; 
  if the amount property is present, return the value of that property.

Your function should work with the following code:
*/

function createPayment(services) {
  return {
    phone: services && services.phone ? services.phone : 0,
    internet: services && services.internet ? services.internet : 0,
    amount: services && services.amount ? services.amount : 0,

    total() {
      return this.amount ? this.amount : this.phone + this.internet;
    }
  }
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000






function createInvoice(services) {
  return {
    phone: services && services.phone ? services.phone : 3000,
    internet: services && services.internet ? services.internet : 5500,

    total() {
      return this.phone + this.internet;
    }
  }
}

function invoicesTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoicesTotal(invoices)); // 31000


/*
let invoice = {
  phone: 3000,
  internet: 6500
};

let payment = {
  phone: 1300,
  internet: 5500
};

let invoiceTotal = invoice.phone + invoice.internet;
let paymentTotal = payment.phone + payment.internet;
let remainingDue = invoiceTotal - paymentTotal;

console.log(paymentTotal);         // => 6800
console.log(remainingDue);         // => 2700
*/