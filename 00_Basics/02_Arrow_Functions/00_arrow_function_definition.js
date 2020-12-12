// Arrow functions provide two main benefits over regular functions. First,
// they’re more terse, so less typing. Second, they make managing the this
// keyword a little easier.

// fn declaration
function add (x,y) {
    return x + y;
}

// fn expression
var adder = function (x,y) {
    return x + y;
}

// fn expression with arrow syntax
var adderArrow = (x,y) => {
    return x + y;
}

// Consider following function with anonymous then callbacks
// Getting tweets of user which has more then 50 stars and 50 retweets.
function getTweets (uid) {
    return fetch('https://api.users.com/' + uid)
    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        return response.data
    })
    .then(function (tweets) {
        return tweets.filter(function (tweet) {
            return tweet.stars > 50
        })
    })
    .then(function (tweets) {
        return tweets.filter(function (tweet) {
            return tweet.rts > 50
        })
    })
}

// If our function has a concise body (one liner), we can omit the return
// keyword in arrow function and the value will be returned automatically
// or a more fancy saying, "implicitly".
// Another thing is that, if the arrow function only has one parameter, we can
// omit the () around it.
// So by using "implicit returns" with arrow functions, we can rewrite the
// function above like this:


function getTweets (uid) {
    return fetch('https://api.users.com/' + uid)
    .then(response => response.json())
    .then(response => response.data)
    .then(tweets => tweets.filter((tweet) => tweet.stars > 50))
    .then(tweets => tweets.filter((tweet) => tweet.rts > 50))
}

// That code is not only much easier to write, but more importantly, it’s much
// easier to read.
