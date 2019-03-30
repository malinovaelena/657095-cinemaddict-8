const AMOUNT_OF_CARDS = 15;


const generateData = {
  title: function() {
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
  duration: () =>  {
    const time = '1 h ' + Math.floor(Math.random()*59)+ ' m';
    return time;
  },
  genre: () =>  {
    const arrGenre = ['Comedy', 'Thriller', 'Detective', 'Action', 'Drama'];
    const getRandomAmout = Math.round(Math.random()* (arrGenre.length));
    return arrGenre[getRandomAmout];
  },
  picture:() => {
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
  }
};
const data = {
  title: '1955',
  text: generateData.text(),
  userrating: generateData.userrating(),
  rating: generateData.rating(),
  year: generateData.year(),
  duration:generateData.duration(),
  genre:generateData.genre(),
  picture:generateData.picture(),
  description:generateData.description(),
  comments:generateData.comments()
}
export {data};