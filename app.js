'use strict';

var firstAndPikeEl = document.getElementById('firstandpike');
var seaTacAirportEl = document.getElementById('seatacairport');
var seattleCenterEl = document.getElementById('seattlecenter');
var capitolHillEl = document.getElementById('capitolhill');
var alkiEl = document.getElementById('alki');

var hoursOfOperation = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

var firstAndPike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custEachHour: [],
  cookiesEachHourOfOpperation: [],
  totalPerDay: 0,
  location: 'First and Pike',

  randomCustPerHour: function() {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      this.custEachHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      console.log(this.custEachHour);
    }
  },
  cookiesPerHour: function() {
    this.randomCustPerHour();
    for (var i = 0; i < hoursOfOperation.length; i++) {
      this.cookiesEachHourOfOpperation.push(Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust));
      this.totalPerDay += this.cookiesEachHourOfOpperation[i];
      console.log(this.cookiesEachHourOfOpperation);
    }
  },

  render: function() {
    this.cookiesPerHour();
    // 6am: 321 cookies
    // 7am: 72 cookies
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    firstAndPikeEl.appendChild(h3El);

    for (var i = 0; i < hoursOfOperation.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOfOperation[i] + ' ' + this.cookiesEachHourOfOpperation[i] + ' cookies';
      console.log(liEl);
      firstAndPikeEl.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalPerDay + ' cookies';
    firstAndPikeEl.appendChild(liEl);
  }
};

firstAndPike.render();

var seaTacAirport = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custEachHour: [],
  cookiesEachHourOfOpperation: [],
  totalPerDay: 0,
  location: 'SeaTac Airport',

  randomCustPerHour: function() {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      this.custEachHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      console.log(this.custEachHour);
    }
  },
  cookiesPerHour: function() {
    this.randomCustPerHour();
    for (var i = 0; i < this.custEachHour.length; i++) {
      this.cookiesEachHourOfOpperation.push(Math.floor(this.custEachHour[i] * this.avgCookiesPerCust));
      this.totalPerDay += (Math.floor(this.custEachHour[i] * this.avgCookiesPerCust));
      console.log(this.cookiesEachHourOfOpperation);
    }
  },

  render: function() {
    this.cookiesPerHour();
    this.randomCustPerHour();

    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    seaTacAirportEl.appendChild(h3El);

    for (var i = 0; i < this.cookiesEachHourOfOpperation.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOfOperation[i] + ' ' + this.cookiesEachHourOfOpperation[i] + ' cookies';
      console.log(liEl);
      seaTacAirportEl.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalPerDay + ' cookies';
    seaTacAirportEl.appendChild(liEl);
  }
};

seaTacAirport.render();

var seattleCenter = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custEachHour: [],
  cookiesEachHourOfOpperation: [],
  totalPerDay: 0,
  location: 'Seattle Center',

  randomCustPerHour: function() {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      this.custEachHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      console.log(this.custEachHour);
    }
  },
  cookiesPerHour: function() {
    this.randomCustPerHour();
    for (var i = 0; i < this.custEachHour.length; i++) {
      this.cookiesEachHourOfOpperation.push(Math.floor(this.custEachHour[i] * this.avgCookiesPerCust));
      this.totalPerDay += (Math.floor(this.custEachHour[i] * this.avgCookiesPerCust));
      console.log(this.cookiesEachHourOfOpperation);
    }
  },

  render: function() {
    this.cookiesPerHour();
    this.randomCustPerHour();

    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    seattleCenterEl.appendChild(h3El);

    for (var i = 0; i < this.cookiesEachHourOfOpperation.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOfOperation[i] + ' ' + this.cookiesEachHourOfOpperation[i] + ' cookies';
      console.log(liEl);
      seattleCenterEl.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalPerDay + ' cookies';
    seattleCenterEl.appendChild(liEl);
  }
};

seattleCenter.render();

var capitolHill = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  custEachHour: [],
  cookiesEachHourOfOpperation: [],
  totalPerDay: 0,
  location: 'Capitol Hill',

  randomCustPerHour: function() {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      this.custEachHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      console.log(this.custEachHour);
    }
  },
  cookiesPerHour: function() {
    this.randomCustPerHour();
    for (var i = 0; i < this.custEachHour.length; i++) {
      this.cookiesEachHourOfOpperation.push(Math.floor(this.custEachHour[i] * this.avgCookiesPerCust));
      this.totalPerDay += (Math.floor(this.custEachHour[i] * this.avgCookiesPerCust));
      console.log(this.cookiesEachHourOfOpperation);
    }
  },

  render: function() {
    this.cookiesPerHour();
    this.randomCustPerHour();

    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    capitolHillEl.appendChild(h3El);

    for (var i = 0; i < this.cookiesEachHourOfOpperation.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOfOperation[i] + ' ' + this.cookiesEachHourOfOpperation[i] + ' cookies';
      console.log(liEl);
      capitolHillEl.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalPerDay + ' cookies';
    capitolHillEl.appendChild(liEl);
  }
};

capitolHill.render();

var alki = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custEachHour: [],
  cookiesEachHourOfOpperation: [],
  totalPerDay: 0,
  location: 'Alki',

  randomCustPerHour: function() {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      this.custEachHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      console.log(this.custEachHour);
    }
  },
  cookiesPerHour: function() {
    this.randomCustPerHour();
    for (var i = 0; i < this.custEachHour.length; i++) {
      this.cookiesEachHourOfOpperation.push(Math.floor(this.custEachHour[i] * this.avgCookiesPerCust));
      this.totalPerDay += (Math.floor(this.custEachHour[i] * this.avgCookiesPerCust));
      console.log(this.cookiesEachHourOfOpperation);
    }
  },

  render: function() {
    this.cookiesPerHour();
    this.randomCustPerHour();

    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    alkiEl.appendChild(h3El);

    for (var i = 0; i < this.cookiesEachHourOfOpperation.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOfOperation[i] + ' ' + this.cookiesEachHourOfOpperation[i] + ' cookies';
      console.log(liEl);
      alkiEl.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalPerDay + ' cookies';
    alkiEl.appendChild(liEl);
  }
};

alki.render();
