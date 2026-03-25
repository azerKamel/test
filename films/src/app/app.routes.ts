import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [];
@NgModule({
imports: [RouterModule.forRoot(routes,
{preloadingStrategy: PreloadAllModules}
)],
exports: [RouterModule]
})
export  class  AppRoutingModule{}