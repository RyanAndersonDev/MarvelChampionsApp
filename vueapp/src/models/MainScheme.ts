import { GameState } from '@/models/GameState';
export class MainScheme {

    gameState: GameState;
    name: string;
    setupArt: string;
    schemeArt: string;
    currentArt: string;
    flavorText: string;
    effects: Object[];
    icons: string[];

    startingThreat: number;
    isStartingThreatPerPlayer: boolean;
    threatIncrement: number;
    isThreatIncrementPerPlayer: boolean;
    threatMaximum: number;
    isThreatMaximumPerPlayer: boolean;
    isLossCondition: boolean;
    currentThreat: number;

    constructor(
        gameState: GameState,
        name: string,
        setupArt: string,
        schemeArt: string,
        currentArt: string,
        flavorText: string,
        effects: Object[],
        icons: string[],
        startingThreat: number,
        isStartingThreatPerPlayer: boolean,
        threatIncrement: number,
        isThreatIncrementPerPlayer: boolean,
        threatMaximum: number,
        isThreatMaximumPerPlayer: boolean,
        isLossCondition: boolean
    ) {
        this.gameState = gameState;
        this.name = name;
        this.setupArt = setupArt;
        this.schemeArt = schemeArt;
        this.currentArt = setupArt;
        this.flavorText = flavorText;
        this.effects = effects;
        this.icons = icons;
        this.startingThreat = startingThreat;
        this.isStartingThreatPerPlayer = isStartingThreatPerPlayer;
        this.threatIncrement = threatIncrement;
        this.isThreatIncrementPerPlayer = isThreatIncrementPerPlayer;
        this.threatMaximum = threatMaximum;
        this.isThreatMaximumPerPlayer = isThreatMaximumPerPlayer;
        this.isLossCondition = isLossCondition;
        this.currentThreat = 0;
    }

    addStartingThreat(): void {
        if (this.isStartingThreatPerPlayer) {
            this.currentThreat += (this.gameState.players.length * this.startingThreat);
        } else {
            this.currentThreat += this.startingThreat;
        }
    }

    addVillainPhaseThreat(): void {
        if (this.isThreatIncrementPerPlayer) {
            this.currentThreat += (this.gameState.players.length * this.threatIncrement);
        } else {
            this.currentThreat += this.threatIncrement;
        }
    }

    hasSchemeMaxxedOut(): boolean {
        if (this.isThreatMaximumPerPlayer) {
            return this.currentThreat >= (this.threatMaximum * this.gameState.players.length);
        } else {
            return this.currentThreat >= this.threatMaximum;
        }
    }

    flipToSchemeArt(): void {
        this.currentArt = this.schemeArt;
    }
}