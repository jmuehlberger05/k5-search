import { Component, input } from '@angular/core';
import { TaskSearchResultDTO } from '../../../dtos';
import { AppIconComponent } from '../../icons/icon.component';

@Component({
    selector: 'app-search-task-item',
    standalone: true,
    imports: [AppIconComponent],
    styles: ``,
    template: `
        <div
            class="border-gray-200 border-b-[1px] px-4 overflow-hidden focus-within:bg-gray-100"
        >
            <button
                class="flex justify-between gap-4 w-full items-center my-2 focus-within:outline-none"
            >
                <div class="flex  w-full text-left items-center">
                    <app-icon
                        [icon]="task().icon"
                        class="w-[1.5rem]"
                        color="#5E9CA9"
                    />

                    {{ task().title }}
                </div>
                <app-icon icon="open-external" class="w-[1.5rem]" />
            </button>
        </div>
    `,
})
export class SearchTaskItemComponent {
    public task = input.required<TaskSearchResultDTO>();
}
