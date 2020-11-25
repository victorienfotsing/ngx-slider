export interface SliderOptions {
  width?: string;
  gridHeight?: number;
  step?: number;
  gridColor?: string;
  gridBorderRadius?: number;
  gridPadding?: number;
  dashBorderRadius?: number;
  dashColor?: string;
  dashWidth?: number;
  dashHeight?: number;
  dashMarkColor?: string;
  dashMarkSelectedColor?: string;
  dashMarkFont?: string;
  dashMarkFontSize?: number;
  dashMarkFontWeight?: number;
  dashMarkPadding?: number;
  barColor?: string;
  barWidth?: number;
  barHeight?: number;
  barBorderRadius?: number;
  indicatorColor?: {
    limit: number;
    color: string;
  }[];
}

export interface SliderValue {
  value: number;
  placeholder: string | number;
}

export function defaultOptions(): SliderOptions {
  return {
    width: '100%',
    gridHeight: 39,
    step: 4,
    gridColor: '#E3EEF6',
    gridBorderRadius: 4,
    gridPadding: 8,
    dashColor: '#CBDFEA',
    dashBorderRadius: 50,
    dashWidth: 3,
    dashHeight: 21,
    dashMarkColor: '#7D9EB5',
    dashMarkSelectedColor: '#223345',
    dashMarkFont: 'sans-serif',
    dashMarkFontSize: 10,
    dashMarkFontWeight: 600,
    dashMarkPadding: 8,
    barColor: 'transparent linear-gradient(180deg, #E3EEF6 0%, #BAC7D0 100%) 0% 0% no-repeat padding-box',
    barWidth: 30,
    barHeight: 58,
    barBorderRadius: 4,
    indicatorColor: [{
      limit: 12,
      color: 'red'
    }, {
      limit: 20,
      color: 'yellow'
    }]
  };
}
