export function getRecipes(callback, category, quantity) {
  //   fetch(
  //     'https://api.spoonacular.com/recipes/complexSearch?apiKey=eb0c76230bda4da09761000b8457470d&query=pasta&maxFat=25&number=15',
  //     'https://api.spoonacular.com/recipes/complexSearch?apiKey=eb0c76230bda4da09761000b8457470d&query=${category}&maxFat=25&number=${quantity}',
  //     {
  //       headers: {
  //         Accept: 'application/json',
  //       },
  //     }
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.results);
  //       callback && callback(data.joke);
  //     });

  fetch('data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      //   console.log(data);
      callback && callback(data);
    });
}
