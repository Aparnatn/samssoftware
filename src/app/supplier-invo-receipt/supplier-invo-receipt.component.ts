import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-supplier-invo-receipt',
  templateUrl: './supplier-invo-receipt.component.html',
  styleUrls: ['./supplier-invo-receipt.component.scss']
})
export class SupplierInvoReceiptComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  onSubmit1(): void {

    this.router.navigate(['/reports']);
  }
}
