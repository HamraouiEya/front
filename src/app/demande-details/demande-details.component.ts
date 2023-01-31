import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Demande } from '../demande';
import { DemandeService } from '../demande.service';

@Component({
  selector: 'app-demande-details',
  templateUrl: './demande-details.component.html',
  styleUrls: ['./demande-details.component.css']
})
export class DemandeDetailsComponent {

  id_dem!: string;
  dem!: Demande;

  constructor(private route: ActivatedRoute,private router: Router,
    private demService: DemandeService) { }

  ngOnInit() {
    this.dem = new Demande();

    this.id_dem = this.route.snapshot.params['id_dem'];
    console.log("id:"+this.id_dem);
    this.demService.getDem(this.id_dem)
      .subscribe(data => {
        console.log(data)
        this.dem = data;
      }, error => console.log(error));
  }

}
