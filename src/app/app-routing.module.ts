import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SkillsPageComponent } from "./components/skills-page/skills-page.component";
import { ContactPageComponent } from "./components/contact-page/contact-page.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'skills',component:SkillsPageComponent},
    {path:'contact',component:ContactPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }