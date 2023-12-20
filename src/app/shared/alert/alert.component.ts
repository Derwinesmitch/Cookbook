import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"],
})
export class AlertComponent {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  // this method closes the alert message when close button is clicked or when backdrop is clicked
  onClose() {
    this.close.emit();
  }
}
