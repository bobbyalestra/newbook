

module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmedPassword

    ) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = "Username Can't Be Empty"
    }
    if(email.trim() === ''){
        errors.email = "Email Can't Be Empty"
    } else{
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(email.match(regEx))    
        errors.email = 'Email must be a valid email'
    }

    
    if(password === ''){
        errors.password = "Password must not be empty"
    } else if(password !== confirmedPassword){
        errors.confirmedPassword = 'Passwords Must Match!'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
};

module.exports.validateLoginInput = (username, password) => {
    const errors = {}
    if(username.trim() === ''){
        errors.username = "Username Can't Be Empty"
    }


if(password.trim() === ''){
    errors.username = "Password Can't Be Empty"
}

return {
    errors,
    valid: Object.keys(errors).length < 1
}

}