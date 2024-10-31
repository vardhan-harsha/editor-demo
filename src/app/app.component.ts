import { Component } from "@angular/core"
import { Router, RouterOutlet } from "@angular/router";


@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
})
export class AppComponent {
 
  constructor(private router: Router) {}

  navigateToEditor(editor: 'onlyoffice' | 'tinymce') {
    this.router.navigate([editor]);
  }
}