import { Component, HostListener, inject, signal } from '@angular/core';
import { DialogRef } from '../../services/dialog.service';
import { SearchInputComponent } from '../search-input/search-input.component';
import { SearchAccordeonComponent } from '../search-accordeon/search-accordeon.component';
import { SearchService } from '../../services/search.service';
import { SearchResultGroup } from '../../dtos';
import { SearchResultGroupComponent } from '../search/search-result-group/search-result-group.component';
import { SearchContactItemComponent } from '../search/search-contact-item/search-contact-item.component';
import { SearchActionItemComponent } from '../search/search-action-item/search-action-item.component';

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
    protected searchService = inject(SearchService);

    protected searchResults = signal<SearchResultGroup[]>([]);

    protected async getData() {
        const data = await this.searchService.getData();
        console.log(data);
        this.searchResults.set(data);
    }

    ngOnInit() {
        this.getData();
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
