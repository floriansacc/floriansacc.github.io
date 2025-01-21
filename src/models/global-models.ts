export interface LogoModel {
  src: string;
  alt: string;
  key?: string;
}

export interface CoordModel {
  x: number | null;
  y: number | null;
}

export interface DataPieModel {
  label: string;
  value: number;
  color: string;
}
export interface DataLineModel {
  label: string;
  bgColor: string;
  data: {
    x: string;
    y: number;
  }[];
}

export interface DataBarModel {
  label: string;
  data: {
    x: string;
    y: number;
  }[];
  bgColor: string;
}

export interface DataBarStackModel {
  label: string;
  data: {
    x: string;
    y: number;
  }[];
  bgColor: string;
}

export enum ChartType {
  pie = "pie",
  bar = "bar",
  barStack = "barStack",
  line = "line",
}

export interface DateGraph {
  date: Date;
  name: string;
}
