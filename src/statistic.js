import Chart from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Component} from './component';

class Statistic extends Component {
    constructor(arrOfData) {
        super();
        this._towatched = arrOfData.filter((it) => it.alreadyWatched === true);

        this._onStatisticRender = this._onStatisticRender.bind(this);
        this._onStatisticWeekClick = this._onStatisticWeekClick.bind(this);
        this._onStatisticDayClick = this._onStatisticDayClick.bind(this);
        this._onStatisticMonthClick = this._onStatisticMonthClick.bind(this);
        this._onStatisticYearClick = this._onStatisticYearClick.bind(this);
        this._onStatisticClick = this._onStatisticClick.bind(this);

        this._totalDuration = this._towatched.reduce((acc,item) => acc + item.duration, 0);
        this._watchingDateArr = arrOfData.filter((it) => it.watchingDate !== null);//массив карточек, которые выбраны по дате просмотра не!равной нулю.
        
        this._arrWeek = arrOfData.filter((it) => {
            return (Date.now() - it.watchingDate) <= 604800016;
          });
        this._arrDay = arrOfData.filter((it) => {
            return (Date.now() - it.watchingDate) <= 86400000;
          });
        this._arrMonth = arrOfData.filter((it) => {
            return (Date.now() - it.watchingDate) <= 2629800000;
          });
        //this.MONTH = 2629800000;
        //this.WEEK = 604800016;
        //this.DAY = 86400000;
    }

    grauphStatistic(_towatched) {
        const genreMap = {};
        for (let film of this._towatched) {
            for (let genre of film.genre) {
                if (genreMap[genre] === undefined) {
                    genreMap[genre] = 1;
                } else {
                    genreMap[genre] += 1;
                }
            }
        }
        const arrGenreMap = Object.entries(genreMap);
        const newArr = arrGenreMap.sort((a,b) => {
            return b[1] - a[1];
        });
            const arrayOfKeys = [];
            const arrayOfValues = [];
            newArr.forEach((item)=> {
                arrayOfKeys.push(item[0]);
                arrayOfValues.push(item[1]);
            });

        const statisticCtx = document.querySelector(`.statistic__chart`);
        const BAR_HEIGHT = 50;
        statisticCtx.height = BAR_HEIGHT * 5;
        const myChart = new Chart(statisticCtx, {
            plugins: [ChartDataLabels],
            type: `horizontalBar`,
            data: {
            labels:arrayOfKeys,
             
            datasets: [{
                data:arrayOfValues,
                backgroundColor: `#ffe800`,
                hoverBackgroundColor: `#ffe800`,
                anchor: `start`
            }]
            },
            options: {
            plugins: {
                datalabels: {
                font: {
                    size: 20
                },
                color: `#ffffff`,
                anchor: 'start',
                align: 'start',
                offset: 40,
                }
            },
            scales: {
                yAxes: [{
                ticks: {
                    fontColor: `#ffffff`,
                    padding: 100,
                    fontSize: 20
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                barThickness: 24
                }],
                xAxes: [{
                ticks: {
                    display: false,
                    beginAtZero: true
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                }],
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
            }
        })
        return myChart;
    }
    set onStatisticRender(fn) {
        this._onStatisticRender = fn;
    }
    _onStatisticRender(event) {
        event.preventDefault();
        return typeof this._onStatisticRender === `function` && this._onStatisticRender();
    }


    set onStatisticDayClick(fn) {
        this._onStatisticDayClick = fn;
    }
    _onStatisticDayClick() { 
        return typeof this._onStatisticDayClick === `function` && this._onStatisticDayClick();
    }



    set onStatisticWeekClick(fn) {
        this._onStatisticWeekClick = fn;
    }
    _onStatisticWeekClick() {
        return typeof this._onStatisticWeekClick === `function` && this._onStatisticWeekClick();
    }



    set onStatisticMonthClick(fn) {
        this._onStatisticMonthClick = fn;
    }
    _onStatisticMonthClick() {
        return typeof this._onStatisticMonthClick === `function` && this._onStatisticMonthClick();
    }


    set onStatisticYearClick(fn) {
        this._onStatisticYearClick = fn;
    }
    _onStatisticYearClick() {
        return typeof this._onStatisticYearClick === `function` && this._onStatisticYearClick();
    }

    set onStatisticClick(fn) {
        this._onStatisticClick = fn;
    }   
    _onStatisticClick() {
        return typeof this._onStatisticClick === `function` && this._onStatisticClick();
    }



    render() {
        this._element = Component.createElement(this.template);
        this.bind();
        return this._element;
      }
    unrender() {
        this.unbind();
        this._element.remove();
        this._element = null;
    }
    get element() {
        return this._element;
      }
    bind() {
        document.querySelector(`.main-navigation__item--additional`).addEventListener(`click`, this._onStatisticRender);  
    }
    unbind() {
        document.querySelector(`.main-navigation__item--additional`).removeEventListener(`click`, this._onStatisticRender);
    }
    bindData() {
        this._element.querySelector(`#statistic-all-time`).addEventListener(`click`, this._onStatisticClick);
        this._element.querySelector(`#statistic-month`).addEventListener(`click`, this._onStatisticMonthClick);
        this._element.querySelector(`#statistic-week`).addEventListener(`click`, this._onStatisticWeekClick);
        this._element.querySelector(`#statistic-today`).addEventListener(`click`,this._onStatisticDayClick);
        this._element.querySelector(`#statistic-year`).addEventListener(`click`,this._onStatisticYearClick);
    }
    unbindData() {
        this._element.querySelector(`#statistic-all-time`).removeEventListener(`click`, this._onStatisticClick);
        this._element.querySelector(`#statistic-month`).removeEventListener(`click`, this._onStatisticMonthClick);
        this._element.querySelector(`#statistic-week`).removeEventListener(`click`, this._onStatisticWeekClick);
        this._element.querySelector(`#statistic-today`).removeEventListener(`click`,this._onStatisticDayClick);
        this._element.querySelector(`#statistic-year`).removeEventListener(`click`,this._onStatisticYearClick);
    }
    update(arrOfData) {
        this._towatched = arrOfData.filter((it) => it.alreadyWatched === true);
        this._totalDuration = this._totalDuration = this._towatched.reduce((acc,item) => acc + item.duration, 0);
        const genreMap = {};
        for (let film of this._towatched) {
            for (let genre of film.genre) {
                if (genreMap[genre] === undefined) {
                    genreMap[genre] = 1;
                } else {
                    genreMap[genre] += 1;
                }
            }
        }
        const arrGenreMap = Object.entries(genreMap);
        const newArr = arrGenreMap.sort((a,b) => {
            return b[1] - a[1];
        });
            const arrayOfKeys = [];
            const arrayOfValues = [];
            newArr.forEach((item)=> {
                arrayOfKeys.push(item[0]);
                arrayOfValues.push(item[1]);
            });
    }


    get template() {
        const genreMap = {};
        for (let film of this._towatched) {
            for (let genre of film.genre) {
                if (genreMap[genre] === undefined) {
                    genreMap[genre] = 1;
                } else {
                    genreMap[genre] += 1;
                }
            }
        }
        const genreMapKeys = Object.keys(genreMap);
        return `<section class="statistic">
        <p class="statistic__rank">Your rank <span class="statistic__rank-label">Sci-Fighter</span></p>
      
        <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
          <p class="statistic__filters-description">Show stats:</p>
      
          <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-all-time" value="all-time"}>
          <label for="statistic-all-time" class="statistic__filters-label">All time</label>
      
          <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-today" value="today">
          <label for="statistic-today" class="statistic__filters-label">Today</label>
      
          <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-week" value="week">
          <label for="statistic-week" class="statistic__filters-label">Week</label>
      
          <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-month" value="month">
          <label for="statistic-month" class="statistic__filters-label">Month</label>
      
          <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-year" value="year">
          <label for="statistic-year" class="statistic__filters-label">Year</label>
        </form>
      
        <ul class="statistic__text-list">
          <li class="statistic__text-item">
            <h4 class="statistic__item-title">You watched</h4>
    <p class="statistic__item-text">${this._towatched.length}<span class="statistic__item-description">movies</span></p>
          </li>
          <li class="statistic__text-item">
            <h4 class="statistic__item-title">Total duration</h4>
    <p class="statistic__item-text">${Math.floor(this._totalDuration/60)}<span class="statistic__item-description">h</span>${this._totalDuration % 60}<span class="statistic__item-description">m</span></p>
          </li>
          <li class="statistic__text-item">
            <h4 class="statistic__item-title">Top genre</h4>
            <p class="statistic__item-text">${genreMapKeys[0]}</p>
          </li>
        </ul>
      
        <div class="statistic__chart-wrap">
          <canvas class="statistic__chart" width="1000"></canvas>
        </div>
      
      </section>`;
    }
};
export{Statistic};