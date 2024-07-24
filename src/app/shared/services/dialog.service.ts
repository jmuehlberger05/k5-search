import {
  ApplicationRef,
  createComponent,
  inject,
  Injectable,
  Injector,
  Signal,
  Type,
  ViewContainerRef,
} from '@angular/core';
import {
  DialogBackdropComponent,
  SearchDialogComponent,
} from '../components/search-dialog/search-dialog.component';
import { DOCUMENT } from '@angular/common';

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

  public openSearchDialog() {
    return this.openDialog<SearchDialogComponent, void>(SearchDialogComponent, {
      width: '300px',
    });
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

    const backdropComponent = createComponent(DialogBackdropComponent, {
      environmentInjector: this.applicationRef.injector,
      elementInjector,
      projectableNodes: [[component.location.nativeElement]],
    });

    // backdropComponent.setInput('width', '600px');

    // const newComponentInstance = backdropComponent.instance as withWidth;
    // newComponentInstance.width.bind(options.width);

    // const dialogComponent = {
    //   ...backdropComponent,
    //   location: backdropComponent.location,
    //   instance: newComponentInstance.width.bind(options.width),
    // };

    container.appendChild(backdropComponent.location.nativeElement);

    return new Promise<TResult>((resolve) => {
      dialogRef.close = (result: TResult) => {
        container.removeChild(backdropComponent.location.nativeElement);
        resolve(result);
      };
    });
  }
}
