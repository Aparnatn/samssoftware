import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-supplier-outstand',
  templateUrl: './supplier-outstand.component.html',
  styleUrls: ['./supplier-outstand.component.scss']
})
export class SupplierOutstandComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  onSubmit1(): void {

    this.router.navigate(['/reports']);
  }
}
