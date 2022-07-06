import { Component, NgModule, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-lazy-non-standalone',
  templateUrl: './lazy-non-standalone.component.html',
  styleUrls: ['./lazy-non-standalone.component.css'],
})
export class LazyNonStandaloneComponent implements OnInit {
  condition!: boolean

  constructor() {}

  ngOnInit(): void {
    this.condition = true
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [LazyNonStandaloneComponent],
})
export class LazyNonStandaloneComponentModule {}
