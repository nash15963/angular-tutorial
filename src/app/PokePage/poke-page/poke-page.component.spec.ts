import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokePageComponent } from './poke-page.component';

describe('PokePageComponent', () => {
  let component: PokePageComponent;
  let fixture: ComponentFixture<PokePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokePageComponent]
    });
    fixture = TestBed.createComponent(PokePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
