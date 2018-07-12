import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule } from '@angular/material';

@NgModule({
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule],
    exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule]
})

export class MaterialModule {}
