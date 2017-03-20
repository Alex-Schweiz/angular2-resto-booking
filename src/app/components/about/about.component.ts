import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
  pageTitle: string = 'About our company';
  pageDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cum deserunt dolorum eaque facere, impedit ipsum maiores minima nihil numquam quidem quis reiciendis repellendus sequi sit! A aperiam consequatur dolore eligendi enim exercitationem expedita incidunt inventore laborum libero maiores nemo obcaecati pariatur perferendis quam quis tempora temporibus, ut? ';
}
