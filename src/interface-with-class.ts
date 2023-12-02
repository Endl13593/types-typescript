interface LocationInterface {
    readonly latitude : number;
    longitude ?: number;

    getLocation: (address: string) => {
        latitude : number;
        longitude ?: number;
    }
}

class Localization implements LocationInterface {
    readonly latitude : number;
    longitude ?: number;

    constructor(latitude : number, longitude ?: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    getLocation(address: string): {
        latitude : number,
        longitude ?: number,
    } {
        return {
            latitude: this.latitude,
            longitude: this.longitude,
        }
    }
}

let location = new Localization(132, 321);

const getLocation = (location: LocationInterface) => {
    return `${location.latitude} ${location.longitude}`;
}
console.log(getLocation(location));

export {}