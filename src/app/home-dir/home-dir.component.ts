import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Demande } from '../demande';
import { DemandeService } from '../demande.service';

@Component({
  selector: 'app-home-dir',
  templateUrl: './home-dir.component.html',
  styleUrls: ['./home-dir.component.css']
})
export class HomeDirComponent {
  demandes!: Observable<Demande[]>;
  id_dem!: string;
  dem!: Demande;
  
  constructor(private demService: DemandeService,
    private router: Router) {}

    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.demandes = this.demService.getDemandesList();
    }
    accept()
    {
      {{this.dem.etat=true}};
    }
  
    refus()
    {
      {{this.dem.etat=false}};
    }
}
