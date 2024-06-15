// .toLocaleString() = returns a string with a  language
//                      sensitive representation of a number

// number.toLocaleString("location", {options});

// 'location' = specify the language (undefined = default set in browser)
// 'options' = object with formatting options


let number = 12345678.1234;

//number = number.toLocaleString("de-DE"); // location
//number = number.toLocaleString("hi-IN");

//number = number.toLocaleString(undefined);

number = number.toLocaleString("en-US", {style: "currency", currency: "USD"});

console.log(number);