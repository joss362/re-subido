import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//se instalo otra libreria con el comando "pnpm install ngx-sonner"
import{NgxSonnerToaster} from 'ngx-sonner'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSonnerToaster],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-angular';
}
