let name = 'Bish';

// simple template literal
let description = `
    Like this...HaHa :)
`;
console.log(description);


// using variables inside literals
description = `
    Hello, I'm ${name}
`;
console.log(description);


// using string operations inside literals
description = `
    Hello, I'm ${ name + ' Das'}
`;
console.log(description);


// escaping the literal template inside string
// using a backslash folowwing the template $
description = `
    Hello, I'm \${name}
`;
console.log(description);