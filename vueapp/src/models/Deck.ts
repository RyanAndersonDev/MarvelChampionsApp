import { Player } from '@/models/Player';
import { CardService } from '@/services/CardService';
import { PlayerCard } from '@/models/PlayerCard';
import { Villain } from '@/models/Villain'

type Card = PlayerCard | VillainCard;
export class Deck {

    owner: Player | Villain;
    cards: Card[];

    constructor(owner: Player | Villain, cardIds: string[]) {
        this.owner = owner;

        const cardService = new CardService();
        this.cards = cardIds.map(cardId => cardService.createCardFromId(cardId));
    }

    drawCardsFromDeck(amount: number): (PlayerCard | VillainCard)[] {

        const cardsToDraw: (PlayerCard | VillainCard)[] = [];

        while (amount > 0) {
            const drawnCard = this.cards.pop();

            if (drawnCard) {
                cardsToDraw.push(drawnCard);
                amount--;
            } else {
                this.owner.currentDiscardPile.shuffleDiscardPileIntoDeck(this.owner.currentDiscardPile);
            }
        }

        return cardsToDraw;
    }

    shuffleDeck(): void {
        for (let i = this.cards.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    searchDeckById(cardId: string): PlayerCard | VillainCard | undefined {
        return this.cards.find(card => card.id === cardId);
    }

    searchDeckByName(cardName: string): PlayerCard | VillainCard | undefined {
        return this.cards.find(card => card.name === cardName);
    }
}