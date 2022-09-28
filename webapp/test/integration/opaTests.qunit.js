/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/luxottica/fiori/test/testGit/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});