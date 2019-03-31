let isActive = true;
if (isActive) {
    console.log('Active')
} else {
    console.log('Not Active')
}

/**
 * Falsy values:
 *  boolean false
 *  0
 *  undefined
 *  "",''
 *  null
 *  NaN
 */

let name;
if (name) {
    console.log('You have name')
} else {
    console.log('You dont have name')
}

const result = name ? 'you have name' : 'You dont have name';
console.log(result);