import { Player } from '@/models/Player';
import { Villain } from '@/models/Villain';
import { MainScheme } from '@/models/MainScheme';
export class GameState {

    players: Player[];
    villain: Villain;
    mainSchemes: MainScheme[];

    firstPlayer: Player;
    currentMainScheme: MainScheme;

    constructor(players: Player[], villain: Villain, mainSchemes: MainScheme[]) {
        this.players = players;
        this.villain = villain;
        this.mainSchemes = mainSchemes;

        this.firstPlayer = players[0];
        this.currentMainScheme = mainSchemes[0];
    }

    changeFirstPlayer(): void {
        const currentIndex = this.players.indexOf(this.firstPlayer);
        const nextIndex = (currentIndex + 1) % this.players.length;
        this.firstPlayer = this.players[nextIndex];
    }

    advanceMainSchemeOrEndGame(): void {
        if (this.currentMainScheme.hasSchemeMaxxedOut() && this.currentMainScheme.isLossCondition) {
            this.endGame();
        } else {
            const currentIndex = this.mainSchemes.indexOf(this.currentMainScheme);
            this.currentMainScheme = this.mainSchemes[currentIndex + 1];
        }
    }

    endGame(): void {
        // add endgame logic
    }
}