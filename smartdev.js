
class SmartDevice {
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    call(number) {
        console.log(`${this.model} is calling ${number}`);
    }

    sendMessage(message) {
        console.log(`${this.model}: ${message}`);
    }
}

class SmartPhone extends SmartDevice {
    constructor(brand, model, color, os) {
        super(brand, model, color);
        this.os = os;
    }

    call(number) {
        console.log(
            `${this.model} is making a smart call to ${number} using ${this.os}`
        );
    }

    browseInternet() {
        console.log(`${this.model} is browsing the internet`);
    }

    installApp(app) {
        console.log(`${app} installed on ${this.model}`);
    }
}

const device = new SmartDevice("Samsung", "A15", "White Flash");

const smartPhone = new SmartPhone(
    "Samsung",
    "Galaxy S25",
    "Phantom Black",
    "Android"
);

const smartDevices = [device, smartPhone];

for (const currentDevice of smartDevices) {
    currentDevice.call("09922286702");
}

smartPhone.sendMessage("Hello!");
smartPhone.browseInternet();
smartPhone.installApp("Facebook");
