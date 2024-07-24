import { Component, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DialogService } from './shared/services/dialog.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    private readonly dialogService = inject(DialogService);

    // ! Problem: Infinite Search Windows can be opened, but when pressing the escape key, all of the open at the same time
    @HostListener('window:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault(); // Prevent default action if needed
            this.openSearchDialog();
        }
    }

    protected async openSearchDialog() {
        await this.dialogService.openSearchDialog();
    }
}
