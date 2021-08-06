import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Obj } from '../app.models';

@Component({
  selector: 'app-parent-onpush',
  templateUrl: './parent-onpush.component.html',
  styleUrls: ['./parent-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentOnpushComponent {
  @Input() obj?: Obj;
}
