
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("saveEmail", function(request, response) {
    var EmailSignup = Parse.Object.extend("Email");

    var emailAddress = request.params.email;
    if (emailAddress === undefined || emailAddress === null) {
        response.error("No email present");
    }
    var emailQuery = new Parse.Query(EmailSignup);
    emailQuery.equalTo("emailAddress", emailAddress);
    // See if email already exists
    emailQuery.find({
        success: function(results) {
            // Add to table if it doesnt exist
            if (results.length === 0) {
                var emailSignup = new EmailSignup();
                emailSignup.set("emailAddress", emailAddress);
                emailSignup.save(null, {
                    success: function(emailSignup) {
                        console.log("Success!");
                        response.success(emailAddress);
                    },
                    error: function(emailSignup, error) {
                        console.log(error);
                        response.error(error);
                    }
                });
            } else {
                response.success(emailAddress);
            }
        },
        error: function(error) {
            console.log(error);
            response.error(error);
        }
    });
});