/**
* @license MIT
* @author <steven@velozo.com>
*
* Timer
*/

class Timer
{
	constructor()
	{
		this.StartTime = false;
		this.EndTime = false;

		// Set the start time automatically.
		this.start();
	}

	// Set the start time for this timer
	setStart(pDateTime)
	{
		// If this is a Luxon DateTime, we are golden.
		if (typeof(pDateTime) === 'number')
			this.StartTime = pDateTime;
		else if (typeof(pDateTime) === 'string')
		{
			this.StartTime = Date.parse(pDateTime);
		}
		else
			this.StartTime = Date.now();

		// If the EndTime isn't set or is less than the StartTime, reset it to StartTime.
		if (!this.EndTime || this.EndTime < this.StartTime)
			this.EndTime = this.StartTime;

		return true;
	}

	// Set the end time for this timer
	setEnd(pDateTime)
	{
		// If this is a Luxon DateTime, we are golden.
		if (typeof(pDateTime) === 'number')
			this.EndTime = pDateTime;
		else if (typeof(pDateTime) === 'string')
		{
			this.EndTime = Date.parse(pDateTime);
		}
		else
			this.EndTime = Date.now();

		// If the StartTime isn't set or is greater than the EndTime, reset it to EndTime.
		if (!this.EndTime || this.EndTime < this.EndTime)
			this.EndTime = this.StartTime;

		return true;
	}

	start()
	{
		this.setStart();
	}

	stop()
	{
		this.setEnd();
	}

	duration()
	{
		if (!this.StartTime)
			this.start();

		return (this.EndTime - this.StartTime);
	}
}

module.exports = Timer;