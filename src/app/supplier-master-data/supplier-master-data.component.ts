import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-supplier-master-data',
  templateUrl: './supplier-master-data.component.html',
  styleUrls: ['./supplier-master-data.component.scss']
})
export class SupplierMasterDataComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  onSubmit1(): void {

    this.router.navigate(['/reports']);
  }
}
