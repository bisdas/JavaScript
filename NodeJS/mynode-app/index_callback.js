const getUser = (success, failure) => {
    const fakeuser = {
        name: 'Subramanian'
    };
    if (fakeuser) {
        setTimeout(() => {
            success(fakeuser)
        }, 2000);
    } else {
        setTimeout(() => {
            failure({
                err: 'User not Available'
            })
        }, 2000);
    }

};

const sucess = user => console.log(user.name);
const failure = err => console.log(err);
getUser(sucess, failure);