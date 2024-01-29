import playerCardsData from '../assets/PlayerCards.json'
import { PlayerCard } from '../models/PlayerCard';
export class CardService {

    playerCards: Record<string, any>;

    constructor() {
        this.playerCards = playerCardsData;
    }

    createCardFromId(cardId: string): PlayerCard {
        const cardDetails = this.playerCards[cardId];

        return new PlayerCard(
            cardDetails.cost,
            cardDetails.resourceVal,
            cardDetails.printedResources,
            cardDetails.aspect,
            cardDetails.id,
            cardDetails.name,
            cardDetails.cardArt,
            cardDetails.tags,
            cardDetails.effectText,
            cardDetails.effects,
            cardDetails.flavorText,
            cardDetails.cardType,
            cardDetails.typeMetaData
        );
    }
}
