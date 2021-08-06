import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Obj } from '../app.models';

@Component({
  selector: 'app-grandchild-default',
  templateUrl: './grandchild-default.component.html',
  styleUrls: ['./grandchild-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class GrandchildDefaultComponent {
  @Input() obj?: Obj;
  @Input() child?: Obj;
}
