/**
* @license MIT
* @author <steven@velozo.com>
*
* (Timers) and (?Histograms)
*/
var libUnderscore = require('underscore');
var libLuxon = require('luxon');
var libQuantifier = require('quantifier');

class Telemetree
{
	constructor(pSettings)
	{
		this.settings = libUnderscore.extend(require(`${__dirname}/Telemetree-DefaultSettings.js`), (typeof(pSettings) === 'object') ? pSettings : {});

		this.timers = {};

		this.histograms = {};
	}

	// Create a timer that is not registered
	createUnregisteredTimer(pHash)
	{
		// Create a timer without a registration in the timers set
	}

	// Create a timer
	createTimer(pHash)
	{
		// Create a timer with a hash
	}

	// Create a histogram
	createHistogram(pHash)
	{
		// The histogram set also has a set of quantized buckets for events
	}

	// Add a count to a histogram
	incrementHistogram(pHash, pAmount)
	{
		// Increment a histogram by an amount
		let tmpAmount = (typeof(pAmount) === 'undefined') ? 1 : pAmount;

		if (!this.histograms.hasOwnProperty(pHash))
		{
			this.createHistogram(pHash);
		}

		return this.histograms[pHash].increment(tmpAmount);
	}
}

module.exports = Telemetree;