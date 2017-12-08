import React, { Component } from 'react';
import API from './API';

class Grid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            w: 0,
            h: 0,
            me: {
              x:1, y:1,
            },
            elements: [],
          };
        this.width = 950;
        this.height = 950;
        this.ctx = null;
    }

    componentDidMount() {
        let canvas = document.getElementById('grid');
        let img =document.getElementById("sword");

        canvas.width = this.width;
        canvas.height = this.height;
        let ctx = canvas.getContext('2d');
        this.ctx = ctx;
        this.img = img;
        this.redrawAll();
        document.onkeydown = this.onClickKey;

        this.login();
    }

    async login() {
        try {
            await API.join('Kotkodaky_8', 'kikirik');
            const betterBoard = await API.betterBoard();
            this.setState(betterBoard);
        }
        catch (e) {
            alert(e);
        }

    }


    onClickKey = (e) => {

        let newX = this.state.me.x;
        let newY = this.state.me.y;

        if (e.keyCode === '38') {
            // alert('up')
            newY -= 1;
        }
        if (e.keyCode === '40') {
            // alert('down')
            newY += 1;
        }
        if (e.keyCode === '37') {
            // alert('left')
            newX -= 1;
        }
        if (e.keyCode === "39") {
            // alert('right')
            newX += 1;
        }

        if (newY < 1) {
            newY = 1;
        }

        if (newY > 19) {
            newY = 19;
        }

        if (newX < 1) {
            newX = 1;
        }

        if (newX > 19) {
            newX = 19;
        }


        this.setState({
            me: { x: newX, y: newY },
        });
    }

    drawAllGuy = () => {
        this.state.elements.forEach((guy) => {
            this.drawGuy(guy.x, guy.y)
        })
        this.drawGuy(this.state.me.x, this.state.me.y, true)
    }

    drawGuy = (x, y, me = false) => {
        x = x - 1;
        y = y - 1;
        this.ctx.fillRect(x * 50, y * 50, 50, 50);
    }

    drawSword = (x, y) =>{
        x = x - 1;
        y = y - 1;
        this.ctx.drawImage(this.img, x * 50, y * 50, 30, 30);
    }

    drawGrid = (w, h, step) => {
        let ctx = this.ctx;
        ctx.beginPath();
        for (let x = 0; x <= w; x += step) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
        }
        // set the color of the line
        // ctx.strokeStyle = 'rgb(255,0,0)';
        ctx.lineWidth = 1;
        // the stroke will actually paint the current path
        ctx.stroke();
        // for the sake of the example 2nd path
        ctx.beginPath();
        for (let y = 0; y <= h; y += step) {
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
        }
        // set the color of the line
        // ctx.strokeStyle = 'rgb(20,20,20)';
        // just for fun
        ctx.lineWidth = 1;
        // for your original question - you need to stroke only once
        ctx.stroke();
    }

    cleanAll = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        // this.state.guys.forEach((guy) => {
        //     let x = guy.x - 1;
        //     let y = guy.y - 1;
        //     this.ctx.clearRect(x * 50,y * 50,50,50)
        // })
        this.drawGrid(this.width, this.height, 50);
    }

    redrawAll = () => {
        this.cleanAll();
        this.drawAllGuy();
        this.drawSword(3,6);
    }

    render() {

        if (this.ctx) {
            this.redrawAll();
        }

        return (
            <div>
                <img id='sword' width={30} height={30} src={process.env.PUBLIC_URL + 'sword.png'}/>
                <canvas id="grid">

                </canvas>
                <button onClick={this.redrawAll}>CLEAR ALL</button>
            </div>
        )
    }
}

Grid.propTypes = {};

export default Grid;