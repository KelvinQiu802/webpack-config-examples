import sayGoodbye from "./utils";

const user_name = "Kelvin";

function sayHello(name: string) {
  return `Hello, ${name}!`;
}

sayHello(user_name)
sayGoodbye(user_name);