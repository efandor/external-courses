class Candy {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
}

class Gift {
    constructor(kidsName, ...arg) {
        this.kidsName = kidsName;
        this.giftItems = [...arg];
    }

    showTotalWeight = () => {
        let totalWeight = this.giftItems.reduce((acc, item) => acc + item.weight, 0); 
        
        return `Total weight of this gift equals ${totalWeight} g`;
    }

    sortCandyByWeight = () => {
        let sortedGift = this.giftItems.sort((a, b) => a.weight - b.weight);
        
        return sortedGift;
    }

    findGiftByKidsName = (name) => {
        if (this.kidsName === name) {

            return `Yes, this gift is for ${name}`;
        }

        return `This gift is not for ${name}`;
    }
}

const choco = new Candy("Choko", 70);
const lollypop = new Candy("Lollypop", 15);
const toffee = new Candy("Toffee", 5);
const souflle = new Candy("Souflle", 10);
const gift = new Gift('Masha', choco, lollypop, toffee, souflle);

console.log(gift);
console.log(gift.showTotalWeight());
console.log(gift.sortCandyByWeight());
console.log(gift.findGiftByKidsName('Pasha'));
console.log(gift.findGiftByKidsName('Masha'));
