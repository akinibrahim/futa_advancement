
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock
WAF.core.restConnect.defaultService = "cors";
WAF.core.restConnect.baseURL = "http://wakanda_server_url:application_port";
	button3.click = function button3_click (event)// @startlock
	{// @endlock
		//$$("navigationView1").goToView();
		 window.location = "/menu.waPage/index-smartphone.html";
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button3", "click", button3.click, "WAF");
// @endregion
};// @endlock
