class Room {
    constructor(roomName, ...args) {
        this.roomName = roomName;
        this.devices = [...args];
    }

    findDevice(name) {
        this.devices.forEach(item => {
            if (item.name === name) {
                console.log(`${name} is in ${this.roomName}`);
            }
        });
    }

    showUsedPower() {
        let usedPower = 0;

        this.devices.forEach(item => {
            if (item.isPlugged) {
                usedPower += item.power;
            }
        });

        console.log(`Total power of plugged devices equals ${usedPower}`)
    }
    
    unPlugAll() {
      this.devices.forEach(item => {
            if (item.isPlugged) {
                item.isPlugged = false;
            }
        });
    }
}

class Device {
    constructor(name, power, isPlugged) {
        this.name = name;
        this.power = power;
        this.isPlugged = isPlugged;
    }

    plugDevice() {
      this.isPlugged = true;
    }

    unPlugDevice() {
      this.isPlugged = false;
    }

}

class ComputerFacilities extends Device {
    constructor(name, power, isPlugged) {
        super(name, power, isPlugged);
    }

    mineBTC() {
        let cash = 365 * this.power;
        return cash;
    }
}

class TV extends Device {
    constructor(name, power, isPlugged) {
        super(name, power, isPlugged);
    }

    watchNetflix() {
        this.isPlugged = true;

        return 'Eat popcorn, watch Witcher'
    }
}

class PC extends ComputerFacilities {
    constructor(name, power, isPlugged) {
        super(name, power, isPlugged);
    }
}

class Laptop extends ComputerFacilities {
    constructor(name, power, isPlugged) {
        super(name, power, isPlugged);
        this.hasBattery = true;
    }
}

const tv = new TV("TV", 600, true);
const pc = new PC("PC", 1000, false);
const laptop = new Laptop("HP", 300, false);
const livingRoom = new Room('Living Room', tv, pc, laptop);

console.log(tv);
console.log(pc);
console.log(laptop);
console.log(livingRoom);
console.log(livingRoom.findDevice('PC'));
console.log(livingRoom.showUsedPower());
pc.plugDevice();
console.log(livingRoom.showUsedPower());
livingRoom.unPlugAll();
console.log(livingRoom.showUsedPower());
