import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-assignments",
  templateUrl: "./assignments.component.html",
  styleUrls: ["./assignments.component.css"],
})
export class AssignmentsComponent implements OnInit {
  showHiddenText = false;
  log = [];

  onToggleDetails() {
    this.showHiddenText = !this.showHiddenText;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  constructor() {}

  ngOnInit(): void {}
}
