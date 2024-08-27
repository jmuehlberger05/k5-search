import {
    Component,
    DestroyRef,
    HostListener,
    inject,
    signal,
} from '@angular/core';
import { DialogRef } from '../../services/dialog.service';
import { SearchInputComponent } from '../search-input/search-input.component';
import { SearchAccordeonComponent } from '../search-accordeon/search-accordeon.component';
import { SearchService } from '../../services/search.service';
import { SearchResultGroup } from '../../dtos';
import { SearchResultGroupComponent } from '../search/search-result-group/search-result-group.component';
import { SearchContactItemComponent } from '../search/search-contact-item/search-contact-item.component';
import { SearchActionItemComponent } from '../search/search-action-item/search-action-item.component';
import { NonNullableFormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-search-dialog',
    standalone: true,
    imports: [
        SearchInputComponent,
        SearchAccordeonComponent,
        SearchResultGroupComponent,
        SearchContactItemComponent,
        SearchActionItemComponent,
    ],
    templateUrl: './search-dialog.component.html',
})
export class SearchDialogComponent {
    private readonly dialogRef = inject(DialogRef);
    private readonly destroyRef = inject(DestroyRef);

    protected searchService = inject(SearchService);
    private readonly fb = inject(NonNullableFormBuilder);

    protected searchControl = this.fb.control<string>('');
    protected searchResults = signal<SearchResultGroup[]>([]);
    protected filteredSearchResults = signal<SearchResultGroup[]>([]);

    protected async getData() {
        const data = await this.searchService.getData();
        console.log(data);
        this.searchResults.set(data);
        this.filteredSearchResults.set(data);
    }

    ngOnInit() {
        this.getData();
        this.initSearch();
    }

    private initSearch() {
        this.searchControl.valueChanges
            .pipe(debounceTime(100), takeUntilDestroyed(this.destroyRef))
            .subscribe((value) => {
                this.filterResults(value);
            });
    }

    private filterResults(value: string) {
        console.log(value);
        console.log(this.searchResults());
        const filteredResults = this.searchResults().filter(
            (g: SearchResultGroup) => {
                return g.Title.toLowerCase().includes(value.toLowerCase());
            },
        );
        this.filteredSearchResults.set(filteredResults);
    }

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
