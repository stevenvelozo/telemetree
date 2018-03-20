/**
* @license MIT
* @author <steven@velozo.com>
*/
var libUnderscore = require('underscore');
var libQuantifier = require('quantifier');

class Telemetree
{
	constructor(pSettings)
	{
		this.settings = libUnderscore.extend(require(`${__dirname}/Telemetree-DefaultSettings.js`), (typeof(pSettings) === 'object') ? pSettings : {});

		this.timers = {};

		this.histograms = (
		{
			Seconds: libQuantifier.new(),
			Minutes: libQuantifier.new(),
			Hours: libQuantifier.new()
		})
	}

	// Create a timer that is not registered
	createUnregisteredTimer(pName)
	{

	}

	// Create a timer
	createTimer(pName)
	{

	}

	// 
}

module.exports = Telemetree;