import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-assignments",
  templateUrl: "./assignments.component.html",
  styleUrls: ["./assignments.component.css"],
})
export class AssignmentsComponent implements OnInit {
  showHiddenText = false;
  log = [];
  oddNumbers = [];
  evenNumbers = [];

  onToggleDetails() {
    this.showHiddenText = !this.showHiddenText;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  constructor() {}

  ngOnInit(): void {}

  onIntervalEvent(n: number) {
    // console.log(n);
    if (n % 2 === 0) {
      this.evenNumbers.push(n);
    } else {
      this.oddNumbers.push(n);
    }
  }
}
