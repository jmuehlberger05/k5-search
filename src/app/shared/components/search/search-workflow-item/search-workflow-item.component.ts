import { Component, inject, input, signal } from '@angular/core';
import {
    WorkflowSearchResultDTO,
    WorkflowSearchResultOptionDTO,
} from '../../../dtos';
import { AppIconComponent } from '../../icons/icon.component';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

type ReactiveCheckFormItem = {
    id: string;
    title: string;
    url: string;
};

@Component({
    selector: 'app-workflow-action-item',
    standalone: true,
    imports: [AppIconComponent, ReactiveFormsModule],
    templateUrl: './search-workflow-item.component.html',
})
export class SearchWorkflowItemComponent {
    public workflow = input.required<WorkflowSearchResultDTO>();
    protected isOpen = signal<boolean>(false);

    private readonly fb = inject(NonNullableFormBuilder);
    protected workflowCheckForm = this.fb.array([]);
    protected openTabsNumber = signal<number>(0);

    ngOnInit() {
        for (const option of this.workflow().options) {
            this.workflowCheckForm.push(this.fb.control<boolean>(true));
        }

        this.workflowCheckForm.valueChanges.subscribe((value) => {
            this.openTabsNumber.update(() => value.filter((v) => v).length);
            console.log('Workflow check form value:', value);
        });

        this.openTabsNumber.update(
            () => this.workflowCheckForm.controls.filter((v) => v).length,
        );
    }

    protected openTabs = (): WorkflowSearchResultOptionDTO[] => {
        let tabsToOpen = this.workflow().options.filter(
            (_, index) => this.workflowCheckForm.at(index).value,
        );

        console.log('Open tabs:', tabsToOpen);
        return tabsToOpen;
    };

    protected toggleAccordeon() {
        this.isOpen.update((isOpen) => !isOpen);
        console.log('Accordeon is open:', this.isOpen());
    }
}
