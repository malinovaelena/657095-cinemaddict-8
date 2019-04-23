class ModelCards {
    constructor(data) {
      this.id = data[`id`];
      this.title = data.film_info[`title`];
      this.alternativeTitle = data.film_info[`alternative_title`];
      this.actors = data.film_info[`actors`];
      this.age_rating = data.film_info[`age_rating`];
      this.description = data.film_info[`description`];
      this.director = data.film_info[`director`];
      this.genre = data.film_info[`genre`];
      this.poster = data.film_info[`poster`];
      this.rating = data.film_info[`total_rating`];
      this.writers = data.film_info[`writers`];
      this.duration = data.film_info[`runtime`];
      this.dateOfFilm = data.film_info.release[`date`];
      this.country = data.film_info.release[`release_country`];
      this.watchingDate = data.user_details[`watching_date`];
      this.userComments = data[`comments`];
      this.alreadyWatched = data.user_details[`already_watched`];
      this.favorite = data.user_details[`favorite`];
      this.watchlist = data.user_details[`watchlist`];
      this.personalRating = data.user_details[`personal_rating`];
    }
    toRAW() {
        return {
          'id': this.id,
          'user_details': {
            'watchlist': this.watchlist,
            'already_watched': this.alreadyWatched,
            'personal_rating': this.personalRating,
            'favorite': this.favorite
          },
          'comments': this.userComments,
        };
      }
  
    static parseCard(data) {
      return new ModelCards(data);
    }
  
    static parseCards(data) {
      return data.map(ModelCards.parseCard);
    }
};
export {ModelCards};