/**
* @license MIT
* @author <steven@velozo.com>
*
* (Timers) and (?Histograms)
*/
var libQuantifier = require('quantifier');

class Histogram
{
	constructor()
	{
		// This does not cross over years yet, but should....
		this.Year = false;
		// 0 - 364
		this.Days = require('quantifier');
		// 0 - 23
		this.Hours = require('quantifier');
		// 0 - 59
 		this.Minutes = require('quantifier');
		// 0 - 59
		this.Seconds = require('quantifier');
	}

	checkTimeSpans

	increment(pValue)
	{
		// Add to histograms of hours, minutes and seconds.
	}
}

module.exports = Histogram;