import { Component, HostListener, inject } from '@angular/core';
import { DialogRef } from '../../services/dialog.service';
import { SearchInputComponent } from '../search-input/search-input.component';
import { SearchAccordeonComponent } from '../search-accordeon/search-accordeon.component';

@Component({
    selector: 'app-search-dialog',
    standalone: true,
    imports: [SearchInputComponent, SearchAccordeonComponent],
    templateUrl: './search-dialog.component.html',
})
export class SearchDialogComponent {
    private readonly dialogRef = inject(DialogRef);

    @HostListener('window:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            event.preventDefault();
            this.closeSearchDialog();
        }
    }

    protected closeSearchDialog() {
        this.dialogRef.close();
    }
}
