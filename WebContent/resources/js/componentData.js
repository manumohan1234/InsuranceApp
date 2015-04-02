/**
 * 
 */
var countryData = [{"label":"India", "value":"India"},
                   {"label":"USA", "value":"USA"},
                   {"label":"Italy", "value":"Italy"},
                   {"label":"France", "value":"France"}];

var groupByData = [{"label":"Country", "value":"country"},
                   {"label":"City", "value":"city"},
                   {"label":"Policy Type", "value":"policyType"},
                   {"label":"Agents", "value":"Agents"}];

var policyData =  [{"label":"Medical","value":"Medical"},
                   {"label":"Theft","value":"Theft"},
                   {"label":"Life","value":"Life"}];

var agentData = [{"label":"Sreehari", "value":"Sreehari"},
                 {"label":"Vinay", "value":"Vinay"},
                 {"label":"Manu", "value":"Manu"},
                 {"label":"Sreekesh", "value":"Sreekesh"},
                 {"label":"Vishnu", "value":"Vishnu"},
                 {"label":"Arjun", "value":"Arjun"},
                 {"label":"Ashwin", "value":"Ashwin"},
                 {"label":"Jyothis", "value":"Jyothis"},
                 {"label":"Varshah", "value":"Varshah"},
                 {"label":"Karthika", "value":"Karthika"},];

var cityData = [
                {
                    "country": {
                        "label": "India",
                        "value": "India",
                        "cities": [
                            {
                                "label": "Trivandrum",
                                "value": "Trivandrum"
                            },
                            {
                                "label": "Banglore",
                                "value": "Banglore"
                            },
                            {
                                "label": "Mumbai",
                                "value": "Mumbai"
                            },
                            {
                                "label": "Hyderabad",
                                "value": "Hyderabad"
                            },
                            {
                                "label": "Pune",
                                "value": "Pune"
                            }
                        ]
                    }
                },
                {
                    "country": {
                        "label": "USA",
                        "value": "USA",
                        "cities": [
                            {
                                "label": "New York",
                                "value": "New York"
                            },
                            {
                                "label": "Los Angeles",
                                "value": "Los Angeles"
                            },
                            {
                                "label": "Chicago",
                                "value": "Chicago"
                            },
                            {
                                "label": "Houston",
                                "value": "Houston"
                            },
                            {
                                "label": "San Francisco",
                                "value": "San Francisco"
                            }
                        ]
                    }
                },
                {
                    "country": {
                        "label": "Italy",
                        "value": "Italy",
                        "cities": [
                            {
                                "label": "Rome",
                                "value": "Rome"
                            },
                            {
                                "label": "Venice",
                                "value": "Venice"
                            },
                            {
                                "label": "Milan",
                                "value": "Milan"
                            },
                            {
                                "label": "Naples",
                                "value": "Naples"
                            },
                            {
                                "label": "Florence",
                                "value": "Florence"
                            }
                        ]
                    }
                },
                {
                    "country": {
                        "label": "France",
                        "value": "France",
                        "cities": [
                            {
                                "label": "Paris",
                                "value": "Paris"
                            },
                            {
                                "label": "Marseille",
                                "value": "Marseille"
                            },
                            {
                                "label": "Lyon",
                                "value": "Lyon"
                            },
                            {
                                "label": "Toulouse",
                                "value": "Toulouse"
                            },
                            {
                                "label": "Strasbourg",
                                "value": "Strasbourg"
                            }
                        ]
                    }
                }
            ];



$(function() {
	$('#countryCombo').multiselect({
		includeSelectAllOption : true,
		buttonClass : 'btn btn-default col-sm-12 btn-sm',
		numberDisplayed : 1,
		buttonWidth : '100%',
		nonSelectedText : "All",
		dataprovider:countryData,
		onChange : function(option, checked) {
		}
	});
	$('#countryCombo').multiselect('dataprovider', countryData);
	
	$('#cityCombo').multiselect({
		includeSelectAllOption : true,
		buttonClass : 'btn btn-default col-sm-12 btn-sm',
		numberDisplayed : 1,
		buttonWidth : '100%',
		nonSelectedText : "All",
		dataprovider:cityData,
		onChange : function(option, checked) {
		}
	});
	$('#cityCombo').multiselect('dataprovider', cityData);
	
	$('#policyTypeCombo').multiselect({
		includeSelectAllOption : true,
		buttonClass : 'btn btn-default col-sm-12 btn-sm',
		numberDisplayed : 1,
		buttonWidth : '100%',
		nonSelectedText : "All",
		dataprovider:policyData,
		onChange : function(option, checked) {
		}
	});
	$('#policyTypeCombo').multiselect('dataprovider', policyData);
	
	$('#agentsCombo').multiselect({
		includeSelectAllOption : true,
		buttonClass : 'btn btn-default col-sm-12 btn-sm',
		numberDisplayed : 1,
		buttonWidth : '100%',
		nonSelectedText : "All",
		dataprovider:agentData,
		onChange : function(option, checked) {
		}
	});
	$('#agentsCombo').multiselect('dataprovider', agentData);
	
	$('#groupByCombo').multiselect({
		includeSelectAllOption : true,
		buttonClass : 'btn btn-default col-sm-12 btn-sm',
		numberDisplayed : 1,
		buttonWidth : '100%',
		nonSelectedText : "All",
		dataprovider:groupByData,
		onChange : function(option, checked) {
		}
	});
	$('#groupByCombo').multiselect('dataprovider', groupByData);
	
    $('#datetimepicker6').datetimepicker();
    $('#datetimepicker7').datetimepicker();
    $("#datetimepicker6").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });
});
