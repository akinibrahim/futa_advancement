
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var row4 = {};	// @container
	var row1 = {};	// @container
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$$("navigationView1").goToNextView();
	};// @lock

	row4.click = function row4_click (event)// @startlock
	{// @endlock
		// Add your code here
		$$("navigationView1").goToView(3);
	};// @lock

	row1.click = function row1_click (event)// @startlock
	{// @endlock
		$$("navigationView1").goToNextView();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("row4", "click", row4.click, "WAF");
	WAF.addListener("row1", "click", row1.click, "WAF");
// @endregion
};// @endlock
