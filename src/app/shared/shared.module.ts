import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { ExponentialPipe } from './pipes/exponential.pipe';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ExponentialPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ExponentialPipe
    ]
})

export class SharedtModule {}
