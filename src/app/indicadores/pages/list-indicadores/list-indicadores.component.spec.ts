import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIndicadoresComponent } from './list-indicadores.component';

describe('ListIndicadoresComponent', () => {
  let component: ListIndicadoresComponent;
  let fixture: ComponentFixture<ListIndicadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIndicadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIndicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
