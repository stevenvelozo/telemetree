/**
* Unit tests for Telemetree
*
* @license     MIT
*
* @author      Steven Velozo <steven@velozo.com>
*/
var Chai = require("chai");
var Expect = Chai.expect;
var Assert = Chai.assert;

var libTelemetree = require('../source/Telemetree.js');

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
						testTelemetree = new libTelemetree();
						Expect(testTelemetree).to.be.an('object', 'Telemetree should initialize as an object directly from the require statement.');
						Expect(testTelemetree).to.have.a.property('settings')
						.that.is.a('object');
					}
				);
				test
				(
					'...',
					function(fDone)
					{
						testTelemetree = new libTelemetree();
						Expect(testTelemetree).to.have.a.property('settings')
						.that.is.a('object');
						fDone();
					}
				);
			}
		);
	}
);