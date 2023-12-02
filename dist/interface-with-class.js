"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Localization {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    getLocation(address) {
        return {
            latitude: this.latitude,
            longitude: this.longitude,
        };
    }
}
let location = new Localization(132, 321);
const getLocation = (location) => {
    return `${location.latitude} ${location.longitude}`;
};
console.log(getLocation(location));
