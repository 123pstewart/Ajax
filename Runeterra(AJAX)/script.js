//get htm elements (using jQuery)

//get JSON info and parse it

//loop through elements and json info to add info to the screen
const getCards = (resource) => {
  
  return new Promise((resolve, reject) =>{
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange',() => {
    if(request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      resolve(data);
    } else if (request.readyState === 4){
      callback('could not fetch data', undefined);
    }
  });

  request.open('GET', resource);
  request.send();
});
};

getCards('cards.json').then(data => {
  console.log('promise resolved:', data);
}).catch(err => {
  console.log('promise rejected:',err);
// const getSomething = () => {
});

return new Promise((resolve, reject) => {
//resolve('some data');
reject('some error');
});
// };
// }
// getSomething().then(() =>{
// console.log(data);
// }, (err) => {
//   console.log(err);
// });

getSomething().then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})
// getCards('luigi.json', (err, data) => {
//   console.log(data);
//   getCards('mario.json', (err, data) => {
//     console.log(data);
//   })
//   getCards('Cards.json', (err, data) => {
//     console.log(data);
//   })
// }); 
