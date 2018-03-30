/**
* @license MIT
* @author <steven@velozo.com>
*
* Timer
*/
var libLuxon = require('luxon');

class Timer
{
	constructor()
	{
		this.StartTime = false;
		this.EndTime = false;
	}

	// Set the start time for this timer
	setStart(pDateTime)
	{
		// If this is a Luxon DateTime, we are golden.
		if (typeof(pDateTime) === 'object')
			this.StartTime = pDateTime;
		else if (typeof(pDateTime) === 'string')
			this.StartTime = libLuxon.DateTime(pDateTime);
		else
			this.StartTime = libLuxon.DateTime.now();

		// If the EndTime isn't set or is less than the StartTime, reset it to StartTime.
		if (!this.EndTime || this.EndTime < this.StartTime)
			this.EndTime = this.StartTime;
	}

	// Set the end time for this timer
	setEnd(pDateTime)
	{
		// If this is a Luxon DateTime, we are golden.
		if (typeof(pDateTime) === 'object')
			this.EndTime = pDateTime;
		else if (typeof(pDateTime) === 'string')
			this.EndTime = libLuxon.DateTime(pDateTime);
		else
			this.EndTime = libLuxon.DateTime.now();

		// If the StartTime isn't set or is greater than the EndTime, reset it to EndTime.
		if (!this.EndTime || this.EndTime < this.EndTime)
			this.EndTime = this.StartTime;
	}

	start()
	{
		setStart(libLuxon.DateTime.now());
	}

	stop()
	{
		setEnd(libLuxon.DateTime.now());
	}

	duration()
	{
		if (!this.StartTime)
			this.setStart();

		return libLuxon.interval.fromDateTimes(this.StartTime, this.EndTime).toDuration();
	}
}

module.exports = Timer;