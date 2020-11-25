import { Component } from '@angular/core';
import { SliderValue, SliderOptions } from '@jkuri/ngx-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  fontSize = 14;
  fontWeight = 400;
  fontSizeValues: SliderValue[] = Array(10).fill(null).map((_, k) => {
    return { value: k + 8 , placeholder: (k + 8) + ''};
  });
  fontWeightValues: SliderValue[] = [
    { value: 100, placeholder: 'thin' },
    { value: 300, placeholder: 'light' },
    { value: 400, placeholder: 400 },
    { value: 500, placeholder: 500 },
    { value: 600, placeholder: 600 },
    { value: 700, placeholder: 'bold' },
    { value: 800, placeholder: 800 },
    { value: 900, placeholder: 'black' }
  ];
  darkOptions: SliderOptions = {
    gridColor: '#4F545C',
    dashColor: '#4F545C',
    dashMarkColor: '#4F545C',
    dashMarkSelectedColor: '#68d391',
    dashMarkFontWeight: 900,
    dashMarkFontSize: 12,
    dashMarkPadding: 12,
    barColor: '#ffffff'
  };
}
