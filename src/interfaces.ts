interface LocationMapInterface {
    readonly latitude: number;
    longitude: number;
}

const getLocation = (location: LocationMapInterface) => {
    return `${location.latitude} ${location.longitude}`;
}

const location = {
    latitude: 10,
    longitude: 20,
}
console.log(getLocation(location));

const locationTwo: LocationMapInterface = {
    latitude: 100,
    longitude: 200,
}
locationTwo.longitude = 1000;

console.log(getLocation(locationTwo));

export {}