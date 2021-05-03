import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { AssignmentsComponent } from "./assignments/assignments.component";
import { EvenComponent } from "./assignments/even/even.component";
import { OddComponent } from "./assignments/odd/odd.component";
import { GameControlComponent } from "./assignments/game-control/game-control.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AssignmentsComponent,
    EvenComponent,
    OddComponent,
    GameControlComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
