import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Obj } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  obj: Obj = {
    strValue: 'from-appcomponent',
  };

  assignValueChange(value: string): void {
    this.obj.strValue = value;
  }

  immutableValueChange(value: string): void {
    this.obj = { ...this.obj, strValue: value };
  }
}
