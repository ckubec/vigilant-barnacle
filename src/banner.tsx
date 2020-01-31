import React, {useState} from 'react';
import Konva from 'konva';
import {Shape, Stage, Layer, RegularPolygon} from 'react-konva';



interface HexState {
    width: number,
    height: number
}

export class BannerCanvas extends React.Component<HexState> {
    canvasRef : React.RefObject<HTMLCanvasElement> = React.createRef();
    constructor(hex:HexState) {
        super(hex);
        this.canvasRef = React.createRef();
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        };
        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.getHeight = this.getHeight.bind(this);
    }

    handleWindowResize () {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth});
        console.log(this.state);
        this.drawGrid();
    }

    getHeight(){
        return window.innerWidth;
    }

    componentDidMount(): void {
        window.addEventListener("resize", this.handleWindowResize);
        this.drawGrid();
    }

    drawGrid() {
        let canvas = this.canvasRef;
        let ctx: CanvasRenderingContext2D | null = canvas.current ? canvas.current.getContext('2d') : null;

        //ctx?.scale(3,3);

        let hexdens = 50;
        let size = 100;
        let x =0;
        let y =0;
        let offset = 3/2 * size;
        let offsety = Math.sqrt(3)*size;


        //let temp = new Hexagon(15, 5, size, offset, "black");
        //let hex = [];
        //temp.draw(ctx);
        for(let z=0; z<this.props.height/hexdens; z++) {
            for (let i = 0; i < hexdens-2; i++) {
                /*let temp;
                if (i % 2 === 0) {
                    temp = new Hexagon((x + (offset)) * i, y+(offsety*z), size, offset, "black");
                } else
                    temp = new Hexagon((x + (offset)) * i, (offsety*z)-(offsety / 2), size, offset, "black");*/
                //hex.push(<RegularPolygon sides={6} radius={70} x={200} y={150} fill={"black"} stroke={"white"}></RegularPolygon>);

                //temp.draw(ctx);
            }
        }
    }

    render() {
        const canvasstyle = {
            backgroundColor: "black",
            width: window.outerWidth,
            height: window.innerHeight/2,
            display: "flex"
        };
        let hextest = new Hexagon(0,0,50,50,"blue");
        hextest.draw();
        let size = 50;
        let x =0;
        let y =0;
        let offset = 3/2 * size;
        let offsety = Math.sqrt(3)*size;
        let hex = [];
        let width = 1860/(size*2);

        console.log("The Height ", width, " Actual ", this.getHeight());
        for(let z=0; z<8; z++) {
            for (let i = 0; i <= 25; i++) {
                if (z% 2 === 0) {
                    hex.push(<RegularPolygon sides={6} radius={size} x={offsety*i} y={0+ offset*z} fill={"black"} stroke={"white"}></RegularPolygon>);
                } else {
                    hex.push(<RegularPolygon sides={6} radius={size} x={offsety*i-offsety/2} y={0+ offset*z} fill={"black"} stroke={"white"}></RegularPolygon>);
                }

            }
        }

        return (
            <Stage width={window.innerWidth} height={400} style={canvasstyle} >
                <Layer>
                    {hex}
                </Layer>
            </Stage>
        );
    };
}

class Hexagon {
    x:number;
    y:number;
    size:number;
    offset:number;
    color:string;

    constructor(x:number, y:number, size:number, offset:number, color:string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.offset = offset;
        this.color = color;
    }

    draw() {
        var hexagon = new Konva.RegularPolygon({
            x: 100,
            y: 150,
            sides: 6,
            radius: 75,
            fill: 'white',
            stroke: "white",
            strokeWidth: 1
        })
        console.log(hexagon.getHeight(), " ", hexagon.getWidth());
        return <RegularPolygon sides={6} radius={70} x={100} y={150} fill={"white"} stroke={"white"}></RegularPolygon>;
    }
}