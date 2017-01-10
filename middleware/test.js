const hashPass = require('./hashPassword');

hashPass.hashPassword('monk', (err, result) => {
    if (err) return console.log(err);
    console.log(result);
});

hashPass.comparePassword('monk', '$2a$10$.5CoJtTWO4lBwYNysJg3P.zSDSFmUcJll3G6Ost6.UprEZosHU3kO', (err, result) => {
    if (err) return console.log(err);
    console.log(result);
})
