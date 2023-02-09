import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferComponent } from './pages/transfer/transfer.component';

const routes: Routes = [
  {
    path: 'account',
    component: TransferComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class TransferRoutingModule {}