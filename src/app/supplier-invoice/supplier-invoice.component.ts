import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-supplier-invoice',
  templateUrl: './supplier-invoice.component.html',
  styleUrls: ['./supplier-invoice.component.scss']
})
export class SupplierInvoiceComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  onSubmit1(): void {

    this.router.navigate(['/reports']);
  }
}
