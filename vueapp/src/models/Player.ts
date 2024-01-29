import { PlayerCard } from './PlayerCard';
import { Deck } from './Deck';
import { DiscardPile } from './DiscardPile';
import { PlayerHand } from '@/models/PlayerHand';
export class Player {

    // identityCard ?? figure out implementation
    allyCardsInPlay: PlayerCard[] = [];
    supportCardsInPlay: PlayerCard[] = [];
    upgradeCardsInPlay: PlayerCard[] = [];
    engagedMinions: VillainCard[] = [];
    currentHand: PlayerHand = new PlayerHand(this, []);
    currentDiscardPile: DiscardPile = new DiscardPile(this, []);
    currentDeck: Deck;

    constructor(deck: Deck) {
        this.currentDeck = deck;
    }
}