// Define a customer object with name and balance properties
const customer = {
    name: 'UMESH PATIL',
    balance: 1000,
  };
  
  // Function to deposit money into the customer's account
  const deposit = (amount) => {
    customer.balance += amount;
    console.log(`Successfully deposited ${amount} into ${customer.name}'s account.`);
  };
  
  // Function to withdraw money from the customer's account
  const withdraw = (amount) => {
    if (amount <= customer.balance) {
      customer.balance -= amount;
      console.log(`Successfully withdrew ${amount} from ${customer.name}'s account.`);
    } else {
      console.log(`Insufficient funds in ${customer.name}'s account.`);
    }
  };
  
  // Example usage
  console.log('Initial Balance:', customer.balance);
  
  deposit(500);
  console.log('Balance after Deposit:', customer.balance);
  
  withdraw(200);
  console.log('Balance after Withdrawal:', customer.balance);
  
  withdraw(1500); // Attempting to withdraw more than the available balance
  console.log('Balance after Failed Withdrawal:', customer.balance);
  