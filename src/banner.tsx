import React, {useState} from 'react';


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
        return this.state;
    }

    componentDidMount(): void {
        window.addEventListener("resize", this.handleWindowResize);
        this.drawGrid();
    }

    drawGrid() {
        let canvas = this.canvasRef;
        let ctx: CanvasRenderingContext2D | null = canvas.current ? canvas.current.getContext('2d') : null;


        let hexdens = 50;
        let size = this.props.height/hexdens;
        let x =0;
        let y =0;
        let offset = 3/2 * size;
        let offsety = Math.sqrt(3)*size;


        for(let z=0; z<this.props.height/hexdens; z++) {
            for (let i = 0; i < hexdens-2; i++) {
                let temp;
                if (i % 2 === 0) {
                    temp = new Hexagon((x + (offset)) * i, y+(offsety*z), size, offset, "black");
                } else
                    temp = new Hexagon((x + (offset)) * i, (offsety*z)-(offsety / 2), size, offset, "black");

                temp.draw(ctx);
            }
        }
    }

    render() {
        const canvasstyle = {
            backgroundColor: "white",
            width: "100%",
            height: "200px",
            display: "block"
        };

        return (
            <canvas ref={this.canvasRef} style={canvasstyle} />
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

    draw(ctx:any) {
        ctx.beginPath();
        //ctx.moveTo(this.x + this.size * Math.cos(0), this.y + this.size * Math.sin(0));
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";

        let sides = 6;
        //console.log(this);
        for (let i=0; i<=sides; i++) {
            this.x = this.x + this.size * Math.cos(i*2*Math.PI/sides);
            this.y = this.y + this.size * Math.sin(i *2 * Math.PI/sides);
            ctx.lineTo(this.x, this.y);
            ctx.stroke();

            //console.log(this);
        }
        ctx.closePath();

        ctx.fill();
    }
}
