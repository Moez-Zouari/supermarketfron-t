import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from '../commande';
import { CommadeService } from '../commande.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  commandeForm: Commande = {
    id: 0,
    commandeDate: new Date(Date.now()),
  };

  constructor(
    private commandeService: CommadeService,

    private router: Router
  ) {}

  create() {
    this.commandeService.create(this.commandeForm).subscribe({
      next: (data) => {
        this.router.navigate(['/commande/home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
