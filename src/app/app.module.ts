import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { TargetDirective } from './ng-template-outlet/target.directive';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { DiyFormControlComponent } from './diy-form-control/diy-form-control.component';
import { CounterComponent } from './diy-form-control/counter/counter.component';
import { PasswordComponent } from './diy-form-control/password/password.component';
import { ExportAsComponent } from './export-as/export-as.component';
import { ColorfulDirective } from './export-as/colorful.directive';
import { TemplateAnyComponent } from './template-any/template-any.component';
import { NgComponentOutletComponent } from './ng-component-outlet/ng-component-outlet.component';
import { ComponentAComponent } from './ng-component-outlet/component-a/component-a.component';
import { ComponentBComponent } from './ng-component-outlet/component-b/component-b.component';
import { ComponentCComponent } from './ng-component-outlet/component-c/component-c.component';
import { DynamicComponentDirective } from './ng-component-outlet/dynamic-component.directive';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { TemplateOutletDirective } from './structural-directive/template-outlet.directive';
import { IfDirective } from './structural-directive/if.directive';
import { ForDirective } from './structural-directive/for.directive';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './interceptor/http-interceptor.service';
import { AnotherHttpInterceptorService } from './interceptor/another-http-interceptor.service';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { InitializerComponent } from './initializer/initializer.component';
import { ConfigService } from './initializer/config.service';
import { InjectorComponent } from './injector/injector.component';
import { ChangeDetectorComponent } from './change-detector/change-detector.component';
import { ChangeDetectionStrategyComponent } from './change-detection-strategy/change-detection-strategy.component';

class MyErrorHandler implements ErrorHandler {
  handleError(err) {
    console.log(err.message);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NgTemplateOutletComponent,
    TargetDirective,
    NgContainerComponent,
    DiyFormControlComponent,
    CounterComponent,
    PasswordComponent,
    ExportAsComponent,
    ColorfulDirective,
    TemplateAnyComponent,
    NgComponentOutletComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    DynamicComponentDirective,
    StructuralDirectiveComponent,
    TemplateOutletDirective,
    IfDirective,
    ForDirective,
    InterceptorComponent,
    ErrorHandlerComponent,
    InitializerComponent,
    InjectorComponent,
    ChangeDetectorComponent,
    ChangeDetectionStrategyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: (service) => service.getConfig(), deps: [ConfigService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AnotherHttpInterceptorService, multi: true },
    { provide: ErrorHandler, useClass: MyErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
