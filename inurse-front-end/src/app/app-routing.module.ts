import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    loadChildren: () => import('./ficha-paciente/ficha-paciente.module').then( m => m.FichaPacientePageModule)
  },
  {
    path: 'pantalla-principal',
    loadChildren: () => import('./pantalla-principal/pantalla-principal.module').then( m => m.PantallaPrincipalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },  {
    path: 'visita',
    loadChildren: () => import('./visita/visita.module').then( m => m.VisitaPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
