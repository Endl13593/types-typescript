"use strict";
const showLog = (message) => {
    console.log(message);
    return;
};
showLog('Test void');
const showLogAndException = (message) => {
    console.log(message);
    throw new Error(message);
};
showLogAndException('Test never');
