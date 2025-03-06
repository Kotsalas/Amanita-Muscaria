import { gridCells } from "../helpers/grid";

export function addWallsOutdoorLevel1(walls) {
    walls.add(`144,96`); //trees
    walls.add(`208,64`);
    walls.add(`112,80`); //water
    walls.add(`128,80`);
    walls.add(`144,80`);
    walls.add(`160,80`);
    walls.add(`176,80`);
    walls.add(`176,96`);
    walls.add(`176,64`);
    walls.add(`64,96`); //rocks
    walls.add(`80,96`);
    walls.add(`64,64`);
    walls.add(`80,64`);
    walls.add(`176,32`);
    walls.add(`192,32`);
    walls.add(`240,48`);
    walls.add(`48,32`); //border
    walls.add(`64,32`);
    walls.add(`80,32`);
    walls.add(`96,32`);
    walls.add(`112,16`);
    walls.add(`128,16`);
    walls.add(`144,16`);
    walls.add(`160,16`);
    walls.add(`176,16`);
    walls.add(`192,16`);
    walls.add(`208,16`);
    walls.add(`224,16`);
    walls.add(`240,32`);
    walls.add(`256,48`);
    walls.add(`256,64`);
    walls.add(`256,80`);
    walls.add(`256,96`);
    walls.add(`240,112`);
    walls.add(`224,112`);
    walls.add(`208,112`);
    walls.add(`192,112`);
    walls.add(`176,112`);
    walls.add(`160,112`);
    walls.add(`144,112`);
    walls.add(`128,112`);
    walls.add(`112,112`);
    walls.add(`96,112`);
    walls.add(`80,112`);
    walls.add(`64,112`);
    walls.add(`48,96`);
    walls.add(`32,80`);
    walls.add(`32,64`);
    walls.add(`32,48`);
}

export function addWallsCaveLevel1(walls) {
    walls.add(`${gridCells(-23)},${gridCells(-11)}`); // border starting from x: -23, y: -11
    walls.add(`${gridCells(-22)},${gridCells(-11)}`);
    walls.add(`${gridCells(-21)},${gridCells(-11)}`);
    walls.add(`${gridCells(-20)},${gridCells(-11)}`);
    walls.add(`${gridCells(-19)},${gridCells(-11)}`);
    walls.add(`${gridCells(-18)},${gridCells(-11)}`);
    walls.add(`${gridCells(-17)},${gridCells(-11)}`);
    walls.add(`${gridCells(-16)},${gridCells(-11)}`);
    walls.add(`${gridCells(-15)},${gridCells(-11)}`);
    walls.add(`${gridCells(-14)},${gridCells(-11)}`);
    walls.add(`${gridCells(-13)},${gridCells(-11)}`);
    walls.add(`${gridCells(-12)},${gridCells(-11)}`);
    walls.add(`${gridCells(-11)},${gridCells(-11)}`);
    walls.add(`${gridCells(-10)},${gridCells(-11)}`);
    walls.add(`${gridCells(-9)},${gridCells(-11)}`);
    walls.add(`${gridCells(-8)},${gridCells(-11)}`);
    walls.add(`${gridCells(-7)},${gridCells(-11)}`);
    walls.add(`${gridCells(-6)},${gridCells(-11)}`);
    walls.add(`${gridCells(-5)},${gridCells(-11)}`);
    walls.add(`${gridCells(-4)},${gridCells(-11)}`);
    walls.add(`${gridCells(-3)},${gridCells(-10)}`);
    walls.add(`${gridCells(-3)},${gridCells(-9)}`);
    walls.add(`${gridCells(-3)},${gridCells(-8)}`);
    walls.add(`${gridCells(-3)},${gridCells(-7)}`);
    walls.add(`${gridCells(-3)},${gridCells(-6)}`);
    walls.add(`${gridCells(-3)},${gridCells(-5)}`);
    walls.add(`${gridCells(-3)},${gridCells(-4)}`);
    walls.add(`${gridCells(-3)},${gridCells(-3)}`);
    walls.add(`${gridCells(-3)},${gridCells(-2)}`);
    walls.add(`${gridCells(-3)},${gridCells(-1)}`);
    walls.add(`${gridCells(-3)},${gridCells(0)}`);
    walls.add(`${gridCells(-3)},${gridCells(1)}`);
    walls.add(`${gridCells(-2)},${gridCells(1)}`);
    walls.add(`${gridCells(-1)},${gridCells(1)}`);
    walls.add(`${gridCells(0)},${gridCells(1)}`);
    walls.add(`${gridCells(3)},${gridCells(1)}`);
    walls.add(`${gridCells(4)},${gridCells(1)}`);
    walls.add(`${gridCells(5)},${gridCells(2)}`);
    walls.add(`${gridCells(5)},${gridCells(3)}`);
    walls.add(`${gridCells(5)},${gridCells(4)}`);
    walls.add(`${gridCells(5)},${gridCells(5)}`);
    walls.add(`${gridCells(5)},${gridCells(6)}`);
    walls.add(`${gridCells(5)},${gridCells(7)}`);
    walls.add(`${gridCells(5)},${gridCells(8)}`);
    walls.add(`${gridCells(5)},${gridCells(9)}`);
    walls.add(`${gridCells(5)},${gridCells(10)}`);
    walls.add(`${gridCells(5)},${gridCells(11)}`);
    walls.add(`${gridCells(5)},${gridCells(12)}`);
    walls.add(`${gridCells(-2)},${gridCells(16)}`);
    walls.add(`${gridCells(-3)},${gridCells(16)}`);
    walls.add(`${gridCells(-3)},${gridCells(17)}`);
    walls.add(`${gridCells(-3)},${gridCells(18)}`);
    walls.add(`${gridCells(-3)},${gridCells(19)}`);
    walls.add(`${gridCells(-3)},${gridCells(20)}`);
    walls.add(`${gridCells(-3)},${gridCells(21)}`);
    walls.add(`${gridCells(-3)},${gridCells(22)}`);
    walls.add(`${gridCells(-3)},${gridCells(23)}`);
    walls.add(`${gridCells(-3)},${gridCells(24)}`);
    walls.add(`${gridCells(-3)},${gridCells(25)}`);
    walls.add(`${gridCells(-3)},${gridCells(26)}`);
    walls.add(`${gridCells(-3)},${gridCells(27)}`);
    walls.add(`${gridCells(-3)},${gridCells(28)}`);
    walls.add(`${gridCells(-3)},${gridCells(29)}`);
    walls.add(`${gridCells(-4)},${gridCells(30)}`);
    walls.add(`${gridCells(-5)},${gridCells(30)}`);
    walls.add(`${gridCells(-6)},${gridCells(30)}`);
    walls.add(`${gridCells(-7)},${gridCells(30)}`);
    walls.add(`${gridCells(-8)},${gridCells(30)}`);
    walls.add(`${gridCells(-9)},${gridCells(30)}`);
    walls.add(`${gridCells(-10)},${gridCells(30)}`);
    walls.add(`${gridCells(-11)},${gridCells(30)}`);
    walls.add(`${gridCells(-12)},${gridCells(30)}`);
    walls.add(`${gridCells(-13)},${gridCells(30)}`);
    walls.add(`${gridCells(-14)},${gridCells(30)}`);
    walls.add(`${gridCells(-15)},${gridCells(30)}`);
    walls.add(`${gridCells(-16)},${gridCells(30)}`);
    walls.add(`${gridCells(-17)},${gridCells(30)}`);
    walls.add(`${gridCells(-18)},${gridCells(30)}`);
    walls.add(`${gridCells(-19)},${gridCells(30)}`);
    walls.add(`${gridCells(-20)},${gridCells(30)}`);
    walls.add(`${gridCells(-21)},${gridCells(30)}`);
    walls.add(`${gridCells(-22)},${gridCells(30)}`);
    walls.add(`${gridCells(-23)},${gridCells(30)}`);
    walls.add(`${gridCells(-24)},${gridCells(29)}`);
    walls.add(`${gridCells(-24)},${gridCells(28)}`);
    walls.add(`${gridCells(-24)},${gridCells(27)}`);
    walls.add(`${gridCells(-24)},${gridCells(26)}`);
    walls.add(`${gridCells(-24)},${gridCells(25)}`);
    walls.add(`${gridCells(-24)},${gridCells(24)}`);
    walls.add(`${gridCells(-24)},${gridCells(23)}`);
    walls.add(`${gridCells(-24)},${gridCells(22)}`);
    walls.add(`${gridCells(-24)},${gridCells(21)}`);
    walls.add(`${gridCells(-24)},${gridCells(20)}`);
    walls.add(`${gridCells(-24)},${gridCells(19)}`);
    walls.add(`${gridCells(-24)},${gridCells(18)}`);
    walls.add(`${gridCells(-24)},${gridCells(17)}`);
    walls.add(`${gridCells(-24)},${gridCells(16)}`);
    walls.add(`${gridCells(-24)},${gridCells(15)}`);
    walls.add(`${gridCells(-24)},${gridCells(14)}`);
    walls.add(`${gridCells(-24)},${gridCells(13)}`);
    walls.add(`${gridCells(-24)},${gridCells(12)}`);
    walls.add(`${gridCells(-24)},${gridCells(11)}`);
    walls.add(`${gridCells(-24)},${gridCells(10)}`);
    walls.add(`${gridCells(-24)},${gridCells(9)}`);
    walls.add(`${gridCells(-24)},${gridCells(8)}`);
    walls.add(`${gridCells(-24)},${gridCells(7)}`);
    walls.add(`${gridCells(-24)},${gridCells(6)}`);
    walls.add(`${gridCells(-24)},${gridCells(5)}`);
    walls.add(`${gridCells(-24)},${gridCells(4)}`);
    walls.add(`${gridCells(-24)},${gridCells(3)}`);
    walls.add(`${gridCells(-24)},${gridCells(2)}`);
    walls.add(`${gridCells(-24)},${gridCells(1)}`);
    walls.add(`${gridCells(-24)},${gridCells(0)}`);
    walls.add(`${gridCells(-24)},${gridCells(-1)}`);
    walls.add(`${gridCells(-24)},${gridCells(-2)}`);
    walls.add(`${gridCells(-24)},${gridCells(-3)}`);
    walls.add(`${gridCells(-24)},${gridCells(-4)}`);
    walls.add(`${gridCells(-24)},${gridCells(-5)}`);
    walls.add(`${gridCells(-24)},${gridCells(-6)}`);
    walls.add(`${gridCells(-24)},${gridCells(-7)}`);
    walls.add(`${gridCells(-24)},${gridCells(-8)}`);
    walls.add(`${gridCells(-24)},${gridCells(-9)}`);
    walls.add(`${gridCells(-24)},${gridCells(-10)}`);
    walls.add(`${gridCells(-3)},${gridCells(2)}`); // border logs
    walls.add(`${gridCells(-3)},${gridCells(3)}`);
    walls.add(`${gridCells(-3)},${gridCells(4)}`);
    walls.add(`${gridCells(-3)},${gridCells(5)}`);
    walls.add(`${gridCells(-3)},${gridCells(6)}`);
    walls.add(`${gridCells(-3)},${gridCells(7)}`);
    walls.add(`${gridCells(-3)},${gridCells(8)}`);
    walls.add(`${gridCells(-3)},${gridCells(10)}`);
    walls.add(`${gridCells(-3)},${gridCells(11)}`);
    walls.add(`${gridCells(-3)},${gridCells(12)}`);
    walls.add(`${gridCells(-3)},${gridCells(13)}`);
    walls.add(`${gridCells(-3)},${gridCells(14)}`);
    walls.add(`${gridCells(-3)},${gridCells(15)}`);
    walls.add(`${gridCells(-2)},${gridCells(2)}`); // stones
    walls.add(`${gridCells(-1)},${gridCells(3)}`);
    walls.add(`${gridCells(0)},${gridCells(3)}`);
    walls.add(`${gridCells(0)},${gridCells(4)}`);
    walls.add(`${gridCells(3)},${gridCells(5)}`);
    walls.add(`${gridCells(3)},${gridCells(3)}`);
    walls.add(`${gridCells(4)},${gridCells(3)}`);
    walls.add(`${gridCells(0)},${gridCells(11)}`);
    walls.add(`${gridCells(3)},${gridCells(12)}`);
    walls.add(`${gridCells(-1)},${gridCells(14)}`);
    walls.add(`${gridCells(1)},${gridCells(1)}`); // water
    walls.add(`${gridCells(1)},${gridCells(2)}`);
    walls.add(`${gridCells(1)},${gridCells(3)}`);
    walls.add(`${gridCells(1)},${gridCells(4)}`);
    walls.add(`${gridCells(1)},${gridCells(5)}`);
    walls.add(`${gridCells(1)},${gridCells(6)}`);
    walls.add(`${gridCells(1)},${gridCells(7)}`);
    walls.add(`${gridCells(2)},${gridCells(1)}`);
    walls.add(`${gridCells(2)},${gridCells(2)}`);
    walls.add(`${gridCells(2)},${gridCells(3)}`);
    walls.add(`${gridCells(2)},${gridCells(4)}`);
    walls.add(`${gridCells(2)},${gridCells(5)}`);
    walls.add(`${gridCells(2)},${gridCells(6)}`);
    walls.add(`${gridCells(2)},${gridCells(7)}`);
    walls.add(`${gridCells(1)},${gridCells(9)}`);
    walls.add(`${gridCells(1)},${gridCells(10)}`);
    walls.add(`${gridCells(1)},${gridCells(11)}`);
    walls.add(`${gridCells(1)},${gridCells(12)}`);
    walls.add(`${gridCells(1)},${gridCells(13)}`);
    walls.add(`${gridCells(2)},${gridCells(9)}`);
    walls.add(`${gridCells(2)},${gridCells(10)}`);
    walls.add(`${gridCells(2)},${gridCells(11)}`);
    walls.add(`${gridCells(2)},${gridCells(12)}`);
    walls.add(`${gridCells(3)},${gridCells(13)}`);
    walls.add(`${gridCells(4)},${gridCells(13)}`);
    walls.add(`${gridCells(0)},${gridCells(14)}`);
    walls.add(`${gridCells(-1)},${gridCells(15)}`);
    walls.add(`${gridCells(-13)},${gridCells(-10)}`); // maze y=-10
    walls.add(`${gridCells(-7)},${gridCells(-10)}`);
    walls.add(`${gridCells(-22)},${gridCells(-9)}`);  // y=-9
    walls.add(`${gridCells(-21)},${gridCells(-9)}`);
    walls.add(`${gridCells(-20)},${gridCells(-9)}`);
    walls.add(`${gridCells(-19)},${gridCells(-9)}`);
    walls.add(`${gridCells(-18)},${gridCells(-9)}`);
    walls.add(`${gridCells(-17)},${gridCells(-9)}`);
    walls.add(`${gridCells(-16)},${gridCells(-9)}`);
    walls.add(`${gridCells(-15)},${gridCells(-9)}`);
    walls.add(`${gridCells(-13)},${gridCells(-9)}`);
    walls.add(`${gridCells(-12)},${gridCells(-9)}`);
    walls.add(`${gridCells(-11)},${gridCells(-9)}`);
    walls.add(`${gridCells(-10)},${gridCells(-9)}`);
    walls.add(`${gridCells(-9)},${gridCells(-9)}`);
    walls.add(`${gridCells(-7)},${gridCells(-9)}`);
    walls.add(`${gridCells(-5)},${gridCells(-9)}`);
    walls.add(`${gridCells(-4)},${gridCells(-9)}`);
    walls.add(`${gridCells(-20)},${gridCells(-8)}`); // y=-8
    walls.add(`${gridCells(-15)},${gridCells(-8)}`);
    walls.add(`${gridCells(-11)},${gridCells(-8)}`);
    walls.add(`${gridCells(-23)},${gridCells(-7)}`); // y=-7
    walls.add(`${gridCells(-22)},${gridCells(-7)}`);
    walls.add(`${gridCells(-20)},${gridCells(-7)}`);
    walls.add(`${gridCells(-19)},${gridCells(-7)}`);
    walls.add(`${gridCells(-18)},${gridCells(-7)}`);
    walls.add(`${gridCells(-17)},${gridCells(-7)}`);
    walls.add(`${gridCells(-15)},${gridCells(-7)}`);
    walls.add(`${gridCells(-14)},${gridCells(-7)}`);
    walls.add(`${gridCells(-13)},${gridCells(-7)}`);
    walls.add(`${gridCells(-11)},${gridCells(-7)}`);
    walls.add(`${gridCells(-9)},${gridCells(-7)}`);
    walls.add(`${gridCells(-8)},${gridCells(-7)}`);
    walls.add(`${gridCells(-7)},${gridCells(-7)}`);
    walls.add(`${gridCells(-6)},${gridCells(-7)}`);
    walls.add(`${gridCells(-5)},${gridCells(-7)}`);
    walls.add(`${gridCells(-20)},${gridCells(-6)}`); // y=-6
    walls.add(`${gridCells(-15)},${gridCells(-6)}`);
    walls.add(`${gridCells(-13)},${gridCells(-6)}`);
    walls.add(`${gridCells(-9)},${gridCells(-6)}`);
    walls.add(`${gridCells(-5)},${gridCells(-6)}`);
    walls.add(`${gridCells(-22)},${gridCells(-5)}`); // y=-5
    walls.add(`${gridCells(-21)},${gridCells(-5)}`);
    walls.add(`${gridCells(-20)},${gridCells(-5)}`);
    walls.add(`${gridCells(-18)},${gridCells(-5)}`);
    walls.add(`${gridCells(-17)},${gridCells(-5)}`);
    walls.add(`${gridCells(-15)},${gridCells(-5)}`);
    walls.add(`${gridCells(-13)},${gridCells(-5)}`);
    walls.add(`${gridCells(-12)},${gridCells(-5)}`);
    walls.add(`${gridCells(-11)},${gridCells(-5)}`);
    walls.add(`${gridCells(-10)},${gridCells(-5)}`);
    walls.add(`${gridCells(-9)},${gridCells(-5)}`);
    walls.add(`${gridCells(-8)},${gridCells(-5)}`);
    walls.add(`${gridCells(-7)},${gridCells(-5)}`);
    walls.add(`${gridCells(-5)},${gridCells(-5)}`);
    walls.add(`${gridCells(-22)},${gridCells(-4)}`); // y=-4
    walls.add(`${gridCells(-17)},${gridCells(-4)}`);
    walls.add(`${gridCells(-11)},${gridCells(-4)}`);
    walls.add(`${gridCells(-9)},${gridCells(-4)}`);
    walls.add(`${gridCells(-7)},${gridCells(-4)}`);
    walls.add(`${gridCells(-5)},${gridCells(-4)}`);
    walls.add(`${gridCells(-22)},${gridCells(-3)}`); // y=-3
    walls.add(`${gridCells(-20)},${gridCells(-3)}`);
    walls.add(`${gridCells(-19)},${gridCells(-3)}`);
    walls.add(`${gridCells(-18)},${gridCells(-3)}`);
    walls.add(`${gridCells(-17)},${gridCells(-3)}`);
    walls.add(`${gridCells(-16)},${gridCells(-3)}`);
    walls.add(`${gridCells(-15)},${gridCells(-3)}`);
    walls.add(`${gridCells(-14)},${gridCells(-3)}`);
    walls.add(`${gridCells(-13)},${gridCells(-3)}`);
    walls.add(`${gridCells(-11)},${gridCells(-3)}`);
    walls.add(`${gridCells(-9)},${gridCells(-3)}`);
    walls.add(`${gridCells(-5)},${gridCells(-3)}`);
    walls.add(`${gridCells(-22)},${gridCells(-2)}`); // y=-2
    walls.add(`${gridCells(-20)},${gridCells(-2)}`);
    walls.add(`${gridCells(-15)},${gridCells(-2)}`);
    walls.add(`${gridCells(-13)},${gridCells(-2)}`);
    walls.add(`${gridCells(-11)},${gridCells(-2)}`);
    walls.add(`${gridCells(-9)},${gridCells(-2)}`);
    walls.add(`${gridCells(-7)},${gridCells(-2)}`);
    walls.add(`${gridCells(-6)},${gridCells(-2)}`);
    walls.add(`${gridCells(-5)},${gridCells(-2)}`);
    walls.add(`${gridCells(-22)},${gridCells(-1)}`); // y=-1
    walls.add(`${gridCells(-20)},${gridCells(-1)}`);
    walls.add(`${gridCells(-17)},${gridCells(-1)}`);
    walls.add(`${gridCells(-15)},${gridCells(-1)}`);
    walls.add(`${gridCells(-13)},${gridCells(-1)}`);
    walls.add(`${gridCells(-9)},${gridCells(-1)}`);
    walls.add(`${gridCells(-7)},${gridCells(-1)}`);
    walls.add(`${gridCells(-22)},${gridCells(0)}`); // y=0
    walls.add(`${gridCells(-20)},${gridCells(0)}`);
    walls.add(`${gridCells(-19)},${gridCells(0)}`);
    walls.add(`${gridCells(-17)},${gridCells(0)}`);
    walls.add(`${gridCells(-15)},${gridCells(0)}`);
    walls.add(`${gridCells(-13)},${gridCells(0)}`);
    walls.add(`${gridCells(-12)},${gridCells(0)}`);
    walls.add(`${gridCells(-11)},${gridCells(0)}`);
    walls.add(`${gridCells(-10)},${gridCells(0)}`);
    walls.add(`${gridCells(-9)},${gridCells(0)}`);
    walls.add(`${gridCells(-7)},${gridCells(0)}`);
    walls.add(`${gridCells(-5)},${gridCells(0)}`);
    walls.add(`${gridCells(-4)},${gridCells(0)}`);
    walls.add(`${gridCells(-22)},${gridCells(1)}`); // y=1
    walls.add(`${gridCells(-17)},${gridCells(1)}`);
    walls.add(`${gridCells(-15)},${gridCells(1)}`);
    walls.add(`${gridCells(-7)},${gridCells(1)}`);
    walls.add(`${gridCells(-5)},${gridCells(1)}`);
    walls.add(`${gridCells(-22)},${gridCells(2)}`); // y=2
    walls.add(`${gridCells(-21)},${gridCells(2)}`);
    walls.add(`${gridCells(-20)},${gridCells(2)}`);
    walls.add(`${gridCells(-19)},${gridCells(2)}`);
    walls.add(`${gridCells(-18)},${gridCells(2)}`);
    walls.add(`${gridCells(-17)},${gridCells(2)}`);
    walls.add(`${gridCells(-15)},${gridCells(2)}`);
    walls.add(`${gridCells(-13)},${gridCells(2)}`);
    walls.add(`${gridCells(-12)},${gridCells(2)}`);
    walls.add(`${gridCells(-11)},${gridCells(2)}`);
    walls.add(`${gridCells(-10)},${gridCells(2)}`);
    walls.add(`${gridCells(-9)},${gridCells(2)}`);
    walls.add(`${gridCells(-8)},${gridCells(2)}`);
    walls.add(`${gridCells(-7)},${gridCells(2)}`);
    walls.add(`${gridCells(-5)},${gridCells(2)}`);
    walls.add(`${gridCells(-20)},${gridCells(3)}`); // y=3
    walls.add(`${gridCells(-17)},${gridCells(3)}`);
    walls.add(`${gridCells(-15)},${gridCells(3)}`);
    walls.add(`${gridCells(-11)},${gridCells(3)}`);
    walls.add(`${gridCells(-5)},${gridCells(3)}`);
    walls.add(`${gridCells(-23)},${gridCells(4)}`); // y=4
    walls.add(`${gridCells(-22)},${gridCells(4)}`);
    walls.add(`${gridCells(-20)},${gridCells(4)}`);
    walls.add(`${gridCells(-18)},${gridCells(4)}`);
    walls.add(`${gridCells(-17)},${gridCells(4)}`);
    walls.add(`${gridCells(-15)},${gridCells(4)}`);
    walls.add(`${gridCells(-14)},${gridCells(4)}`);
    walls.add(`${gridCells(-13)},${gridCells(4)}`);
    walls.add(`${gridCells(-11)},${gridCells(4)}`);
    walls.add(`${gridCells(-9)},${gridCells(4)}`);
    walls.add(`${gridCells(-8)},${gridCells(4)}`);
    walls.add(`${gridCells(-7)},${gridCells(4)}`);
    walls.add(`${gridCells(-6)},${gridCells(4)}`);
    walls.add(`${gridCells(-5)},${gridCells(4)}`);
    walls.add(`${gridCells(-20)},${gridCells(5)}`); // y=5
    walls.add(`${gridCells(-15)},${gridCells(5)}`);
    walls.add(`${gridCells(-11)},${gridCells(5)}`);
    walls.add(`${gridCells(-7)},${gridCells(5)}`);
    walls.add(`${gridCells(-22)},${gridCells(6)}`); // y=6
    walls.add(`${gridCells(-21)},${gridCells(6)}`);
    walls.add(`${gridCells(-20)},${gridCells(6)}`);
    walls.add(`${gridCells(-18)},${gridCells(6)}`);
    walls.add(`${gridCells(-17)},${gridCells(6)}`);
    walls.add(`${gridCells(-16)},${gridCells(6)}`);
    walls.add(`${gridCells(-15)},${gridCells(6)}`);
    walls.add(`${gridCells(-13)},${gridCells(6)}`);
    walls.add(`${gridCells(-12)},${gridCells(6)}`);
    walls.add(`${gridCells(-11)},${gridCells(6)}`);
    walls.add(`${gridCells(-10)},${gridCells(6)}`);
    walls.add(`${gridCells(-9)},${gridCells(6)}`);
    walls.add(`${gridCells(-7)},${gridCells(6)}`);
    walls.add(`${gridCells(-6)},${gridCells(6)}`);
    walls.add(`${gridCells(-5)},${gridCells(6)}`);
    walls.add(`${gridCells(-22)},${gridCells(7)}`); // y=7
    walls.add(`${gridCells(-20)},${gridCells(7)}`);
    walls.add(`${gridCells(-15)},${gridCells(7)}`);
    walls.add(`${gridCells(-9)},${gridCells(7)}`);
    walls.add(`${gridCells(-5)},${gridCells(7)}`);
    walls.add(`${gridCells(-22)},${gridCells(8)}`); // y=8
    walls.add(`${gridCells(-20)},${gridCells(8)}`);
    walls.add(`${gridCells(-19)},${gridCells(8)}`);
    walls.add(`${gridCells(-18)},${gridCells(8)}`);
    walls.add(`${gridCells(-17)},${gridCells(8)}`);
    walls.add(`${gridCells(-15)},${gridCells(8)}`);
    walls.add(`${gridCells(-14)},${gridCells(8)}`);
    walls.add(`${gridCells(-13)},${gridCells(8)}`);
    walls.add(`${gridCells(-11)},${gridCells(8)}`);
    walls.add(`${gridCells(-9)},${gridCells(8)}`);
    walls.add(`${gridCells(-8)},${gridCells(8)}`);
    walls.add(`${gridCells(-7)},${gridCells(8)}`);
    walls.add(`${gridCells(-5)},${gridCells(8)}`);
    walls.add(`${gridCells(-22)},${gridCells(9)}`); // y=9
    walls.add(`${gridCells(-20)},${gridCells(9)}`);
    walls.add(`${gridCells(-15)},${gridCells(9)}`);
    walls.add(`${gridCells(-11)},${gridCells(9)}`);
    walls.add(`${gridCells(-5)},${gridCells(9)}`);
    walls.add(`${gridCells(-22)},${gridCells(10)}`); // y=10
    walls.add(`${gridCells(-20)},${gridCells(10)}`);
    walls.add(`${gridCells(-18)},${gridCells(10)}`);
    walls.add(`${gridCells(-17)},${gridCells(10)}`);
    walls.add(`${gridCells(-16)},${gridCells(10)}`);
    walls.add(`${gridCells(-15)},${gridCells(10)}`);
    walls.add(`${gridCells(-13)},${gridCells(10)}`);
    walls.add(`${gridCells(-11)},${gridCells(10)}`);
    walls.add(`${gridCells(-10)},${gridCells(10)}`);
    walls.add(`${gridCells(-9)},${gridCells(10)}`);
    walls.add(`${gridCells(-8)},${gridCells(10)}`);
    walls.add(`${gridCells(-7)},${gridCells(10)}`);
    walls.add(`${gridCells(-6)},${gridCells(10)}`);
    walls.add(`${gridCells(-5)},${gridCells(10)}`);
    walls.add(`${gridCells(-22)},${gridCells(11)}`); // y=11
    walls.add(`${gridCells(-13)},${gridCells(11)}`);
    walls.add(`${gridCells(-9)},${gridCells(11)}`);
    walls.add(`${gridCells(-5)},${gridCells(11)}`);
    walls.add(`${gridCells(-23)},${gridCells(12)}`); // y=12
    walls.add(`${gridCells(-22)},${gridCells(12)}`);
    walls.add(`${gridCells(-20)},${gridCells(12)}`);
    walls.add(`${gridCells(-18)},${gridCells(12)}`);
    walls.add(`${gridCells(-17)},${gridCells(12)}`);
    walls.add(`${gridCells(-16)},${gridCells(12)}`);
    walls.add(`${gridCells(-15)},${gridCells(12)}`);
    walls.add(`${gridCells(-14)},${gridCells(12)}`);
    walls.add(`${gridCells(-13)},${gridCells(12)}`);
    walls.add(`${gridCells(-12)},${gridCells(12)}`);
    walls.add(`${gridCells(-11)},${gridCells(12)}`);
    walls.add(`${gridCells(-9)},${gridCells(12)}`);
    walls.add(`${gridCells(-7)},${gridCells(12)}`);
    walls.add(`${gridCells(-5)},${gridCells(12)}`);
    walls.add(`${gridCells(-20)},${gridCells(13)}`); // y=13
    walls.add(`${gridCells(-13)},${gridCells(13)}`);
    walls.add(`${gridCells(-11)},${gridCells(13)}`);
    walls.add(`${gridCells(-9)},${gridCells(13)}`);
    walls.add(`${gridCells(-7)},${gridCells(13)}`);
    walls.add(`${gridCells(-5)},${gridCells(13)}`);
    walls.add(`${gridCells(-22)},${gridCells(14)}`); // y=14
    walls.add(`${gridCells(-21)},${gridCells(14)}`);
    walls.add(`${gridCells(-20)},${gridCells(14)}`);
    walls.add(`${gridCells(-19)},${gridCells(14)}`);
    walls.add(`${gridCells(-18)},${gridCells(14)}`);
    walls.add(`${gridCells(-17)},${gridCells(14)}`);
    walls.add(`${gridCells(-16)},${gridCells(14)}`);
    walls.add(`${gridCells(-15)},${gridCells(14)}`);
    walls.add(`${gridCells(-13)},${gridCells(14)}`);
    walls.add(`${gridCells(-11)},${gridCells(14)}`);
    walls.add(`${gridCells(-9)},${gridCells(14)}`);
    walls.add(`${gridCells(-8)},${gridCells(14)}`);
    walls.add(`${gridCells(-7)},${gridCells(14)}`);
    walls.add(`${gridCells(-5)},${gridCells(14)}`);
    walls.add(`${gridCells(-22)},${gridCells(15)}`); // y=15
    walls.add(`${gridCells(-13)},${gridCells(15)}`);
    walls.add(`${gridCells(-11)},${gridCells(15)}`);
    walls.add(`${gridCells(-22)},${gridCells(16)}`); // y=16
    walls.add(`${gridCells(-20)},${gridCells(16)}`);
    walls.add(`${gridCells(-19)},${gridCells(16)}`);
    walls.add(`${gridCells(-18)},${gridCells(16)}`);
    walls.add(`${gridCells(-17)},${gridCells(16)}`);
    walls.add(`${gridCells(-16)},${gridCells(16)}`);
    walls.add(`${gridCells(-15)},${gridCells(16)}`);
    walls.add(`${gridCells(-14)},${gridCells(16)}`);
    walls.add(`${gridCells(-13)},${gridCells(16)}`);
    walls.add(`${gridCells(-11)},${gridCells(16)}`);
    walls.add(`${gridCells(-10)},${gridCells(16)}`);
    walls.add(`${gridCells(-9)},${gridCells(16)}`);
    walls.add(`${gridCells(-8)},${gridCells(16)}`);
    walls.add(`${gridCells(-7)},${gridCells(16)}`);
    walls.add(`${gridCells(-6)},${gridCells(16)}`);
    walls.add(`${gridCells(-5)},${gridCells(16)}`);
    walls.add(`${gridCells(-4)},${gridCells(16)}`);
    walls.add(`${gridCells(-22)},${gridCells(17)}`); // y=17
    walls.add(`${gridCells(-20)},${gridCells(17)}`);
    walls.add(`${gridCells(-13)},${gridCells(17)}`);
    walls.add(`${gridCells(-22)},${gridCells(18)}`); // y=18
    walls.add(`${gridCells(-20)},${gridCells(18)}`);
    walls.add(`${gridCells(-18)},${gridCells(18)}`);
    walls.add(`${gridCells(-17)},${gridCells(18)}`);
    walls.add(`${gridCells(-16)},${gridCells(18)}`);
    walls.add(`${gridCells(-15)},${gridCells(18)}`);
    walls.add(`${gridCells(-13)},${gridCells(18)}`);
    walls.add(`${gridCells(-12)},${gridCells(18)}`);
    walls.add(`${gridCells(-11)},${gridCells(18)}`);
    walls.add(`${gridCells(-10)},${gridCells(18)}`);
    walls.add(`${gridCells(-9)},${gridCells(18)}`);
    walls.add(`${gridCells(-8)},${gridCells(18)}`);
    walls.add(`${gridCells(-7)},${gridCells(18)}`);
    walls.add(`${gridCells(-6)},${gridCells(18)}`);
    walls.add(`${gridCells(-5)},${gridCells(18)}`);
    walls.add(`${gridCells(-22)},${gridCells(19)}`); // y=19
    walls.add(`${gridCells(-20)},${gridCells(19)}`);
    walls.add(`${gridCells(-18)},${gridCells(19)}`);
    walls.add(`${gridCells(-16)},${gridCells(19)}`);
    walls.add(`${gridCells(-13)},${gridCells(19)}`);
    walls.add(`${gridCells(-5)},${gridCells(19)}`);
    walls.add(`${gridCells(-22)},${gridCells(20)}`); // y=20
    walls.add(`${gridCells(-20)},${gridCells(20)}`);
    walls.add(`${gridCells(-18)},${gridCells(20)}`);
    walls.add(`${gridCells(-16)},${gridCells(20)}`);
    walls.add(`${gridCells(-14)},${gridCells(20)}`);
    walls.add(`${gridCells(-13)},${gridCells(20)}`);
    walls.add(`${gridCells(-11)},${gridCells(20)}`);
    walls.add(`${gridCells(-10)},${gridCells(20)}`);
    walls.add(`${gridCells(-9)},${gridCells(20)}`);
    walls.add(`${gridCells(-8)},${gridCells(20)}`);
    walls.add(`${gridCells(-7)},${gridCells(20)}`);
    walls.add(`${gridCells(-5)},${gridCells(20)}`);
    walls.add(`${gridCells(-22)},${gridCells(21)}`); // y=21
    walls.add(`${gridCells(-20)},${gridCells(21)}`);
    walls.add(`${gridCells(-18)},${gridCells(21)}`);
    walls.add(`${gridCells(-16)},${gridCells(21)}`);
    walls.add(`${gridCells(-11)},${gridCells(21)}`);
    walls.add(`${gridCells(-5)},${gridCells(21)}`);
    walls.add(`${gridCells(-22)},${gridCells(22)}`); // y=22
    walls.add(`${gridCells(-20)},${gridCells(22)}`);
    walls.add(`${gridCells(-18)},${gridCells(22)}`);
    walls.add(`${gridCells(-16)},${gridCells(22)}`);
    walls.add(`${gridCells(-15)},${gridCells(22)}`);
    walls.add(`${gridCells(-14)},${gridCells(22)}`);
    walls.add(`${gridCells(-13)},${gridCells(22)}`);
    walls.add(`${gridCells(-12)},${gridCells(22)}`);
    walls.add(`${gridCells(-11)},${gridCells(22)}`);
    walls.add(`${gridCells(-10)},${gridCells(22)}`);
    walls.add(`${gridCells(-9)},${gridCells(22)}`);
    walls.add(`${gridCells(-8)},${gridCells(22)}`);
    walls.add(`${gridCells(-7)},${gridCells(22)}`);
    walls.add(`${gridCells(-5)},${gridCells(22)}`);
    walls.add(`${gridCells(-22)},${gridCells(23)}`); // y=23
    walls.add(`${gridCells(-18)},${gridCells(23)}`);
    walls.add(`${gridCells(-16)},${gridCells(23)}`);
    walls.add(`${gridCells(-5)},${gridCells(23)}`);
    walls.add(`${gridCells(-22)},${gridCells(24)}`); // y=24
    walls.add(`${gridCells(-21)},${gridCells(24)}`);
    walls.add(`${gridCells(-20)},${gridCells(24)}`);
    walls.add(`${gridCells(-19)},${gridCells(24)}`);
    walls.add(`${gridCells(-18)},${gridCells(24)}`);
    walls.add(`${gridCells(-16)},${gridCells(24)}`);
    walls.add(`${gridCells(-15)},${gridCells(24)}`);
    walls.add(`${gridCells(-13)},${gridCells(24)}`);
    walls.add(`${gridCells(-12)},${gridCells(24)}`);
    walls.add(`${gridCells(-11)},${gridCells(24)}`);
    walls.add(`${gridCells(-10)},${gridCells(24)}`);
    walls.add(`${gridCells(-9)},${gridCells(24)}`);
    walls.add(`${gridCells(-8)},${gridCells(24)}`);
    walls.add(`${gridCells(-7)},${gridCells(24)}`);
    walls.add(`${gridCells(-6)},${gridCells(24)}`);
    walls.add(`${gridCells(-5)},${gridCells(24)}`);
    walls.add(`${gridCells(-22)},${gridCells(25)}`); // y=25
    walls.add(`${gridCells(-18)},${gridCells(25)}`);
    walls.add(`${gridCells(-10)},${gridCells(25)}`);
    walls.add(`${gridCells(-5)},${gridCells(25)}`);
    walls.add(`${gridCells(-22)},${gridCells(26)}`); // y=26
    walls.add(`${gridCells(-21)},${gridCells(26)}`);
    walls.add(`${gridCells(-20)},${gridCells(26)}`);
    walls.add(`${gridCells(-18)},${gridCells(26)}`);
    walls.add(`${gridCells(-16)},${gridCells(26)}`);
    walls.add(`${gridCells(-15)},${gridCells(26)}`);
    walls.add(`${gridCells(-14)},${gridCells(26)}`);
    walls.add(`${gridCells(-13)},${gridCells(26)}`);
    walls.add(`${gridCells(-12)},${gridCells(26)}`);
    walls.add(`${gridCells(-11)},${gridCells(26)}`);
    walls.add(`${gridCells(-10)},${gridCells(26)}`);
    walls.add(`${gridCells(-8)},${gridCells(26)}`);
    walls.add(`${gridCells(-6)},${gridCells(26)}`);
    walls.add(`${gridCells(-5)},${gridCells(26)}`);
    walls.add(`${gridCells(-18)},${gridCells(27)}`); // y=27
    walls.add(`${gridCells(-14)},${gridCells(27)}`);
    walls.add(`${gridCells(-10)},${gridCells(27)}`);
    walls.add(`${gridCells(-8)},${gridCells(27)}`);
    walls.add(`${gridCells(-22)},${gridCells(28)}`); // y=28
    walls.add(`${gridCells(-21)},${gridCells(28)}`);
    walls.add(`${gridCells(-20)},${gridCells(28)}`);
    walls.add(`${gridCells(-19)},${gridCells(28)}`);
    walls.add(`${gridCells(-18)},${gridCells(28)}`);
    walls.add(`${gridCells(-17)},${gridCells(28)}`);
    walls.add(`${gridCells(-16)},${gridCells(28)}`);
    walls.add(`${gridCells(-14)},${gridCells(28)}`);
    walls.add(`${gridCells(-12)},${gridCells(28)}`);
    walls.add(`${gridCells(-10)},${gridCells(28)}`);
    walls.add(`${gridCells(-8)},${gridCells(28)}`);
    walls.add(`${gridCells(-7)},${gridCells(28)}`);
    walls.add(`${gridCells(-6)},${gridCells(28)}`);
    walls.add(`${gridCells(-5)},${gridCells(28)}`);
    walls.add(`${gridCells(-16)},${gridCells(29)}`); // y=29
    walls.add(`${gridCells(-12)},${gridCells(29)}`);
    walls.add(`${gridCells(-8)},${gridCells(29)}`);
}

export function addWallsCaveLevel2(walls) {
    for (let y = 10; y <= 64; y++) {
        walls.add(`${gridCells(10 - 33)},${gridCells(y - 16)}`); // Left edge
        walls.add(`${gridCells(64 - 33)},${gridCells(y - 16)}`); // Right edge
    }
    for (let x = 10; x <= 64; x++) {
        walls.add(`${gridCells(x - 33)},${gridCells(64 - 16)}`); // Bottom edge
        walls.add(`${gridCells(x - 33)},${gridCells(10 - 16)}`); // Top edge
    }
    const excludedCells = new Set([
        "14-14", "15-14", "15-15", "22-16", "22-17", "22-18", "23-16", "23-17", "23-18", "24-16", "24-17", "24-18",
        "27-14", "30-15", "39-19", "39-20", "39-21", "40-20", "40-21", "41-20", "41-21", "41-22", "42-20", "42-21",
        "47-14", "50-20", "51-11", "52-11", "53-11", "54-11", "55-11", "52-12", "50-13", "51-13", "54-16", "27-27",
        "52-13", "53-13", "54-13", "55-13", "56-13", "57-13", "56-14", "53-15", "54-15", "55-15", "56-15", "57-15",
        "58-15", "59-15", "60-15", "60-14", "60-13", "62-22", "62-23", "63-21", "63-22", "63-23", "63-24", "33-24",
        "34-24", "34-25", "35-23", "11-28", "12-28", "13-26", "13-27", "13-28", "13-29", "14-26", "14-27", "14-28", "14-29",
        "15-26", "15-27", "15-28", "15-29", "16-27", "16-28", "16-29", "17-27", "17-28", "17-29", "18-27", "18-29",
        "19-27", "19-28", "19-29", "20-29", "21-29", "22-29", "23-29", "24-29", "25-29", "24-28", "24-27", "23-27",
        "24-27", "25-27", "26-27", "22-30", "21-31", "22-31", "23-31", "24-31", "46-33", "47-33", "48-33", "49-33",
        "50-33", "51-33", "52-33", "56-26", "56-27", "26-38", "42-39", "43-39", "43-40", "44-39", "45-39", "46-39",
        "47-39", "45-38", "44-37", "45-37", "46-37", "51-38", "52-38", "53-38", "52-39", "53-37", "15-42", "16-43",
        "15-44", "16-45", "17-43", "25-44", "26-44", "27-44", "25-45", "26-45", "27-45", "25-46", "26-46", "27-46",
        "36-47", "42-45", "43-47", "43-48", "43-49", "44-48", "45-48", "45-47", "52-42", "50-43", "51-43", "52-43",
        "53-43", "54-43", "51-44", "49-45", "50-45", "51-45", "52-45", "53-45", "54-45", "55-45", "56-45", "57-45",
        "56-46", "56-47", "55-48", "56-48", "57-48", "58-48", "59-48", "60-48", "58-49", "54-50", "55-50", "56-50",
        "57-50", "58-50", "59-50", "55-51", "55-52", "61-46", "62-46", "63-46", "61-47", "62-47", "61-48", "62-48", "63-48",
        "61-49", "62-49", "63-49", "61-50", "61-51", "62-51", "63-51", "21-50", "21-51", "21-52", "20-52", "19-52", "18-52",
        "11-53", "12-53", "13-53", "14-53", "15-53", "16-53", "17-53", "18-53", "11-54", "12-54", "18-54", "24-54",
        "25-55", "11-55", "12-55", "16-55", "18-55", "25-54", "25-55", "11-56", "12-56", "13-56", "16-56", "18-56", "19-56",
        "20-56", "21-56", "22-56", "23-56", "24-56", "25-56", "26-56", "27-56", "28-56", "11-57", "12-57", "13-57",
        "14-57", "28-57", "11-58", "12-58", "13-58", "14-58", "15-58", "26-58", "27-58", "28-58", "11-59", "12-59",
        "13-59", "14-59", "15-59", "16-59", "17-59", "18-59", "20-59", "21-59", "22-59", "23-59", "24-59", "25-59",
        "26-59", "27-59", "28-59", "11-60", "12-60", "13-60", "14-60", "15-60", "16-60", "17-60", "19-60", "20-60",
        "21-60", "11-61", "12-61", "13-61", "14-61", "15-61", "16-61", "17-61", "18-61", "19-61", "20-61", "21-61",
        "11-62", "12-62", "13-62", "14-62", "15-62", "16-62", "17-62", "18-62", "19-62", "20-62", "21-62", "22-62",
        "11-63", "12-63", "13-63", "14-63", "15-63", "16-63", "17-63", "18-63", "19-63", "20-63", "21-63", "22-63",
        "23-63", "32-53", "34-52", "40-58", "41-54", "63-52", "63-53", "62-54", "63-54", "55-55", "57-55", "58-55",
        "59-55", "60-55", "61-55", "62-55", "63-55", "55-56", "57-56", "60-56", "61-56", "62-56", "63-56", "46-57",
        "47-57", "48-57", "49-57", "50-57", "51-57", "52-57", "53-57", "55-57", "57-57", "59-57", "61-57", "62-57",
        "48-58", "52-58", "55-58", "57-58", "59-58", "61-58", "42-59", "47-59", "48-59", "49-59", "50-59", "52-59",
        "53-59", "54-59", "55-59", "56-59", "57-59", "58-59", "61-59", "41-60", "42-60", "43-60", "44-60", "45-60",
        "46-60", "49-60", "57-60", "61-60", "35-61", "36-61", "37-61", "38-61", "42-61", "45-61", "49-61", "57-61",
        "58-61", "59-61", "60-61", "61-61", "62-61", "63-61", "36-62", "41-62", "42-62", "43-62", "45-62", "46-62",
        "47-62", "49-62", "54-62", "59-62", "60-62", "61-62", "62-62", "63-62", "36-63", "37-63", "38-63", "39-63",
        "40-63", "47-63", "49-63", "35-63"
    ]);
    
    for (let x = 0; x < 74; x++) {
        for (let y = 0; y < 74; y++) {
            const cell = `${x}-${y}`;
            if (!excludedCells.has(cell)) {
                walls.add(`${gridCells(x-33)},${gridCells(y-16)}`);
            }
        }
    }
}

export function addPerceptionWallsCaveLevel2(walls) {
    for (let y = 10; y <= 64; y++) {
        walls.add(`${gridCells(10 - 33)},${gridCells(y - 16)}`); // Left edge
        walls.add(`${gridCells(64 - 33)},${gridCells(y - 16)}`); // Right edge
    }
    for (let x = 10; x <= 64; x++) {
        walls.add(`${gridCells(x - 33)},${gridCells(64 - 16)}`); // Bottom edge
        walls.add(`${gridCells(x - 33)},${gridCells(10 - 16)}`); // Top edge
    }
    const excludedCells = new Set([
        "21-63", "22-63", "23-63", "24-63", "25-63", "26-63", "27-63", "34-63", "35-63", "36-63",
        "13-62", "14-62", "15-62", "16-62", "21-62", "27-62", "28-62", "29-62", "30-62", "31-62",
        "32-62", "33-62", "34-62", "36-62", "13-61", "16-61", "17-61", "20-61", "21-61", "36-61",
        "13-60", "17-60", "18-60", "19-60", "20-60", "36-60", "37-60", "38-60", "39-60", "40-60",
        "41-60", "42-60", "43-60", "44-60", "45-60", "46-60", "47-60", "48-60", "49-60", "13-59",
        "14-59", "28-59", "29-59", "30-59", "31-59", "32-59", "33-59", "34-59", "35-59", "36-59",
        "14-58", "15-58", "15-57", "16-57", "16-56", "16-55", "16-54", "15-53", "16-53",
        "45-48", "46-48", "47-48", "48-48", "49-48", "50-48", "51-48", "32-47", "33-47", "34-47",
        "35-47", "36-47", "45-47", "48-47", "51-47", "19-46", "20-46", "21-46", "22-46", "23-46",
        "24-46", "25-46", "32-46", "36-46", "45-46", "48-46", "51-46", "18-45", "19-45", "25-45",
        "26-45", "32-45", "36-45", "45-45", "46-45", "47-45", "48-45", "49-45", "50-45", "51-45",
        "52-45", "16-44", "17-44", "18-44", "26-44", "27-44", "32-44", "36-44", "37-44", "38-44",
        "39-44", "52-44", "16-43", "17-43", "27-43", "28-43", "29-43", "30-43", "31-43", "32-43",
        "39-43", "52-43", "16-42", "39-42", "52-42", "16-41", "39-41", "40-41", "41-41", "42-41",
        "43-41", "52-41", "16-40", "43-40", "52-40", "16-39", "43-39", "52-39", "16-38", "17-38",
        "18-38", "19-38", "20-38", "21-38", "43-38", "47-38", "48-38", "49-38", "50-38", "51-38",
        "52-38", "53-38", "21-37", "43-37", "47-37", "53-37", "21-36", "43-36", "44-36", "45-36",
        "46-36", "47-36", "53-36", "21-35", "53-35", "21-34", "53-34", "21-33", "22-33", "53-33",
        "22-32", "53-32", "22-31", "53-31", "22-30", "53-30", "22-29", "23-29", "24-29", "53-29",
        "24-28", "53-28", "24-27", "25-27", "26-27", "53-27", "54-27", "55-27", "56-27", "26-26",
        "27-26", "28-26", "29-26", "56-26", "26-25", "29-25", "34-25", "56-25", "26-24", "29-24",
        "30-24", "31-24", "32-24", "33-24", "34-24", "56-24", "26-23", "56-23", "59-23", "60-23",
        "61-23", "62-23", "63-23", "26-22", "56-22", "59-22", "63-22", "23-21", "24-21", "25-21",
        "26-21", "34-21", "35-21", "36-21", "37-21", "38-21", "39-21", "56-21", "57-21", "58-21",
        "59-21", "63-21", "23-20", "34-20", "39-20", "40-20", "41-20", "42-20", "43-20", "44-20",
        "45-20", "46-20", "47-20", "48-20", "49-20", "50-20", "51-20", "52-20", "53-20", "54-20",
        "63-20", "23-19", "34-19", "42-19", "54-19", "55-19", "56-19", "57-19", "58-19", "59-19",
        "63-19", "23-18", "34-18", "42-18", "54-18", "59-18", "63-18", "23-17", "25-17", "26-17",
        "27-17", "28-17", "29-17", "30-17", "31-17", "32-17", "33-17", "34-17", "42-17", "54-17",
        "59-17", "60-17", "61-17", "62-17", "63-17", "23-16", "24-16", "25-16", "42-16", "54-16",
        "42-15", "52-15", "53-15", "54-15", "42-14", "52-14", "42-13", "43-13", "44-13", "45-13",
        "46-13", "47-13", "48-13", "49-13", "50-13", "51-13", "52-13", "52-12", "52-11", "53-11",
        "54-11"
    ]);
    
    for (let x = 0; x < 74; x++) {
        for (let y = 0; y < 74; y++) {
            const cell = `${x}-${y}`;
            if (!excludedCells.has(cell)) {
                walls.add(`${gridCells(x-33)},${gridCells(y-16)}`);
            }
        }
    }
}