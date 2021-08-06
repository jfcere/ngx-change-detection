import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Obj } from '../app.models';

@Component({
  selector: 'app-child-default',
  templateUrl: './child-default.component.html',
  styleUrls: ['./child-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ChildDefaultComponent {
  @Input() obj?: Obj;

  childObj: Obj = {
    strValue: 'from-child',
  };

  assignValueChange(value: string): void {
    this.childObj.strValue = value;
  }
}
