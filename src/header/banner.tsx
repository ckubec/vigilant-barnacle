import React from 'react';
import {Stage, Layer, RegularPolygon } from 'react-konva';


//TODO Optimization and repaint fix rather then current implementation, organize Hexes into 2D Array
// and during resize keep array the same and only add/drop the cutoff or added Hexes.
export class BannerCanvas extends React.Component {
    windowheight = 425;
    windowwidth = document.body.clientWidth;
    grid: Hexagon[] = [];
    interval: any;

    constructor(props:any) {
        super(props);
        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.buildGrid();
    }

    buildGrid() {
        let size = 40;
        let offset = 3 / 2 * size;
        let offsety = Math.sqrt(3) * size;

        for (let z = 0; z < this.windowheight; z += offset) {
            for (let x = 0; x <= this.windowwidth + offsety; x+=offsety) {
                if ((z/offset) % 2 === 0) {
                    this.grid.push( new Hexagon((x+1)*(z+1), x, z, size, "transparent"));
                } else {
                    this.grid.push( new Hexagon((x+1)*(z+1), x - offsety/2, z, size, "transparent"));
                }
            }
        }
    }

    rebuildGrid() {
        this.grid = [];
        this.buildGrid();
    }

    handleWindowResize() {
        this.windowwidth = document.body.clientWidth;
        this.rebuildGrid();
    }

    render() {
        //TODO Extract to style sheet if more styles start popping up in this component.
        const canvasstyle = {
            display: "flex"
        };

        return (
            <Stage id="bannerstage" width={document.body.clientWidth} height={400} style={canvasstyle} key={"BannerStage"} >
                <Layer id="bannerlayer">
                    {this.grid.map(grid => grid.draw())}
                </Layer>
            </Stage>
        );
    }

    componentDidMount(): void {
        window.addEventListener("resize", this.handleWindowResize);
        this.interval = setInterval(() => this.tick(), 200);
    }

    componentWillUnmount(): void {
        window.removeEventListener("resize", this.handleWindowResize);
        clearInterval(this.interval);
    }

    //TODO tweak animation to create similar effect to the buttons in Nav.
    tick() {
        this.grid[Math.floor(Math.random()*(this.grid.length))].setColor(this.grid[0].randColor());
        this.grid[Math.floor(Math.random()*(this.grid.length))].setColor("transparent");

        this.forceUpdate();
    }
}


class Hexagon {
    id:number;
    x:number;
    y:number;
    size:number;
    color:string;
    stroke:string;

    constructor(id:number, x:number, y:number, size:number, color:string) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.stroke = color;
    }

    draw() {
        return <RegularPolygon id={"hex "+this.id} key={"hex" + this.id} sides={6} radius={this.size} x={this.x} y={this.y} fill={this.color} stroke={this.stroke} preventDefault={false} />;
    }

    setColor(color:string) {
        this.color = color;
        this.stroke = color;
    }

    randColor() {
        return "rgba(" + Math.floor(Math.random()*256) + ", "+ Math.floor(Math.random()*256) + ", "+ Math.floor(Math.random()*256) + ", "+ Math.floor(Math.random()*256) + ")";
    }
}