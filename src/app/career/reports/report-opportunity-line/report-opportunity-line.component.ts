import { Component, Input } from '@angular/core';
import { Opportunity } from '../../opportunity/opportunity.class';

@Component({
  selector: 'app-report-opportunity-line',
  templateUrl: './report-opportunity-line.component.html',
  styleUrls: ['./report-opportunity-line.component.css']
})
export class ReportOpportunityLineComponent {

  @Input() opportunity!: Opportunity;

  ngOnInit(): void {
    console.debug("Opportunity:", this.opportunity);
  }
}
