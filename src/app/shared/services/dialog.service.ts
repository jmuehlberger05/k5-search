import {
    ApplicationRef,
    computed,
    createComponent,
    inject,
    Injectable,
    Injector,
    signal,
    Type,
} from '@angular/core';
import { SearchDialogComponent } from '../components/search-dialog/search-dialog.component';
import { DOCUMENT } from '@angular/common';
import { DialogBackdropComponent } from '../components/search-dialog/dialog-backdrop.component';

export class DialogRef<TResult = void> {
    close(result: TResult | null = null): void {}
}

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    protected readonly document = inject(DOCUMENT);
    private readonly applicationRef = inject(ApplicationRef);
    private readonly injector = inject(Injector);

    private modalStack = signal<DialogRef<unknown>[]>([]);
    public readonly modalStackCount = computed(() => this.modalStack().length);

    public openSearchDialog() {
        return this.openDialog<SearchDialogComponent, void>(
            SearchDialogComponent,
            {
                width: 'clamp(30rem, 60vw, 60rem)',
            }
        );
    }

    private openDialog<TComponent, TResult>(
        componentType: Type<TComponent>,
        options: { width: string | null }
    ) {
        const container = this.document.body;

        const dialogRef = new DialogRef<TResult>();

        const elementInjector = Injector.create({
            providers: [{ provide: DialogRef, useValue: dialogRef }],
            parent: this.injector,
        });

        const component = createComponent(componentType, {
            environmentInjector: this.applicationRef.injector,
            elementInjector,
        });

        this.applicationRef.attachView(component.hostView);

        const backdropComponent = createComponent(DialogBackdropComponent, {
            environmentInjector: this.applicationRef.injector,
            elementInjector,
            projectableNodes: [[component.location.nativeElement]],
        });

        this.modalStack.update((stack) => [...stack, dialogRef]);

        backdropComponent.setInput('width', options.width);
        backdropComponent.setInput('level', this.modalStack().length);

        this.applicationRef.attachView(backdropComponent.hostView);
        container.appendChild(backdropComponent.location.nativeElement);

        return new Promise<TResult>((resolve) => {
            dialogRef.close = (result: TResult) => {
                container.removeChild(backdropComponent.location.nativeElement);

                backdropComponent.destroy();
                // component.destroy();

                this.modalStack.update((stack) =>
                    stack.filter((x) => x !== dialogRef)
                );

                resolve(result);
            };
        });
    }
}
