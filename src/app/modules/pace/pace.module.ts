import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { apisIgnored, configNgProgressModule, configNgProgressRouterModule } from './pace.common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgProgressHttpModule.withConfig({ silentApis: apisIgnored }),
    NgProgressModule.withConfig(configNgProgressModule),
    NgProgressRouterModule.withConfig(configNgProgressRouterModule),
  ],
  exports: [NgProgressHttpModule, NgProgressModule, NgProgressRouterModule]
})
export class PaceModule { }
