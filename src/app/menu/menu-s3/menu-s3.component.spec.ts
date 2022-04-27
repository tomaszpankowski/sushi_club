import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuS3Component } from './menu-s3.component';

describe('MenuS3Component', () => {
  let component: MenuS3Component;
  let fixture: ComponentFixture<MenuS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
