import { Component, Inject, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LazyService } from '../lazy.service'
import { FormsModule } from '@angular/forms'

@Component({
  // FormsModule just to force another chunk for `app-lazy-standalone` otherwise it would be merged with common.js
  imports: [CommonModule, FormsModule],
  selector: 'app-lazy-standalone',
  templateUrl: './lazy-standalone.component.html',
  styleUrls: ['./lazy-standalone.component.css'],
  standalone: true,
})
export class LazyStandaloneComponent implements OnInit {
  condition!: boolean
  config!: string
  constructor(@Inject('config') private _config: string, private _lazy: LazyService) {}

  ngOnInit(): void {
    console.log('LazyService.foo', this._lazy.foo)
    this.condition = true
    this.config = this._config
  }
}
