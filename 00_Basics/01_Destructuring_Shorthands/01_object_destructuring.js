const user = {
    name: 'Irfan Kaleli',
    handle: '@irfancnk',
    location: 'Ankara, Turkey'
};

// What we used to do to extract data from an object in following:
const name1 = user.name;
const handle1 = user.handle;
const location1 = user.location;

// can now look like this.
const { name2, handle2, location2 } = user;

// This syntax is called object destructuring
