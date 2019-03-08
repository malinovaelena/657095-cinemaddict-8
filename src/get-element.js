const getFilmCard = () => {
   title:['Harry Potter',
     'Intouchables',
     'Inception',
     'Fight Club',
     'Knockin\' on Heaven\'s Door',
   'Pulp Fiction',
   'Interstellar',
     'Lock, Stock and Two Smoking Barrels',
   'The Matrix',
   'Catch Me If You Can',
   'The Departed',
   'Snatch.',
   'Shutter Island',
   'The Dark Knight'
   ],
   rating: Math.round(Math.random()*10),
   year:1995,
   duration: '1 h 26 m',
   genre: () {
    const arrGenre = ['Comedy', 'Thriller', 'Detective', 'Action', 'Drama'];
    const getRandomAmout = Math.round(Math.random()* (arrGenre.length));
    return arrGenre[getRandomAmout];
  },
    picture:(){
    const arrPicture = [`accused`,`blackmail`,`blue-blazes`,`fuga-da-new-york`,`moonrise`,`three-friends`];
    const getRandomAmout = Math.round(Math.random()* (arrPicture.length));
    return 'public/images/posters/' + arrPicture[getRandomAmout] + '.jpg';
  },
    decription: (){
     const descriptionArr = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.
      Fusce tristique felis at fermentum pharetra.
      Aliquam id orci ut lectus varius viverra.
      Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
      Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
      Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
      Sed sed nisi sed augue convallis suscipit in sed felis.
      Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.
      In rutrum ac purus sit amet tempus.`.split('.');
     const getRandomAmount = Math.round(Math.random()*2)+1);
      for(let i = 0; i < getRandomAmount; i++) {
        const getRandomSentence = Math.round(Math.random()*(descriptionArr.length - 1)+1);
        return descriptionArr[getRandomSentence];
      }
  },
    comments:Math.round(Math.random()*10);
};
