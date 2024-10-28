import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatsFooterComponent } from './mats-footer.component';

describe('MatsFooterComponent', () => {
  let component: MatsFooterComponent;
  let fixture: ComponentFixture<MatsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatsFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
