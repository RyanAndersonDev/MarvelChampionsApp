import { Player } from '@/models/Player';
import { PlayerCard } from '@/models/PlayerCard';
export class DiscardPile {

    player: Player;
    cards: PlayerCard[];

    constructor(player: Player, cards: PlayerCard[]) {
        this.player = player;
        this.cards = cards;
    }

    addCardsToDiscardPile(cardsToDiscard: PlayerCard[]): void {
        cardsToDiscard.forEach(card => {
            this.cards.push(card);
        })
    }

    shuffleDiscardPileIntoDeck(discardPile: DiscardPile): void {
        this.cards = discardPile.cards;
        this.player.currentDeck.shuffleDeck();
    }

    searchDiscardPileById(cardId: string): PlayerCard | undefined {
        return this.cards.find(card => card.id === cardId);
    }

    searchDiscardPileByName(cardName: string): PlayerCard | undefined {
        return this.cards.find(card => card.name === cardName);
    }
}