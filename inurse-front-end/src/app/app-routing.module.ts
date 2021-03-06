import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  /*{
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  }, */
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'

  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'ficha-paciente',
    loadChildren: () => import('./ficha-paciente/ficha-paciente.module').then( m => m.FichaPacientePageModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'pantalla-principal',
    loadChildren: () => import('./pantalla-principal/pantalla-principal.module').then( m => m.PantallaPrincipalPageModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),

  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'visita',
    loadChildren: () => import('./visita/visita.module').then( m => m.VisitaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'buscador',
    loadChildren: () => import('./buscador/buscador.module').then( m => m.BuscadorPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-visita',
    loadChildren: () => import('./add-visita/add-visita.module').then( m => m.AddVisitaPageModule),

  },
  {
    path: 'last-patient',
    loadChildren: () => import('./last-patient/last-patient.module').then( m => m.LastPatientPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'fix-patient',
    loadChildren: () => import('./fix-patient/fix-patient.module').then( m => m.FixPatientPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'show-patient',
    loadChildren: () => import('./show-patient/show-patient.module').then( m => m.ShowPatientPageModule),
    canActivate: [AuthGuard]
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
