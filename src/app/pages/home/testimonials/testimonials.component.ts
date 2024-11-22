import { Component } from '@angular/core';
import { SectionParagraphComponent } from "../../../components/section-paragraph/section-paragraph.component";
import { TestimonialsListComponent } from "./testimonials-list/testimonials-list.component";
import { SectionHeaderComponent } from "../../../components/section-header/section-header.component";

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [SectionParagraphComponent, TestimonialsListComponent, SectionHeaderComponent],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  
}