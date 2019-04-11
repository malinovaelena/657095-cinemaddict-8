const AMOUNT_OF_CARDS = 15;


const generateData = {
  title: () => {
    const arrOfTitles = ['Harry Potter','Intouchables','Inception','Fight Club','Knockin\' on Heaven\'s Door','Pulp Fiction','Interstellar','Lock, Stock and Two Smoking Barrels','The Matrix','Catch Me If You Can','The Departed','Snatch.','Shutter Island','The Dark Knight'];
    const randomIndexOfArrOfName = Math.round(Math.random()*(arrOfTitles.length));
    return arrOfTitles[randomIndexOfArrOfName];
    },
  text: () => {
    const textInTextarea = 'example';
    return textInTextarea;
  },
  userrating: () => {
    const randomNumber = 2;
    return randomNumber;
  },
  rating: () => {
    let rating = Math.random()*10;
    return rating.toFixed(1);
  },
  year: () => {
    const  dateOfFilm = '199' + Math.floor(Math.random()*10);
    return dateOfFilm;
  },
  duration: () => {
    const minutes = Math.floor(Math.random()*240) + 60;
    return minutes;
  },
  genre: () => {
    const arrGenre = ['Comedy', 'Thriller', 'Detective', 'Action', 'Drama'];
    const getRandomAmout = Math.round(Math.random()* (arrGenre.length));
    const finalGenres = [];
    for (let item of arrGenre) {
      if (Math.random() > 0.5) {
        finalGenres.push(item);
      }
    }
    return finalGenres;
  },
  picture: () => {
    const arrPicture = [`accused`,`blackmail`,`blue-blazes`,`fuga-da-new-york`,`moonrise`,`three-friends`];
    const getRandomAmout = Math.floor(Math.random() * ((arrPicture.length - 1) + 1));
    return '/images/posters/' + arrPicture[getRandomAmout] + '.jpg';
  },
  description: () => {
    const textForDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`;
    const arrOfSentences = textForDescription.split('.');
    const randomAmountSentences = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    const description = [];
    for (let i = 0; i < randomAmountSentences; i++) {
      const getRandomSentence = Math.floor(Math.random() * (arrOfSentences.length + 1));
      description.push(arrOfSentences[getRandomSentence]);
     }
    return description;
  },
  comments:() => {
    const setRandomAmountComments = Math.round(Math.random()*10);
    return setRandomAmountComments;
  },
  href:() => {    
    const arr = [`all`, `watchlist`, `history`, `favorites`];
    return arr[1];
  },
  nameFilter:() => {
    const arr = [`All movies` ,`Watchlist`, `History`, `Favorites`];
    for (let i = 0; i < arr.length; i++) {
      return arr[i];
    }  
  },
  amount:() => {
    let randomNumber = Math.floor(Math.random()*10);
    return randomNumber;
  }
};
const dataRender = {
  title: generateData.title(),
  text: generateData.text(),
  userrating: generateData.userrating(),
  rating: generateData.rating(),
  year: generateData.year(),
  duration:generateData.duration(),
  genre:generateData.genre(),
  picture:generateData.picture(),
  description:generateData.description(),
  comments:generateData.comments(),
  towatchlist: false,
  towatched: false,
  amount:generateData.amount(),
  nameFilter:generateData.nameFilter(),
  href:generateData.href(),
  arrOfTitles: ['Harry Potter','Intouchables','Inception','Fight Club'],
  watched: false,
};
const arrOfData = [];
const amountOfFilms = 5;
for (let i = 0; i < amountOfFilms; i++) {
  arrOfData.push({
    title: generateData.title(),
    text: generateData.text(),
    userrating: generateData.userrating(),
    rating: generateData.rating(),
    year: generateData.year(),
    duration:generateData.duration(),
    genre:generateData.genre(),
    picture:generateData.picture(),
    description:generateData.description(),
    comments:generateData.comments(),
    towatchlist: false,
    towatched: false,
    amount:generateData.amount(),
    nameFilter:generateData.nameFilter(),
    href:generateData.href(),
    arrOfTitles: ['Harry Potter','Intouchables','Inception','Fight Club']
  });
};
export {arrOfData,dataRender};

