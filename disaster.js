class DisasterSystem {
    constructor() {
        this.disaster = {};
    }
    addDisaster(location, disaster) {
        if (!this.disaster[location]) {
            this.disaster[location] = [];
        }
        this.disaster[location].push(disaster);
    }
    printLocation(location) {
        return this.disaster[location];
    }
}
const disasterRecovery = new DisasterSystem();
disasterRecovery.addDisaster("Kisumu", "Tsunami");
disasterRecovery.addDisaster("Karen", "Fire");
console.log(disasterRecovery.printLocation("Kisumu"));
console.log(disasterRecovery.printLocation("Karen")); 

DisasterSystem();

