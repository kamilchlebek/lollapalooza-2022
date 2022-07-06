import { Component, Injector, ViewChild, ViewContainerRef } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef }) containerRef!: ViewContainerRef

  title = 'lollapalooza-2022'

  async loadStandalone() {
    const { LazyStandaloneComponent } = await import('./lazy-route/lazy-standalone/lazy-standalone.component')
    this.containerRef.createComponent(LazyStandaloneComponent, {
      injector: Injector.create({
        providers: [
          {
            provide: 'config',
            useValue: `some value:${Math.random()}`,
          },
        ],
      }),
    })
  }
}
