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
		dataprovider:countryData,
		onChange : function(option, checked) {
		}
	});
	$('#cityCombo').multiselect('dataprovider', countryData);
	
	$('#policyTypeCombo').multiselect({
		includeSelectAllOption : true,
		buttonClass : 'btn btn-default col-sm-12 btn-sm',
		numberDisplayed : 1,
		buttonWidth : '100%',
		nonSelectedText : "All",
		dataprovider:countryData,
		onChange : function(option, checked) {
		}
	});
	$('#policyTypeCombo').multiselect('dataprovider', countryData);
	
	$('#agentsCombo').multiselect({
		includeSelectAllOption : true,
		buttonClass : 'btn btn-default col-sm-12 btn-sm',
		numberDisplayed : 1,
		buttonWidth : '100%',
		nonSelectedText : "All",
		dataprovider:countryData,
		onChange : function(option, checked) {
		}
	});
	$('#agentsCombo').multiselect('dataprovider', countryData);
	
	$('#groupByCombo').multiselect({
		includeSelectAllOption : true,
		buttonClass : 'btn btn-default col-sm-12 btn-sm',
		numberDisplayed : 1,
		buttonWidth : '100%',
		nonSelectedText : "All",
		dataprovider:countryData,
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
