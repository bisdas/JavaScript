//Without promise
/* const getUser = cb => {
    setTimeout(() => {
        cb({
            name: 'Subramanian'
        })
    }, 1000);
}; */
//getUser((user) => console.log(user))

//With Promise
/* const getUser = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: 'Subramanian'
            });
        }, 2000);
    });
};
getUser().then(user => console.log(user)) */

const getUser = () => {
    return new Promise((resolve, reject) => {
        const fakeuser = {
            name: 'ram'
        };
        if (fakeuser) {
            setTimeout(() => {
                resolve(fakeuser)
            }, 2000);
        } else {
            setTimeout(() => {
                reject({
                    err: 'User not Available'
                })
            }, 2000);
        }
    });

};

getUser()
    .then((user) => Promise.resolve(user))
    .then(user => console.log(user.name.toUpperCase()))
    .catch(err => console.log(err));