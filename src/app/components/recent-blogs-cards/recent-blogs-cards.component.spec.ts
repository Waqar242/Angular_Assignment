import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBlogsCardsComponent } from './recent-blogs-cards.component';

describe('RecentBlogsCardsComponent', () => {
  let component: RecentBlogsCardsComponent;
  let fixture: ComponentFixture<RecentBlogsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentBlogsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentBlogsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
