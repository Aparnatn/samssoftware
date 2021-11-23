import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule,Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyComponent } from './company/company.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ItemComponent } from './item/item.component';
import { JobComponent } from './job/job.component';
import { GroupComponent } from './group/group.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { SalesComponent } from './sales/sales.component';
import { CashComponent } from './cash/cash.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ReportsComponent } from './reports/reports.component';
import { ChartsComponent } from './charts/charts.component';
import { PurchaseReceiptsComponent } from './purchase-receipts/purchase-receipts.component';
import { CreditSalesComponent } from './credit-sales/credit-sales.component';
import { SalesReturnComponent } from './sales-return/sales-return.component';
import { CashPurchaseComponent } from './cash-purchase/cash-purchase.component';
import { CreditPurchaseComponent } from './credit-purchase/credit-purchase.component';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';
import { SalesReceiptsComponent } from './sales-receipts/sales-receipts.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { GrandHyperComponent } from './grand-hyper/grand-hyper.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PayrollComponent } from './payroll/payroll.component';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierStatementComponent } from './supplier-statement/supplier-statement.component';
import { CustomerOutstandingComponent } from './customer-outstanding/customer-outstanding.component';
import { CustomerInvoiceComponent } from './customer-invoice/customer-invoice.component';
import { CustomerReceiptsComponent } from './customer-receipts/customer-receipts.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { CustomerMasterComponent } from './customer-master/customer-master.component';
import { UserService } from './user/user.service';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { SalesService } from './services/sales.service';
import { CashSaleEditComponent } from './cash-sale-edit/cash-sale-edit.component';
import { CreditSaleEditComponent } from './credit-sale-edit/credit-sale-edit.component';
import { SaleReturnEditComponent } from './sale-return-edit/sale-return-edit.component';
import { ReceiptEditComponent } from './receipt-edit/receipt-edit.component';
import { CashPurchaseEditComponent } from './cash-purchase-edit/cash-purchase-edit.component';
import { CreditPurchaseEditComponent } from './credit-purchase-edit/credit-purchase-edit.component';
import { PurchaseReturnEditComponent } from './purchase-return-edit/purchase-return-edit.component';
import { PurchaseReceiptEditComponent } from './purchase-receipt-edit/purchase-receipt-edit.component';
import { LedgerComponent } from './ledger/ledger.component';
import { LedgershowComponent } from './ledgershow/ledgershow.component';
import { LedgereditComponent } from './ledgeredit/ledgeredit.component';
import { TrialBalanceComponent } from './trial-balance/trial-balance.component';
import { CommonModule } from '@angular/common';
import { LedgerStatementComponent } from './ledger-statement/ledger-statement.component';
import { SamFoftwareInterceptor } from './sam-software.interceptor';
import { ProfitLossComponent } from './profit-loss/profit-loss.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { FinancialComponent } from './financial/financial.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { CompanyeditComponent } from './companyedit/companyedit.component';
import { CompanydeleteComponent } from './companydelete/companydelete.component';
import { CookieModule } from 'ngx-cookie';
import { UserlistComponent } from './userlist/userlist.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomePageComponent,
    RegistrationComponent,
    SuppliersComponent,
    ItemComponent,
    JobComponent,
    GroupComponent,
    EmployeeComponent,
    UserComponent,
    SalesComponent,
    LedgerComponent,
    LedgerStatementComponent,
    CashComponent,
    PurchaseReceiptsComponent,
    CreditSalesComponent,
    SalesReturnComponent,
    CashPurchaseComponent,
    CreditPurchaseComponent,
    PurchaseReturnComponent,
    CompanyComponent,
    SalesReceiptsComponent,
    FileUploadComponent,
    GrandHyperComponent,
    PurchaseComponent,
    PayrollComponent,
    JournalEntryComponent,
    CustomerComponent,
    SupplierStatementComponent,
    CustomerOutstandingComponent,
    CustomerInvoiceComponent,
    CustomerReceiptsComponent,
    CustomerRegisterComponent,
    CustomerMasterComponent,
    UserRegisterComponent,
    ReportsComponent,
    ChartsComponent,
    CustomerEditComponent,
    SupplierEditComponent,
    ItemEditComponent,
    EmployeeEditComponent,
    CashSaleEditComponent,
    CreditSaleEditComponent,
    SaleReturnEditComponent,
    ReceiptEditComponent,
    CashPurchaseEditComponent,
    CreditPurchaseEditComponent,
    PurchaseReturnEditComponent,
    PurchaseReceiptEditComponent,
    LedgershowComponent,
    LedgereditComponent,
    TrialBalanceComponent,
    ProfitLossComponent,
    BalanceSheetComponent,
    FinancialComponent,
    DashboardComponent,
    CompanylistComponent,
    CompanyeditComponent,
    CompanydeleteComponent,
    CompanyComponent,
    CustomerMasterComponent,
    UserlistComponent,
    CustomerEditComponent,
    LedgereditComponent,
    EmployeeEditComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CookieModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SamFoftwareInterceptor, multi: true },
    UserService,
    SalesService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

