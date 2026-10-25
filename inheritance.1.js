// Parent class
class SmartDevice {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  powerOn() {
    console.log(`${this.brand} ${this.model} is turning on...`);
  }
}

// Child class
class SmartPhone extends SmartDevice {
  constructor(brand, model, os) {
    super(brand, model);
    this.os = os;
  }

  // Method overriding
  powerOn() {
    console.log(
      `Smartphone ${this.brand} ${this.model} is booting up ${this.os}`
    );
  }
}

// Child class
class SmartWatch extends SmartDevice {
  constructor(brand, model, strapMaterial) {
    super(brand, model);
    this.strapMaterial = strapMaterial;
  }

  // Method overriding
  powerOn() {
    console.log(
      `Smartwatch ${this.brand} ${this.model} with a ${this.strapMaterial} strap is lighting up`
    );
  }
}

// Array of SmartDevice objects
const devices = [
  new SmartPhone("Samsung", "Galaxy S25", "Android"),
  new SmartWatch("Apple", "Watch Series 9", "Silicone"),
  new SmartPhone("Google", "Pixel 8", "Android"),
];

// Polymorphism
devices.forEach((device) => {
  device.powerOn();
});
