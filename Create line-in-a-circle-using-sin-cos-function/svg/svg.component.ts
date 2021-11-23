import { Component, OnInit } from "@angular/core";

@Component( {
  selector: 'app-root',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})

export class SVGComponent implements OnInit {

  private title: string;
  private x_axis: X_Axis = {} as X_Axis;
  private y_axis: Y_Axis = {} as Y_Axis;
  private svg_dim: SVG_DIM = {} as SVG_DIM;
  private radius: number;
  

  constructor() {
    this.title = 'Welcome to SVG';
    this.radius = 50;

    this.svg_dim.width = 100;
    this.svg_dim.height = 100;

    this.x_axis.x = 0;
    this.x_axis.x_ = this.svg_dim.width;
    this.x_axis.y = this.svg_dim.height / 2;
    this.x_axis.y_ = this.svg_dim.height / 2;

    this.y_axis.y = 0;
    this.y_axis.y_ = this.svg_dim.height;
    this.y_axis.x = this.svg_dim.width / 2;
    this.y_axis.x_ = this.svg_dim.width / 2;
  }

  ngOnInit() {}

  private getX2(angle: number, radius: number): number {
    //x2 = r.cos(45) + radius
    //y2 = r.sin(45) - radius
    //return 50 * 0.707 + radius;
    return 50 * Math.cos(angle * Math.PI/180) + radius
  }

  private getY2(angle: number, radius: number): number {
    //x2 = r.cos(45) + radius
    //y2 = radius - (r.sin(45))
    //return radius - (50 * 0.707);
    return radius - (50 * Math.sin(angle * Math.PI/180))

  }

}

export interface Vector {
  x: number;
  y: number;
}

export interface X_Axis {
  x: number;
  x_: number;
  y: number;
  y_: number;  
}

export interface Y_Axis {  
  y: number;
  y_: number;  
  x: number;
  x_: number;
}

export interface SVG_DIM {
  width: number;
  height: number;
}