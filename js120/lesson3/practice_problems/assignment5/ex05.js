/*
Update the createInvoice function so that it can add payment(s) to invoices. Use the following code as a guideline:
*/



function createPayment(services) { // alternative: services = {}, which will avoid having to use && operator in following lines
  return {
    phone: (services && services.phone) || 0, // abbreviated syntax vs services && services.phone ? services.phone : 0;
    internet: (services && services.internet) || 0, // abbreviated syntax
    amount: services && services.amount,

    total() {
      return this.amount ? this.amount : this.phone + this.internet;
    }
  }
}

function createInvoice(services) {
  return {
    phone: services && services.phone ? services.phone : 3000,
    internet: services && services.internet ? services.internet : 5500,
    payments: [],

    totalInvoiced() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      this.payments.push(payment.total())
    },

    addPayments(paymentsArr) {
      let paymentsArrTotals = paymentsArr.map(payment => payment.total());
      this.payments = this.payments.concat(paymentsArrTotals);
    },

    totalPaid() {
      return this.payments.reduce((total, payment) => total + payment, 0);
    },

    amountDue() {
      return this.totalInvoiced() - this.totalPaid(); 
    }
  }
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });
console


invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0