let guest = function (name = 'UnName', courses = 0) {
    return `hello ${name} now you can access ${courses} courses for free.`;
}

console.log(guest('shubham', 5));