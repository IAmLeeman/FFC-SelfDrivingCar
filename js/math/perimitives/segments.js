class Segments {
    constructor (p1 , p2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    draw(ctx, width = 2, color = "black") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();

    }
}