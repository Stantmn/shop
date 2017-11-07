import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MobileMenuComponent} from './components/mobile-menu/mobile-menu.component';
import {HeaderComponent} from './components/header/header.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {SliderComponent} from './components/slider/slider.component';
import {FeaturesComponent} from './components/features/features.component';
import {BannerComponent} from './components/banner/banner.component';
import {BestsellerComponent} from './components/bestseller/bestseller.component';
import {LatestBlogComponent} from './components/latest-blog/latest-blog.component';
import {BrandLogoComponent} from './components/brand-logo/brand-logo.component';
import {FooterComponent} from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        MobileMenuComponent,
        HeaderComponent,
        NavigationComponent,
        SliderComponent,
        FeaturesComponent,
        BannerComponent,
        BestsellerComponent,
        LatestBlogComponent,
        BrandLogoComponent,
        FooterComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
