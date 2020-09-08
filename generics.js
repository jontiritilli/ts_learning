function identity(arg) {
    return arg;
}
var number = identity(5);
console.log("number", number);
var string = identity("5");
console.log("string", string);
var string1 = identity("5");
console.log("string1", string1);
var ControllerDto = /** @class */ (function () {
    function ControllerDto(success, data, message, code) {
        if (success === void 0) { success = false; }
        this.success = success;
        this.data = data;
        this.message = message;
        this.code = code;
    }
    return ControllerDto;
}());
var creditData = {
    company: "test company",
    activity: ["test", "activity1", "activity2"]
};
var userData = {
    firstName: "test firstName",
    lastName: "test lastName"
};
var example1 = new ControllerDto(true, creditData);
console.log("example1", example1);
var example2 = new ControllerDto(false, undefined, //per documentation, pass optional params as undefined if not used
"Credit records not available", 961);
var example3 = new ControllerDto(true, userData);
console.log("example3", example3);
var example4 = new ControllerDto(false, undefined, //per documentation, pass optional params as undefined if not used
"User record not available", 963);
console.log("example4", example4);
