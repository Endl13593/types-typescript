"use strict";
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["Draft"] = 0] = "Draft";
    StatusEnum[StatusEnum["Scheduled"] = 1] = "Scheduled";
    StatusEnum[StatusEnum["Published"] = 2] = "Published";
})(StatusEnum || (StatusEnum = {}));
console.log(StatusEnum);
function changeStatus(status) {
    console.log(status);
}
changeStatus(StatusEnum.Draft);
var OptionsEnum;
(function (OptionsEnum) {
    OptionsEnum["One"] = "One";
    OptionsEnum["Two"] = "Two";
    OptionsEnum["Three"] = "Three";
})(OptionsEnum || (OptionsEnum = {}));
console.log(OptionsEnum);
const changeOption = (option) => console.log(option);
changeOption(OptionsEnum.One);
