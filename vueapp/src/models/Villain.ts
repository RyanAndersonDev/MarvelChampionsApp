import { DiscardPile } from '@/models/DiscardPile';
import { Deck } from '@/models/Deck';
export class Villain {

    currentPhase: number;
    currentDiscardPile: DiscardPile = new DiscardPile(this, []);
    currentDeck: Deck

    constructor(initialPhase: number, currentDeck: Deck) {
        this.currentPhase = initialPhase;
        this.currentDeck = currentDeck;
    }
}