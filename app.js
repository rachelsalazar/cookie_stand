'use strict';

var cookieTable = document.getElementById('cookietable');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores = [];
var totalPerDay = 0;
console.log(totalPerDay);

function Store(minCustPerHour, maxCustPerHour, avgCookiesPerCust, storeLocation) {
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHour = [];
  this.cookiesEachHourOfOpperation = [];
  this.storeLocation = storeLocation;
  console.log(this.maxCustPerHour);
  this.randomCustPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.custEachHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      console.log(this.custEachHour);
    }
  };
  this.cookiesPerHour = function() {
    this.randomCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.cookiesEachHourOfOpperation.push(Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust));
      totalPerDay += this.cookiesEachHourOfOpperation[i];
      console.log(this.cookiesEachHourOfOpperation);
    }
  };
  this.render = function() {
    this.cookiesPerHour();
    var tRowEl = document.createElement('tr');
    var tDataEl = document.createElement('td');
    tDataEl.textContent = this.storeLocation;
    tRowEl.appendChild(tDataEl);
    cookieTable.appendChild(tRowEl);
    for (var i = 0; i < hours.length; i++) {
      tDataEl = document.createElement('td');
      tDataEl.textContent = this.cookiesEachHourOfOpperation[i];
      tRowEl.appendChild(tDataEl);
    }
    // tRowEl = document.createElement('tr');
    tDataEl = document.createElement('td');
    tDataEl.textContent = totalPerDay;
    tRowEl.appendChild(tDataEl);
    cookieTable.appendChild(tRowEl);
  };
  allStores.push(this);
};

new Store(23, 65, 6.3, 'First and Pike');
new Store(3, 24, 1.2, 'SeaTac Airport');
new Store(11, 38, 3.7, 'Seattle Center');
new Store(20, 38, 2.3, 'Capitol Hill');
new Store(2, 16, 4.6, 'Alki');

function table() {
  var tRowEl = document.createElement('tr');
  var tHeaderEl = document.createElement('th');
  tHeaderEl.textContent = '';
  tRowEl.appendChild(tHeaderEl);
  for (i = 0; i < hours.length; i++) {
    tHeaderEl = document.createElement('th');
    tHeaderEl.textContent = hours[i];
    tRowEl.appendChild(tHeaderEl);
  }
  tHeaderEl = document.createElement('th');
  tHeaderEl.textContent = 'Total';
  tRowEl.appendChild(tHeaderEl);
  cookieTable.appendChild(tRowEl);

  for (var i = 0; i < allStores.length; i++) {
    console.log(i);
    allStores[i].render();
  }
}
table();
