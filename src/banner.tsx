import React from 'react';
import {Stage, Layer, RegularPolygon} from 'react-konva';


interface HexState {
    width: number,
    height: number
}

export class BannerCanvas extends React.Component<HexState> {
    grid: Hexagon[] = [];
    interval: any;
    constructor(hex: HexState) {
        super(hex);
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        };
        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.buildGrid();
    };

    buildGrid() {
        let size = 35;
        let offset = 3 / 2 * size;
        let offsety = Math.sqrt(3) * size;

        for (let z = 0; z < 9; z++) {
            for (let i = 0; i <= 25; i++) {
                if (z % 2 === 0) {
                    let x = Number(offsety * i);
                    let y = 0 + offset * z;
                    this.grid.push( new Hexagon(x, y, size, "black"));
                } else {
                    let x = Number(offsety*i - offsety/2);
                    let y = (0+offset*z);
                    this.grid.push( new Hexagon(x, y, size, "black"));
                }
            }
        }
    }

    handleWindowResize() {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });
        console.log(this.state);
    };

    render() {
        const canvasstyle = {
            backgroundColor: "black",
            width: window.outerWidth,
            height: window.innerHeight / 2,
            display: "flex"
        };

        return (
            <Stage width={window.innerWidth} height={400} style={canvasstyle}>
                <Layer>
                    {this.grid.map(grid => grid.draw())}
                </Layer>
            </Stage>
        );
    };

    componentDidMount(): void {
        window.addEventListener("resize", this.handleWindowResize);
        this.interval = setInterval(() => this.tick(), 150);
    };

    componentWillUnmount(): void {
        clearInterval(this.interval);
    }

    tick() {
        this.grid[Math.floor(Math.random()*(this.grid.length))].setColor(this.grid[0].randColor());
        this.forceUpdate();
    }
}


class Hexagon {
    x:number;
    y:number;
    size:number;
    color:string;
    stroke:string;

    constructor(x:number, y:number, size:number, color:string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.stroke = "white";
    }

    draw() {
        return <RegularPolygon sides={6} radius={this.size} x={this.x} y={this.y} fill={this.color} stroke={this.stroke}></RegularPolygon>;
    }

    setColor(color:string) {
        this.color = color;
        //this.stroke = color;
    }

    randColor() {
        return "rgba(" + Math.floor(Math.random()*256) + ", "+ Math.floor(Math.random()*256) + ", "+ Math.floor(Math.random()*256) + ", "+ Math.floor(Math.random()*256) + ")";
    }
}