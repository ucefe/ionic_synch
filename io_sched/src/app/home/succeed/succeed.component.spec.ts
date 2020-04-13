import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SucceedComponent } from './succeed.component';

describe('SucceedComponent', () => {
  let component: SucceedComponent;
  let fixture: ComponentFixture<SucceedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucceedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SucceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
