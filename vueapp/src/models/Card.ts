class Card {

    id: string;
    name: string;
    cardArt: string;
    tags: string[];
    effectText: string;
    effects: Object[];
    flavorText: string;
    cardType: string;
    typeMetaData: Object;
    isExhausted: boolean = false;
    isAttached: boolean = false;

    constructor(
        id: string,
        name: string,
        cardArt: string,
        tags: string[],
        effectText: string,
        effects: Object[],
        flavorText: string,
        cardType: string,
        typeMetaData: Object
    ) {
        this.id = id;
        this.name = name;
        this.cardArt = cardArt;
        this.tags = tags;
        this.effectText = effectText;
        this.effects = effects;
        this.flavorText = flavorText;
        this.cardType = cardType;
        this.typeMetaData = typeMetaData;
    }
}