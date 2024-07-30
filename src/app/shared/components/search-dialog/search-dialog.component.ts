import { Component, HostListener, inject } from '@angular/core';
import { DialogRef } from '../../services/dialog.service';
import { SearchInputComponent } from '../search-input/search-input.component';
import { SearchAccordeonComponent } from '../search-accordeon/search-accordeon.component';
import { SearchService } from '../../services/search.service';

@Component({
    selector: 'app-search-dialog',
    standalone: true,
    imports: [SearchInputComponent, SearchAccordeonComponent],
    templateUrl: './search-dialog.component.html',
})
export class SearchDialogComponent {
    private readonly dialogRef = inject(DialogRef);

    protected searchService = inject(SearchService);

    protected async getData() {
        const data = await this.searchService.getData();
        console.log(data);
    }

    ngOnInit() {
        this.getData();
    }

    protected closeSearchDialog() {
        this.dialogRef.close();
    }
}
