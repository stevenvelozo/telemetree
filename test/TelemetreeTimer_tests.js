/**
* Unit tests for Telemetree Timers
*
* @license     MIT
*
* @author      Steven Velozo <steven@velozo.com>
*/
var Chai = require("chai");
var Expect = Chai.expect;
var Assert = Chai.assert;

// The Teletimer is a distant cousin of the Teletubby.
var libTeletimers = require('../source/Telemetree-Timer.js');

suite
(
	'Telemetree Timers',
	function()
	{
		var testTelemetree = false;

		setup
		(
			function()
			{
			}
		);

		suite
		(
			'Object Sanity',
			function()
			{
				test
				(
					'The class should initialize itself into a happy little object.',
					function()
					{
						testTimer = new libTeletimers();
						Expect(testTimer).to.be.an('object', 'Teletimers should initialize as an object directly from the require statement.');
					}
				);
				test
				(
					'Basic timing',
					function(fDone)
					{
						testTimer = new libTeletimers();
						setTimeout(function()
						{
							testTimer.stop();
							Expect(testTimer.duration()).to.be.greaterThan(100);
							fDone();
						},100);
					}
				);
				test
				(
					'Explicit start time',
					function(fDone)
					{
						testTimer = new libTeletimers();
						testTimer.setStart('2018/01/01');
						// This test was written in August of 2018, so we expect the
						// duration to be longer than the seconds in 230 days
						let tmpExpectedDuration = 230 * 24 * 60 * 60 * 1000;
						testTimer.stop();
						Expect(testTimer.duration()).to.be.greaterThan(tmpExpectedDuration);
						fDone();
					}
				);
				test
				(
					'Explicit everything',
					function(fDone)
					{
						testTimer = new libTeletimers();
						testTimer.setStart('2018/01/01');
						testTimer.setEnd('2018/01/31');
						// There are 30 days between midnight January 1 and midnight January 31
						let tmpExpectedDuration = 30 * 24 * 60 * 60 * 1000;
						Expect(testTimer.duration()).to.equal(tmpExpectedDuration);
						fDone();
					}
				);
			}
		);
	}
);