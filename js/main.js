function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  return regex.test(email);
}

$("#submitBtn").click(function(){
	var errorMessage = "";
	var fieldsMissing = "";

	if($("#email").val() == ""){
		fieldsMissing += "<br> Email"
	}

	if($("#phone").val() == ""){
		fieldsMissing += "<br> Telephone"
	}

	if($("#password").val() == ""){
		fieldsMissing += "<br> password"
	}

	if($("#passwordConfirm").val() == ""){
		fieldsMissing += "<br> confirm password"
	}

	if(fieldsMissing != ""){
	errorMessage += "The following field(s) are missing:" + fieldsMissing
	}

	if (isEmail($("#email").val()) == false){

		errorMessage += "<p>Your email address is not valid</p>";
	}

	if ($.isNumeric($("#phone").val()) == false) {
		errorMessage += "<p>Your phone number is not numeric</p>"
	}

	if ($("#password").val() != $("#passwordConfirm").val()) {
		errorMessage += "<p>Your password don't match!</p>"
	}

		if(errorMessage != ""){
			$("#errorMessage").html(errorMessage);
		} else {
			$("#successMessage").show();
			$("#errorMessage").hide();
		}
})