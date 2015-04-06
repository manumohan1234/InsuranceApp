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

var genderData = [{"label":"Male", "value":"male"},
                   {"label":"Female", "value":"female"}];

var policyData =  [{"label":"Medical","value":"Medical"},
                   {"label":"Theft","value":"Theft"},
                   {"label":"Life","value":"Life"}];

var agentData = [{"label":"Agent 1", "value":"Agent 1"},
                 {"label":"Agent 2", "value":"Agent 2"},
                 {"label":"Agent 3", "value":"Agent 3"},
                 {"label":"Agent 4", "value":"Agent 4"},
                 {"label":"Agent 5", "value":"Agent 5"},
                 {"label":"Agent 6", "value":"Agent 6"},
                 {"label":"Agent 7", "value":"Agent 7"},
                 {"label":"Agent 8", "value":"Agent 8"},
                 {"label":"Agent 9", "value":"Agent 9"},
                 {"label":"Agent 10", "value":"Agent 10"},];

var statusData = [{"label":"Approved","value":"Approved"},
                  {"label":"Cancelled","value":"Cancelled"},
                  {"label":"Pending","value":"Pending"}];

var selectorData = [ {"label":">","value":">"},
                     {"label":"<","value":"<"},
                     {"label":">=","value":">="},
                     {"label":"<=","value":"<="}];


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
                    },
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
                    },
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
                    },
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
var salesData =  [
                  {"label":">","value":">"},
                  {"label":"<","value":"<"},
                  {"label":">=","value":">="},
                  {"label":"<=","value":"<="}
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
			var selectedAgents = $('#agentsCombo option:selected');
			if(selectedAgents.size() > 0) {
				$("#salesFilterDiv").show();
				$("#soldFilterDiv").show();
			} else {
				$("#salesFilterDiv").hide();
				$("#soldFilterDiv").hide();
			}
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
	
	$('#genderCombo').multiselect({
		includeSelectAllOption : true,
		buttonClass : 'btn btn-default col-sm-12 btn-sm',
		numberDisplayed : 1,
		buttonWidth : '100%',
		nonSelectedText : "All",
		dataprovider:groupByData,
		onChange : function(option, checked) {
		}
	});
	$('#genderCombo').multiselect('dataprovider', genderData);

	$('#statusCombo').multiselect({
		includeSelectAllOption : true,
		buttonClass : 'btn btn-default col-sm-12 btn-sm',
		numberDisplayed : 1,
		buttonWidth : '100%',
		nonSelectedText : "All",
		dataprovider:statusData,
		onChange : function(option, checked) {
		}
	});
	$('#statusCombo').multiselect('dataprovider', statusData);

	/*$('#salesCombo').multiselect({
		includeSelectAllOption : false,
		buttonClass : 'btn btn-default col-sm-12 btn-sm',
		numberDisplayed : 1,
		buttonWidth : '100%',
		nonSelectedText : "All",
		dataprovider:selectorData,
		onChange : function(option, checked) {
		}
	});
	$('#salesCombo').multiselect('dataprovider', selectorData);*/

	$('#soldCombo').multiselect({
		includeSelectAllOption : false,
		buttonClass : 'btn btn-default col-sm-12 btn-sm',
		numberDisplayed : 1,
		buttonWidth : '100%',
		butttonHeight : '34px',
		nonSelectedText : "All",
		dataprovider:selectorData,
		onChange : function(option, checked) {
		}
	});
	
	$('#soldCombo').multiselect('dataprovider', selectorData);
	
    $('#datetimepicker6').datetimepicker();
    $('#datetimepicker7').datetimepicker();
    $("#datetimepicker6").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });
	
    $('#salesCombo').multiselect({
		includeSelectAllOption : true,
		buttonClass : 'btn btn-default col-sm-12 btn-sm',
		numberDisplayed : 1,
		buttonWidth : '100%',
		nonSelectedText : "All",
		dataprovider:salesData,
		onChange : function(option, checked) {
		}
	});
	$('#salesCombo').multiselect('dataprovider', salesData);
	
	$("#salesFilterDiv").hide();
	$("#soldFilterDiv").hide();
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

function generateReport () {
	var filterConditions = [];
	var countries = $('#countryCombo option:selected');
	var cities = $('#cityCombo option:selected');
	var policyTypes = $('#policyTypeCombo option:selected');
	var selectedAgents = $('#agentsCombo option:selected');
	var fromDate = $('#startdate').val();
	var endDate = $('#enddate').val();
	var groupBy = $('#groupByCombo option:selected');
	var policyStatus = $('#statusCombo option:selected');
	var selectedGender = $('#genderCombo option:selected');
	var salesCount = $('#salesCombo option:selected');
	var soldCount = $('#soldCombo option:selected');
	
	if(countries.size()>0) {
		filterConditions.push({"country":countries});
	}
	if(cities.size()>0) {
		filterConditions.push({"city":cities});
	}
	if(policyTypes.size()>0) {
		filterConditions.push({"country":policyTypes});
	}
	if(selectedAgents.size()>0) {
		filterConditions.push({"country":selectedAgents});
	}
	if(fromDate.length>0) {
		filterConditions.push({"policy.start_date":fromDate});
	}
	if(endDate.length>0) {
		filterConditions.push({"policy.end_date":endDate});
	}
	if(groupBy.size()>0) {
		filterConditions.push({"groupBy":groupBy});
	}
	if(policyStatus.size()>0) {
		filterConditions.push({"policy.status":policyStatus});
	}
	if(selectedGender.size()>0) {
		filterConditions.push({"gender":selectedGender});
	}
	if(salesCount.size()>0) {
		filterConditions.push({"agent.sales":salesCount});
	}
	if(soldCount.size()>0) {
		filterConditions.push({"agent.sold":soldCount});
	}
	
	var results = jQuery.grep(jsonData, function( a ) {
		  return a.country == "USA";
		});
	console.log(results);
}

function changeCity(option, checked) {
	console.info(option);
	console.info(checked);
}
