"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getLocation = (location) => {
    return `${location.latitude} ${location.longitude}`;
};
const location = {
    latitude: 10,
    longitude: 20,
};
console.log(getLocation(location));
const locationTwo = {
    latitude: 100,
    longitude: 200,
};
locationTwo.longitude = 1000;
console.log(getLocation(locationTwo));
