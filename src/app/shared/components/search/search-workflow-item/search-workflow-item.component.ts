import { Component, input, signal } from '@angular/core';
import { WorkflowSearchResultDTO } from '../../../dtos';
import { AppIconComponent } from '../../icons/icon.component';

@Component({
    selector: 'app-workflow-action-item',
    standalone: true,
    imports: [AppIconComponent],
    templateUrl: './search-workflow-item.component.html',
})
export class SearchWorkflowItemComponent {
    public workflow = input.required<WorkflowSearchResultDTO>();

    protected isOpen = signal<boolean>(false);

    protected toggleAccordeon() {
        this.isOpen.update((isOpen) => !isOpen);
        console.log('Accordeon is open:', this.isOpen());
    }
}
