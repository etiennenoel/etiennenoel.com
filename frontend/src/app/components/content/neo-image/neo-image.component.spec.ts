import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoImageComponent } from './neo-image.component';

describe('NeoImageComponent', () => {
  let component: NeoImageComponent;
  let fixture: ComponentFixture<NeoImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
