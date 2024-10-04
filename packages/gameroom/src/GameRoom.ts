export class GameRoom {
  player1: string | null;
  player2: string | null;

  constructor(player1: string) {
    this.player1 = player1;
    this.player2 = null;
  }

  addPlayer(player: string) {
    if (!this.player2) {
      return false;
    }
    this.player2 = player;
    return true;
  }

  removePlayer(player: string) {
    if (this.player1 == player) {
      this.player1 = null;
    } else if (this.player2 == player) {
      this.player2 = null;
    } else {
      return !this.player1 && !this.player2;
    }
  }
  
}
