import Error "mo:core/Error";

actor {

  // Caffeine email service interface — provisioned by the email extension
  type EmailService = actor {
    sendEmail : (to : Text, subject : Text, body : Text) -> async { #ok; #err : Text };
  };

  /// Submit a contact form and send the data to info@elevatexmedia.com.
  /// Returns #ok(confirmationMessage) on success or #err(errorMessage) on failure.
  public func submitContactForm(
    name : Text,
    email : Text,
    phone : Text,
    company : Text,
    service : Text,
    message : Text,
  ) : async { #ok : Text; #err : Text } {
    let subject = "New Client Inquiry from " # name # " via ElevateX Media";

    let body =
      "You have received a new client inquiry via ElevateX Media.\n\n"
      # "Name:                  " # name # "\n"
      # "Email:                 " # email # "\n"
      # "Phone:                 " # phone # "\n"
      # "Company:               " # company # "\n"
      # "Service Interested In: " # service # "\n"
      # "Message:\n"
      # message # "\n\n"
      # "---\n"
      # "Sent via ElevateX Media contact form\n"
      # "Website: elevatexmedia.com";

    // Email service canister — wired by the Caffeine email extension
    let emailService : EmailService = actor ("aaaaa-aa");

    try {
      let result = await emailService.sendEmail("info@elevatexmedia.com", subject, body);
      switch (result) {
        case (#ok) {
          #ok("Your message has been sent successfully! We will get back to you shortly.")
        };
        case (#err(e)) {
          #err("Failed to send message: " # e)
        };
      };
    } catch (e) {
      #err("An error occurred while sending your message: " # e.message());
    };
  };

};
