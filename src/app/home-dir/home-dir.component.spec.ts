import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDirComponent } from './home-dir.component';

describe('HomeDirComponent', () => {
  let component: HomeDirComponent;
  let fixture: ComponentFixture<HomeDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
