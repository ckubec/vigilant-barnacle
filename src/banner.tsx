import React from 'react';


export class BannerCanvas extends React.Component {
    canvasRef : React.RefObject<HTMLCanvasElement> = React.createRef();
    constructor(props:string) {
        super(props);
        this.canvasRef = React.createRef();
        this.state = {
            height : 400,
            width : 400
        }
    }

    getHeight() {

    }

    componentDidMount(): void {
        let canvas = this.canvasRef;
        let ctx: CanvasRenderingContext2D | null = canvas.current ? canvas.current.getContext('2d') : null;


        let size = 50;
        let x =50;
        let y =50;

        for(let i=0; i<5; i++){
            let xmix = Math.sqrt( 3 ) * size / 2;
            let temp;
            temp = new Hexagon(x + xmix * (i%2), y, size, "blue");

            temp.draw(ctx);
        }
    }

    render() {
        const canvasstyle = {
            backgroundColor: "black",
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
    color:string;

    constructor(x:number, y:number, size:number, color:string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    draw(ctx:any) {
        ctx.beginPath();
        //ctx.moveTo(this.x + this.size * Math.cos(0), this.y + this.size * Math.sin(0));
        ctx.fillStyle = this.color;
        ctx.fill();
        let sides = 6;
        for (let i=0; i<sides; i++) {
            this.x = Math.round(this.x + this.size * Math.cos(i*2*Math.PI/sides));
            this.y = Math.round(this.y + this.size * Math.sin(i *2 * Math.PI/sides));

            ctx.lineTo(this.x, this.y);
                console.log(this);
        }
        ctx.closePath();

        ctx.fill();
    }
}
