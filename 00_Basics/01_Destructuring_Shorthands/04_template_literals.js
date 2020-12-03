function makeGreeting (name, email, id) {
  return 'Hello, ' + name + '. We\'ve emailed you at ' + email
  + '. Your user id is "' + id + '".';
}


let greeting = makeGreeting("Irfan", "irfan@mail.com", "101");
console.log(greeting);


// By using Template Literals, we can take the confusing makeGreeting function
// above and simplify it to look like this.


function makeGreetingIdentical (name, email, id) {
  return `Hello, ${name}. We've emailed you at ${email}. Your user id is "${id}".`
}


let greetingIdentical = makeGreetingIdentical("Irfan", "irfan@mail.com", "101");
console.log(greetingIdentical);
