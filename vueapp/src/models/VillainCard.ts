class VillainCard extends Card {

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
        super(id, name, cardArt, tags, effectText, effects, flavorText, cardType, typeMetaData);
    }
}