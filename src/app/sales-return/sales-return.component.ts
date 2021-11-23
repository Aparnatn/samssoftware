import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../services/sales.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { CashFrom,SalesreturnRequest } from '../interfaces/sales.interfaces';
@Component({
  selector: 'app-sales-return',
  templateUrl: './sales-return.component.html',
  styleUrls: ['./sales-return.component.scss']
})
export class SalesReturnComponent implements OnInit {

  salesReturnForm = this.formBuilder.group({
    invoice_number: '',
    date: '',
    internal_ref_no: '',

    user_id: '',

    customer_id: '',
    customer_name: '',
    item_id1: '',
    item_id2: '',
    item_details1: '',
    item_details2: '',
    price1_1: '',
    price1_2: '',
    quantity1: '',
    quantity2: '',
    amount1: '',
    amount2: '',
    sales_ex1: '',
    sales_ex2: '',
    job1: '',
    job2: '',
    labour_charge: '',
    other_charge: '',
    total1: '',
    total2: '',
    total3: '',
    discount: '',
  });

  constructor(
    private http: HttpClient,
    private router: Router,
    private service: SalesService,
    private formBuilder: FormBuilder
  ) { }

   ngOnInit(): void {
  //   const headers = new Headers();
  //   headers.append('Access-Control-Allow-Headers', 'Content-Type');
  //   headers.append('Access-Control-Allow-Methods', 'GET');
  //   headers.append('Access-Control-Allow-Origin', '*');
  //   this.http.post("http://127.0.0.1:8004/Sam/cashapi", { headers: headers }).subscribe(res => {

  //     console.log(res);
  //   });
   }

  calcualtTotal() {
    const form: CashFrom = this.salesReturnForm.value;

    const amount1 = Number(form.price1_1) * Number(form.quantity1);
    const amount2 = Number(form.price1_2) * Number(form.quantity2);
    const amount3 = amount1+amount2
    const total1 = amount3+Number(form.labour_charge) + Number(form.other_charge);
    const total2 = total1 - Number(form.discount);
    const total3 = total2

    this.salesReturnForm.patchValue({
      "amount1": amount1,
      "amount2": amount2,
      "total1": total1,
      "total2": String(total2),
      "total3": total3,
      "cash": total3

    });
  }

  onSubmit(): void {
    this.service.salesReturn(this.salesReturnForm.value,).subscribe((data,) => {
      console.log(data);
    });
    this.router.navigate(['/grand-hyper']);
  }
}
