import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import {fromEvent, map, pairwise, exhaustMap, startWith, Observable, filter} from "rxjs";

interface ScrollPosition {
  sH: number;
  sT: number;
  cH: number;
}

const DEFAULT_SCROLL_POSITION: ScrollPosition = {
  sH: 0,
  sT: 0,
  cH: 0
};

@Directive({
  selector: '[appInfiniteScroller]'
})
export class InfiniteScrollerDirective implements AfterViewInit {

  private scrollEvent$: Observable<any> | undefined;
  private userScrolledDown$: Observable<any> | undefined;
  private requestOnScroll$: Observable<any> | undefined;

  @Input() scrollCallback: any;

  @Input() immediateCallback: boolean = false;

  @Input() scrollPercent: number = 85;

  constructor(private elm: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.registerScrollEvent();
    this.streamScrollEvents();
    this.requestCallbackOnScroll();
  }

  private registerScrollEvent() {
    this.scrollEvent$ = fromEvent(this.elm.nativeElement, 'scroll');
    // this.scrollEvent$ = fromEvent(window, 'scroll');
  }

  private streamScrollEvents() {
    // @ts-ignore
    this.userScrolledDown$ = this.scrollEvent$.pipe(
      map((e: any): ScrollPosition => ({
        sH: e.target.scrollHeight,
        sT: e.target.scrollTop,
        cH: e.target.clientHeight
      })),
      pairwise(),
      filter(positions => this.isUserScrollingDown(positions) && this.isScrollExpectedPercent(positions[1])));
  }

  private isUserScrollingDown = (positions: ScrollPosition[]) => {
    return positions[0].sT < positions[1].sT;
  }

  private isScrollExpectedPercent = (position: ScrollPosition) => {
    return ((position.sT + position.cH) / position.sH) > (this.scrollPercent / 100);
  }

  private requestCallbackOnScroll() {

    this.requestOnScroll$ = this.userScrolledDown$;

    if (this.immediateCallback) {
      // @ts-ignore
      this.requestOnScroll$ = this.requestOnScroll$.pipe(
        startWith([DEFAULT_SCROLL_POSITION, DEFAULT_SCROLL_POSITION]));
    }

    // @ts-ignore
    this.requestOnScroll$.pipe(
      exhaustMap(() => {
        return this.scrollCallback();
      }))
      .subscribe((data) => { console.log(data); }, (err) => console.log(err));

  }
}
