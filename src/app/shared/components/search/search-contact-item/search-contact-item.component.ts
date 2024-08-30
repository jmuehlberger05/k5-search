import { Component, input } from '@angular/core';
import { ContactSearchResultDTO } from '../../../dtos';
import { AppIconComponent } from '../../icons/icon.component';

@Component({
    selector: 'app-search-contact-item',
    standalone: true,
    imports: [AppIconComponent],
    template: `
        <div
            class="border-gray-200 border-b-[1px] px-4 overflow-hidden focus-within:bg-gray-100"
        >
            <button
                class="flex justify-between gap-4 w-full items-center my-2 focus-within:outline-none"
            >
                <div
                    class="grid grid-cols-[auto_1fr_1.5fr] w-full text-left items-center"
                >
                    <app-icon icon="user" class="w-[1.8rem]" color="#5E9CA9" />
                    <span>
                        {{ contact().name }}
                    </span>
                    <span class=" text-sm text-gray-600">
                        {{ contact().address }}
                    </span>
                </div>
                <app-icon icon="open-external" class="w-[1.5rem]" />
            </button>
        </div>
    `,
})
export class SearchContactItemComponent {
    public contact = input.required<ContactSearchResultDTO>();
}
