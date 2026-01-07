// const books = [
//     {
//         title: 'Book',
//         author: 'Name'
//     },
//     {
//         title: 'Book2',
//         author: 'Name2'
//     }
// ]

const getTheTitles = function (request) {
    let arrayReq = request.map(item => item.title)
    // console.log(arrayReq);
    return arrayReq;
};

// getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
