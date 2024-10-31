import { Routes } from '@angular/router';
import { OnlyOfficeComponent } from './only-office/only-office.component';
import { TinyMCEComponent } from './tiny-mce/tiny-mce.component';

export const routes: Routes = [
  {
    path: 'onlyoffice',
    component: OnlyOfficeComponent
  },
  {
    path: 'tinymce',
    component: TinyMCEComponent
  }
];
