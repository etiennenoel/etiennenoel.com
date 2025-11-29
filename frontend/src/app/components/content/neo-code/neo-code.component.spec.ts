import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoCodeComponent } from './neo-code.component';

describe('NeoCodeComponent', () => {
  let component: NeoCodeComponent;
  let fixture: ComponentFixture<NeoCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeoCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
