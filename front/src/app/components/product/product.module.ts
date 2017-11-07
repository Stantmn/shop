import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductComponent} from './product.component';
import {ProductRoutingModule} from './product-routing.module';
import {ModalComponent} from "../../shared/modal/modal.component";
import {ModalModule} from "../../shared/modal/modal.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        ProductRoutingModule,
        ModalModule
    ],
    providers: [ModalComponent],
    declarations: [ProductComponent]
})
export class ProductModule {
}
