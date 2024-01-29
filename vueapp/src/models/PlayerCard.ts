enum Aspect {
    HeroCard = "HeroCard",
    Aggression = 'Aggression',
    Justice = 'Justice',
    Protection = 'Protection',
    Leadership = 'Leadership',
    Basic = 'Basic',
}
export class PlayerCard extends Card {

    cost: number;
    resourceVal: number;
    printedResources: string[];
    aspect: Aspect;

    constructor(
        cost: number,
        resourceVal: number,
        printedResources: string[],
        aspect: Aspect,
        id: string,
        name: string,
        cardArt: string,
        tags: string[],
        effectText: string,
        effects: Object[],
        flavorText: string,
        cardType: CardType,
        typeMetaData: Object
    ) {

        super(id, name, cardArt, tags, effectText, effects, flavorText, cardType, typeMetaData);

        this.cost = cost;
        this.resourceVal = resourceVal;
        this.printedResources = printedResources;
        this.aspect = aspect;
    }
}