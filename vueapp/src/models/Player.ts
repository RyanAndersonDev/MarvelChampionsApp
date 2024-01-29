import { PlayerCard } from './PlayerCard';
import { PlayerDeck } from './Deck';
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
    currentDeck: PlayerDeck;

    constructor(deck: PlayerDeck) {
        this.currentDeck = deck;
    }
}