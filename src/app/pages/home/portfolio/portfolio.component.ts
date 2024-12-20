import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../components/section-header/section-header.component';
import { ProjectsListComponent } from "../../../components/projects-list/projects-list.component";
import { projects } from "../../../../../public/data/projects.json";
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    ProjectsListComponent,
    ButtonComponent
],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects: any[] = projects;

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
