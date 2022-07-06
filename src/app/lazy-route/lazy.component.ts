import { Component, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core'

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css'],
})
export class LazyComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef }) containerRef!: ViewContainerRef

  constructor() {}

  ngOnInit(): void {}

  async loadNonStandalone() {
    const { LazyNonStandaloneComponent } = await import(
      './lazy-non-standalone/lazy-non-standalone.component'
    )
    this.containerRef.createComponent(LazyNonStandaloneComponent)
  }

  async loadStandalone() {
    const { LazyStandaloneComponent } = await import('./lazy-standalone/lazy-standalone.component')
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
