import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() intervalEvent = new EventEmitter<number>();
  lastValue = 0;
  interval;

  constructor() {}

  ngOnInit(): void {}

  onGameStart() {
    this.interval = setInterval(() => {
      this.intervalEvent.emit(++this.lastValue);
    }, 1000);
  }
  onGamePause() {
    clearInterval(this.interval);
  }
}
