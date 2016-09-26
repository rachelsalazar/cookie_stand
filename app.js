'use strict';

var firstAndPikeEl = document.getElementById(firstAndPike);

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custEachHour: [],
  cookiesEachHourOfOpperation: [],
  totalPerDay: 0,
  location: 'First and Pike',

  randomCustPerHour: function(minCustPerHour, maxCustPerHour) {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      this.custEachHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      console.log(this.minCustPerHour);
    }
  },
  cookiesPerHour: function(randomCustPerHour, avgCookiesPerCust) {
    firstAndPike.randomCustPerHour();
    for (var i = 0; i < this.custEachHour.length; i++) {
      this.cookiesEachHourOfOpperation.push(Math.floor(this.custEachHour[i] * this.avgCookiesPerCust));
      console.log(this.cookiesEachHourOfOpperation);
    }
  },
  totalCookiesPerDay: function(cookiesEachHourOfOpperation) {
    for (var i = 0; i < this.cookiesEachHourOfOpperation.length; this.totalPerDay += this.cookiesEachHourOfOpperation[i++]) {
      console.log(this.totalPerDay);
    }
  }
};

firstAndPike.cookiesPerHour();
firstAndPike.totalCookiesPerDay();
