import React, { Component } from 'react';


class Canvas extends Component {

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        let square = new aSqu(200, 200);
        function aSqu(x, y) {
            this.x = x;
            this.y = y;

            this.draw = function () {
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                x = Math.floor(Math.random() * 700);
                y = Math.floor(Math.random() * 200);
                let width = 5;
                let height = 5;
                ctx.translate(x + .5 * width, y + .5 * height);
                ctx.rotate(45 * (Math.PI / 180));
                // ctx.fillText (i, x, y);
                ctx.fillStyle = 'rgba(0, 0, 252, 0.5)';
                ctx.fillRect(-.5 * width, -.5 * height, width, height);
            }
            this.update = function () {
                var fps = 8;
                function draws() {
                    setInterval(function () {
                        dSqu();
                        setInterval(dSqu(), 100);
                    }, 3000, fps);
                }
                draws();
            }
        }
        


        function dSqu(dx, dy) {
            for (let i = 0; i < 11; i++) {
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                let x = Math.floor(Math.random() * 700);
                let y = Math.floor(Math.random() * 200);
                let width = 10;
                let height = 10;
                ctx.translate(x + .5 * width, y + .5 * height);
                ctx.rotate(45 * (Math.PI / 180));
                ctx.fillStyle = 'rgba(0, 0, 252, 0.5)';
                ctx.fillRect(-.5 * width, -.5 * height, width, height);

            }

        }


        var fps = 8;
        function draws() {
            setInterval(function () {
                dSqu();
                square.draw();
                setInterval(dSqu(), 100);
                //         // requestAnimationFrame(draw);
            }, 2000, fps);
        }

        draws();
       

    }

    render() {

        return (
            <div>
                <canvas ref="canvas" width={1440} height={300} />
            </div>
        )
    }
}

export default Canvas;