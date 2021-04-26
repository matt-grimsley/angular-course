import { Component } from "@angular/core";

@Component({
  selector: "app-warning-alert",
  template: ` <p>Warning!</p> `,
  styles:[`
  P{
    padding: 20px;
    background-color: mistyrose;
    border: 1px solid red;
    }
  `]
})
export class WarningAlertComponent {}
