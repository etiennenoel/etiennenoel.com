import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoGraphComponent } from './neo-graph.component';

describe('NeoGraphComponent', () => {
  let component: NeoGraphComponent;
  let fixture: ComponentFixture<NeoGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeoGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
