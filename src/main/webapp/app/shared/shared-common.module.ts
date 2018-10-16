import { NgModule } from '@angular/core';

import { AwsMessageSqsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AwsMessageSqsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AwsMessageSqsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AwsMessageSqsSharedCommonModule {}
