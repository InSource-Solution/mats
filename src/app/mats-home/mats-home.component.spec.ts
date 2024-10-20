import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatsHomeComponent } from './mats-home.component';

describe('MatsHomeComponent', () => {
  let component: MatsHomeComponent;
  let fixture: ComponentFixture<MatsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatsHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
