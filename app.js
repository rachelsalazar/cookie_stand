'use strict';

var cookieTable = document.getElementById('cookietable');
var cookieInputForm = document.getElementById('cookieinputform');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores = [];
var dailyTotalAllLocations = 0;

function Store(minCustPerHour, maxCustPerHour, avgCookiesPerCust, storeLocation) {
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHour = [];
  this.cookiesEachHourOfOpperation = [];
  this.totalPerDay = 0;
  this.storeLocation = storeLocation;
  this.total = 0;
  // console.log(this.maxCustPerHour);
  allStores.push(this);
};
Store.prototype.randomCustPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.custEachHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
    // console.log(this.custEachHour);
  }
};
Store.prototype.cookiesPerHour = function() {
  this.randomCustPerHour();
  for (var i = 0; i < hours.length; i++) {
    this.cookiesEachHourOfOpperation.push(Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust));
    this.totalPerDay += this.cookiesEachHourOfOpperation[i];
    // console.log(this.cookiesEachHourOfOpperation);
  }
};
Store.prototype.render = function() {
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
  tDataEl = document.createElement('td');
  tDataEl.textContent = this.totalPerDay;
  tRowEl.appendChild(tDataEl);
  cookieTable.appendChild(tRowEl);
};

function renderAllStores() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

var tRowEl;

function tableHeader() {
  tRowEl = document.createElement('tr');
  var tHeaderEl = document.createElement('th');
  tHeaderEl.textContent = '';
  tRowEl.appendChild(tHeaderEl);
  for (var i = 0; i < hours.length; i++) {
    tHeaderEl = document.createElement('th');
    tHeaderEl.textContent = hours[i];
    tRowEl.appendChild(tHeaderEl);
  }
  tHeaderEl = document.createElement('th');
  tHeaderEl.textContent = 'Total';
  tRowEl.appendChild(tHeaderEl);
  cookieTable.appendChild(tRowEl);

  renderAllStores();
}

function tableFooter() {
  var tRowEl = document.createElement('tr');
  tDataEl = document.createElement('td');
  tDataEl.textContent = 'Total Each Hour';
  tRowEl.appendChild(tDataEl);

  for (var i = 0; i < hours.length; i++) {
    var total = 0;
    for (var j = 0; j < allStores.length; j++) {
      total += allStores[j].cookiesEachHourOfOpperation[i];
    }
    var tDataEl = document.createElement('td');
    tDataEl.textContent = total;
    tRowEl.appendChild(tDataEl);
    dailyTotalAllLocations += total;
  }
  tDataEl = document.createElement('td');
  tDataEl.textContent = dailyTotalAllLocations;
  tRowEl.appendChild(tDataEl);
  cookieTable.appendChild(tRowEl);
};


function handleFormSubmit(event) {
  event.preventDefault();

  if ((!event.target.inputlocation.value || !event.target.mincust.value) || (!event.target.maxcust.value || !event.target.cookies.value)) {
    return alert('Fields cannot be empty.');
  }

  var inputlocation = event.target.inputlocation.value;
  var inputMinCust = parseInt(event.target.mincust.value);
  var inputMaxCust = parseInt(event.target.maxcust.value);
  var inputCookies = parseFloat(event.target.cookies.value);

  new Store(inputMinCust, inputMaxCust, inputCookies, inputlocation);

  event.target.inputlocation.value = null;
  event.target.mincust.value = null;
  event.target.maxcust.value = null;
  event.target.cookies.value = null;

  cookieTable.innerHTML = '';
  for (var i = 0; i < allStores.length;i++){
    allStores[i].totalPerDay = 0;
    dailyTotalAllLocations = 0;
  }
  tableHeader();
  tableFooter();
}

//this is the code that runs
new Store(23, 65, 6.3, 'First and Pike');
new Store(3, 24, 1.2, 'SeaTac Airport');
new Store(11, 38, 3.7, 'Seattle Center');
new Store(20, 38, 2.3, 'Capitol Hill');
new Store(2, 16, 4.6, 'Alki');

tableHeader();

tableFooter();


cookieInputForm.addEventListener('submit', handleFormSubmit);
