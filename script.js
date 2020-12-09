$('#btnRun1').click(function() {

	$.ajax({
		url: "libs/php/getTimezoneInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat1: $('#selLat1').val(),
			long1: $('#selLong1').val()
		},
		success: function(result) {

			console.log(result);

			if (result.status.name == "ok") {

				$('#txtCountry1').html(result['data']['countryName']);
				$('#txtLatitude1').html(result['data']['lat']);
				$('#txtLongitude1').html(result['data']['lng']);
				$('#txtTimezone1').html(result['data']['timezoneId']);

			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
		}
	}); 


});

$('#btnRun2').click(function() {

	$.ajax({
		url: "libs/php/getOceanInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat2: $('#selLat2').val(),
			long2: $('#selLong2').val()
		},
		success: function(result) {

			console.log(result);

			if (result.status.name == "ok") {

				$('#txtOcean').html(result['data']['ocean']['name']);
				$('#txtNameId').html(result['data']['ocean']['geonameId']);

			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
		}
	}); 


});

$('#btnRun3').click(function() {

	$.ajax({
		url: "libs/php/getCityInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			city: $('#selCity').val()
		},
		success: function(result) {

			console.log(result);

			if (result.status.name == "ok") {

				$('#txtCity').html(result['data']['geonames'][0]['title']);
				$('#txtCountry2').html(result['data']['geonames'][0]['countryCode']);
				$('#txtSummary').html(result['data']['geonames'][0]['summary']);


			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
		}
	}); 


});