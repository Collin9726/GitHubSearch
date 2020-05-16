import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitLibComponent } from './git-lib.component';

describe('GitLibComponent', () => {
  let component: GitLibComponent;
  let fixture: ComponentFixture<GitLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
