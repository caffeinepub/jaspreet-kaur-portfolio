import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Principal "mo:core/Principal";

actor {
  type ContactInfo = {
    name : Text;
    email : Text;
    linkedInUrl : Text;
  };

  var contactInfo : ?ContactInfo = null;
  let isAllowedAdmin = Map.singleton(Principal.fromText("2vxsx-fae"), ());

  public shared ({ caller }) func setContactInfo(name : Text, email : Text, linkedInUrl : Text) : async () {
    assert isAllowedAdmin.containsKey(caller);
    contactInfo := ?{ name; email; linkedInUrl };
  };

  public query func getContactInfo() : async ?ContactInfo {
    contactInfo;
  };

  type VisitorMessage = {
    name : Text;
    email : Text;
    message : Text;
  };

  module VisitorMessage {
    public func compare(msg1 : VisitorMessage, msg2 : VisitorMessage) : Order.Order {
      Text.compare(msg1.email, msg2.email);
    };
  };

  let visitorMessages = Map.empty<Nat, VisitorMessage>();
  var nextMessageId = 0;

  public shared ({ caller }) func submitVisitorMessage(name : Text, email : Text, message : Text) : async Nat {
    let id = nextMessageId;
    switch (visitorMessages.containsKey(id)) {
      case (false) {
        visitorMessages.add(id, { name; email; message });
        nextMessageId += 1;
        id;
      };
      case (true) { Runtime.trap("This message id is already used. Please try again.") };
    };
  };

  public shared ({ caller }) func getAllVisitorMessages() : async [VisitorMessage] {
    assert isAllowedAdmin.containsKey(caller);
    visitorMessages.values().toArray().sort();
  };
};
