/**
 * 
 */
var countryData = [{"label":"India", "value":"India"},
                   {"label":"USA", "value":"USA"},
                   {"label":"Italy", "value":"Italy"},
                   {"label":"France", "value":"France"}];

var groupByData = [{"label":"None", "value":"None"},
                   {"label":"Country", "value":"country"},
                   {"label":"City", "value":"city"},
                   {"label":"Policy Type", "value":"policyType"},
                   {"label":"Agents", "value":"Agents"}];

var genderData = [{"label":"Male", "value":"male"},
                   {"label":"Female", "value":"female"}];

var policyData =  [{"label":"Medical","value":"Medical"},
                   {"label":"Theft","value":"Theft"},
                   {"label":"Life","value":"Life"}];

var agentData = [{"label":"Agent 1", "value":"Agent1"},
                 {"label":"Agent 2", "value":"Agent2"},
                 {"label":"Agent 3", "value":"Agent3"},
                 {"label":"Agent 4", "value":"Agent4"},
                 {"label":"Agent 5", "value":"Agent5"},
                 {"label":"Agent 6", "value":"Agent6"},
                 {"label":"Agent 7", "value":"Agent7"},
                 {"label":"Agent 8", "value":"Agent8"},
                 {"label":"Agent 9", "value":"Agent9"},
                 {"label":"Agent 10", "value":"Agent10"},];

var statusData = [{"label":"Approved","value":"Approved"},
                  {"label":"Cancelled","value":"Cancelled"},
                  {"label":"Pending","value":"Pending"}];

var selectorData = [ {"label":"=","value":"="},
                     {"label":">","value":">"},
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
                  {"label":"=","value":"="},
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
		butttonHeight :'34px',
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

var filterConditions = [];
function generateReport () {
	filterConditions = [];
	var countries = getSelectedComboValues($('#countryCombo option:selected'));
	var cities = getSelectedComboValues($('#cityCombo option:selected'));
	var policyTypes = getSelectedComboValues($('#policyTypeCombo option:selected'));
	var selectedAgents = getSelectedComboValues($('#agentsCombo option:selected'));
	var fromDate = $('#startdate').val();
	var endDate = $('#enddate').val();
	var groupBy = getSelectedComboValues($('#groupByCombo option:selected'));
	var policyStatus = getSelectedComboValues($('#statusCombo option:selected'));
	var selectedGender = getSelectedComboValues($('#genderCombo option:selected'));
	var salesCount = getSelectedComboValues($('#salesCombo option:selected'));
	var soldCount = getSelectedComboValues($('#soldCombo option:selected'));
	
	if(countries.length>0) {
		filterConditions.push({"name":"country",
								"value":countries});
	}
	if(cities.length>0) {
		filterConditions.push({"name":"city",
			"value":cities});
	}
	if(policyTypes.length>0) {
		filterConditions.push({"name":"policy.type",
			"value":policyTypes});
	}
	if(selectedAgents.length>0) {
		filterConditions.push({"name":"agent.name",
			"value":selectedAgents});
	}
	if(fromDate.length>0) {
		filterConditions.push({"name":"policy.start_date",
			"value":fromDate});
	}
	if(endDate.length>0) {
		filterConditions.push({"name":"policy.end_date",
			"value":endDate});
	}
	if(groupBy.length>0) {
		if(groupBy[0] != "None") {
			filterConditions.push({"name":"groupBy",
				"value":groupBy});
		}
	}
	if(policyStatus.length>0) {
		filterConditions.push({"name":"policy.status",
			"value":policyStatus});
	}
	if(selectedGender.length>0) {
		filterConditions.push({"name":"gender",
			"value":selectedGender});
	}
	if(salesCount.length>0) {
		filterConditions.push({"name":"agent.sales",
			"value":salesCount});
	}
	if(soldCount.length>0) {
		filterConditions.push({"name":"agent.sold",
			"value":soldCount});
	}
	console.info(filterConditions);
	var results = jsonData;
	$.each(filterConditions, function(i, filter){
		results = jQuery.grep(results, function( object ) {
			if($.isArray(filter.value)) {
				if($.inArray(object[filter.name],filter.value) != -1) {
					return object;
				}
			} else {
				return object[filter.name] == filter.value;
			}
		});
	});
	console.log(results);
}

function getSelectedComboValues(options) {
	var selected = [];
    $(options).each(function(index, option){
        selected.push([$(this).val()][0]);
    });
    return selected;
}

function changeCity(option, checked) {
	console.info(option);
	console.info(checked);
}
