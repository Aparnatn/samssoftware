import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-job-master',
  templateUrl: './job-master.component.html',
  styleUrls: ['./job-master.component.scss']
})
export class JobMasterComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  onSubmit1(): void {

    this.router.navigate(['/grand-hyper']);
  }
  onSubmit2(): void {

    this.router.navigate(['/grand-hyper']);
  }
}
