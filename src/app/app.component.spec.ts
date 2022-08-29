import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

const postItem = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }
];

describe('AppComponent', () => {

  beforeAll(() => {
    console.log('Called before all specs are run');
  });
  afterAll(() => {
    console.log('Called after all specs are run');
  });

  beforeEach(() => {
    console.log('Called before each spec is run');
  });
  afterEach(() => {
    console.log('Called after each spec is run');
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular_test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular_test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular_test app is running!');
  });

  it('should fetch data and save it in the component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const dataService = TestBed.inject(DataService);
    const fetchedDataSpy = spyOn(dataService, 'fetchData').and.returnValue([1, 2]);
    expect(app.data.length).toEqual(0);
    app.ngOnInit();
    expect(app.data.length).toEqual(2);
    expect(fetchedDataSpy).toHaveBeenCalledTimes(1);
  })

  it('should fetch data and assign in data if length is greater then zero', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const dataService = TestBed.inject(DataService);
    const fetchedDataSpy = spyOn(dataService, 'fetchData').and.returnValue([]);
    expect(app.data.length).toEqual(0);
    app.ngOnInit();
    expect(app.data.length).toEqual(0);
    expect(fetchedDataSpy).toHaveBeenCalledTimes(1);
  })


  it('should verify getPosts', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const dataService = TestBed.inject(DataService);
    const fetchedDataSpy = spyOn(dataService, 'getPosts').and.returnValue(of(postItem));
    expect(app.posts.length).toEqual(0);
    app.ngOnInit();
    expect(app.data.length).toEqual(4);
    expect(fetchedDataSpy).toHaveBeenCalledTimes(1);
  })
});
