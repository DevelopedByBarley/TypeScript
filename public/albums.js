"use strict";
fetch("http://jsonplaceholder.typicode.com/albums")
    .then(res => {
    return res.json();
})
    .then(albums => {
    console.log(albums);
});
