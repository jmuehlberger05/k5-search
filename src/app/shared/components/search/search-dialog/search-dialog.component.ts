import { Component, DestroyRef, inject, signal } from '@angular/core';
import { DialogRef } from '../../../services/dialog.service';
import { SearchInputComponent } from '../search-input/search-input.component';
import { SearchService } from '../../../services/search.service';
import { SearchResultDTO } from '../../../dtos';
import { SearchResultGroupComponent } from '../search-result-group/search-result-group.component';
import { SearchContactItemComponent } from '../search-contact-item/search-contact-item.component';
import { SearchWorkflowItemComponent } from '../search-workflow-item/search-workflow-item.component';
import { NonNullableFormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SearchTaskItemComponent } from '../search-task-item/search-task-item.component';

@Component({
    selector: 'app-search-dialog',
    standalone: true,
    imports: [
        SearchInputComponent,
        SearchResultGroupComponent,
        SearchContactItemComponent,
        SearchWorkflowItemComponent,
        SearchTaskItemComponent,
    ],
    templateUrl: './search-dialog.component.html',
    styles: `
        /* width */
        .search-results::-webkit-scrollbar {
            width: 10px;
        }

        /* Track */
        .search-results::-webkit-scrollbar-track {
            @apply bg-neutral-100;
        }

        /* Handle */
        .search-results::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 5px;
        }

        /* Handle on hover */
        .search-results::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    `,
})
export class SearchDialogComponent {
    private readonly dialogRef = inject(DialogRef);
    private readonly destroyRef = inject(DestroyRef);

    protected searchService = inject(SearchService);
    private readonly fb = inject(NonNullableFormBuilder);

    protected searchControl = this.fb.control<string>('');
    // protected searchResults = signal<SearchResultGroup[]>([]);
    // protected filteredSearchResults = signal<SearchResultGroup[]>([]);

    protected APISearchResults = signal<SearchResultDTO>({
        contacts: [],
        workflows: [],
        tasks: [],
    });

    ngOnInit() {
        this.getInitialData();
        this.initSearch();
    }

    protected async getInitialData() {
        const data = await this.searchService.getInitialData();
        this.APISearchResults.set(data);
        // console.log(data);
        // this.searchResults.set(data);
        // this.filteredSearchResults.set(data);
    }

    private async getSearchData(query: string) {
        let value = await this.searchService.getSearchData(query);

        console.log(value);
        this.APISearchResults.set(value);
    }

    private initSearch() {
        this.searchControl.valueChanges
            .pipe(debounceTime(100), takeUntilDestroyed(this.destroyRef))
            .subscribe((value) => {
                // this.filterResults(value);
                this.getSearchData(value);
            });
    }

    // private filterResults(value: string) {
    //     console.log(value);
    //     console.log(this.searchResults());
    //     const filteredResults = this.searchResults().filter(
    //         (g: SearchResultGroup) => {
    //             return g.title.toLowerCase().includes(value.toLowerCase());
    //         },
    //     );
    //     this.filteredSearchResults.set(filteredResults);
    // }

    protected closeSearchDialog() {
        this.dialogRef.close();
    }

    /**
     * TODO: Arrow Key Navigation
     * TODO: Mouse Hover Navigation -> Select Item when mouse is over it
     *
     * TODO: Form Control for the Checkboxes and update Button-Count
     */
}
