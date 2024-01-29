import { Player } from '@/models/Player';
import { PlayerCard } from '@/models/PlayerCard';
import type { Villain } from './Villain';

type Card = PlayerCard | VillainCard;
export class DiscardPile {

    owner: Player | Villain;
    cards: Card[];

    constructor(owner: Player | Villain, cards: Card[]) {
        this.owner = owner;
        this.cards = cards;
    }

    addCardsToDiscardPile(cardsToDiscard: Card[]): void {
        cardsToDiscard.forEach(card => {
            this.cards.push(card);
        })
    }

    shuffleDiscardPileIntoDeck(discardPile: DiscardPile): void {
        this.cards = discardPile.cards;
        this.owner.currentDeck.shuffleDeck();
    }

    searchDiscardPileById(cardId: string): Card | undefined {
        return this.cards.find(card => card.id === cardId);
    }

    searchDiscardPileByName(cardName: string): Card | undefined {
        return this.cards.find(card => card.name === cardName);
    }
}