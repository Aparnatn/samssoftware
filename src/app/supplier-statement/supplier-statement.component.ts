import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-supplier-statement',
  templateUrl: './supplier-statement.component.html',
  styleUrls: ['./supplier-statement.component.scss']
})
export class SupplierStatementComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  onSubmit1(): void {

    this.router.navigate(['/reports']);
  }
}
