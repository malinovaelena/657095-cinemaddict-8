//  модуль отправки и получения данных с сервера
//ниже скопированно из демонстрации
 import {ModelCards} from './model-data';

 const Method = {
   GET: `GET`,
   POST: `POST`,
   PUT: `PUT`,
   DELETE: `DELETE`
 };
 
 const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  };

 const toJSON = (response) => {
   return response.json();
 };

class API {
   constructor({endPoint, authorization}) {
     this._endPoint = endPoint;
     this._autorization = authorization;
   }
 
   getCards() {
     return this._load({url: `movies`})
       .then(toJSON)
       .then(ModelCards.parseCards);
   }
 
   createCard({card}) {
     return this._load({
       url: `movies`,
       method: Method.POST,
       body: JSON.stringify(card),
       headers: new Headers({'Content-Type': `application/json`})
     })
       .then(toJSON)
       .then(ModelCards.parseCard);
   }
 
   updateCard({id, data}) {
     return this._load({
       url: `movies/${id}`,
       method: Method.PUT,
       body: JSON.stringify(data),
       headers: new Headers({'Content-Type': `application/json`})
     })
       .then(toJSON)
       .then(ModelCards.parseCard);
   }
   deleteCard({id}) {
     return this._load({url: `movies/${id}`, method: Method.DELETE});
   }
 
 
   _load({url, method = Method.GET, body = null, headers = new Headers()}) {
 
     headers.append(`Authorization`, this._autorization);
 
     return fetch(`${this._endPoint}/${url}`, {method, body, headers})
       .then(checkStatus)
       .catch((err) => {
         console.error(`fetch error: ${err}`);
         //const errorMessage = `Something went wrong while loading movies. Check your connection or try again later`;
         //const filmContainer = document.querySelector(`.films-list__container`);
         //filmContainer.insertAdjanceHTML(`beforeEnd`,errorMessage);
         throw err;
       });
   }
 };
 export {API};