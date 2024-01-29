import { Player } from "@/models/Player";
import { PlayerCard } from "@/models/PlayerCard";
export class PlayerHand {

    player: Player;
    cards: PlayerCard[];

    constructor(player: Player, cards: PlayerCard[]) {
        this.player = player;
        this.cards = cards;
    }

    addCardsToHand(cardsToAdd: PlayerCard[]): void {
        cardsToAdd.forEach(card => {
            this.cards.push(card)
        })
    }

    mulliganCards(cardsToMulligan: PlayerCard[]): void {
        const cardsToDraw = this.player.currentDeck.drawCardsFromDeck(cardsToMulligan.length);
        this.addCardsToHand(cardsToDraw as PlayerCard[]);

        this.sendToDiscardPile(cardsToMulligan);
    }

    sendToDiscardPile(cardsToDiscard: PlayerCard[]): void {
        this.cards = this.cards.filter(card => !cardsToDiscard.includes(card));
        this.player.currentDiscardPile.addCardsToDiscardPile(cardsToDiscard);
    }

    orderBycost(): void {
        this.cards.sort((a, b) => a.cost - b.cost);
    }

    // Play card method -- need gamestate

    // Use card as payment method -- need gamestate
}