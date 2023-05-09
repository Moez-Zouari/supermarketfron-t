import { Component } from '@angular/core';
import { Commande } from '../commande';
import { CommadeService } from '../commande.service';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allCommandes: Commande[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private commandeService: CommadeService) {}

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

    this.get();
  }

  get() {
    this.commandeService.get().subscribe((data) => {
      this.allCommandes = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.commandeService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allCommandes = this.allCommandes.filter(
          (_) => _.id != this.idTodelete
        );
        this.deleteModal.hide();
      },
    });
  }
}
