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

var cityTempData = [
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
                ];

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
			var cities = $('#countryCombo option:selected');
	        var selected = [];
	        $(cities).each(function(index, brand){
	            selected.push([$(this).val()]);
	        });

	        $('#cityCombo').multiselect('dataprovider', []);
	        var cityValues = []; 
	        for (var i = 0; i < selected.length; i++) {
				for (var j = 0; j < cityData.length; j++) {
					if(cityData[j].country.value == selected[i][0]) {
						cityValues = cityValues.concat(cityData[j].country.cities);
					}
				}
				
			}
	        $('#cityCombo').multiselect('dataprovider', cityValues);
//			changeCity(option, checked);
		}
	});
	$('#countryCombo').multiselect('dataprovider', countryData);
	
	$('#cityCombo').multiselect({
		includeSelectAllOption : true,
		buttonClass : 'btn btn-default col-sm-12 btn-sm',
		numberDisplayed : 1,
		buttonWidth : '100%',
		nonSelectedText : "All",
		onChange : function(option, checked) {
		}
	});
	$('#cityCombo').multiselect('dataprovider', cityTempData);
	
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

var barData = "";
// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {
	'packages' : [ 'corechart' ]
});
google.load("visualization", "1.1", {
	packages : [ "bar" ]
});
google.load("visualization", "1.1", {
	packages : [ "timeline" ]
});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);


function drawChart() {

//	var pieChart = new google.visualization.PieChart(
//			document.getElementById('pie-chart_div'));
//	pieChart.draw(jsondata, pieOptions);
//
//	var barChart = new google.visualization.BarChart(
//			document.getElementById('bar-chart_div'));
//	barChart.draw(jsondata, barOptions);
}

function changeCity(option, checked) {
	console.info(option);
	console.info(checked);
}