Maze.drawScene = function(drawRole) {
	Maze.drawBg();
	Maze.drawNum();
	Maze.drawCollection().
	then(drawRole);
};

/**
* @param {Number} x. X coordinates of role position.
* @param {Number} y. Y coordinates of role position.
*/
Maze.drawRoleIdle = function(x, y) {
	Maze.context.globalCompositeOperation = 'source-over';
	//Maze.context.drawImage(Maze.role.img, Maze.role.sx, Maze.role.sy, 150, 210,x, y -  70 + Maze.SQUARE, Maze.SQUARE, 70);
	//Maze.context.drawImage(Maze.role.img,100, 200, 400, 420,x + 5, y - 50 + Maze.SQUARE, 50, 50 );
	Maze.context.drawImage(Maze.role.img, x - 10 , y - 13 , 10 + Maze.SQUARE, 10 + Maze.SQUARE);
};

Maze.drawRoleJump = function(x, y) {
	Maze.context.globalCompositeOperation = 'source-over';
	//Maze.context.drawImage(Maze.role.img, Maze.role.sx, Maze.role.sy, 150, 320,x, y -  105 + Maze.SQUARE, Maze.SQUARE, 105);
	//Maze.context.drawImage(Maze.role.img,100, 0, 300, 450,x + 5, y - 60 + Maze.SQUARE, 40, 60 );
	Maze.context.drawImage(Maze.role.img, x - 10 , y - 13 , 10 + Maze.SQUARE, 10 + Maze.SQUARE);
};

Maze.drawRoleTurn = function(x, y) {
	Maze.context.globalCompositeOperation = 'source-over';
	//Maze.context.drawImage(Maze.role.img, Maze.role.sx, Maze.role.sy, 150, 210,x, y -  70 + Maze.SQUARE, Maze.SQUARE, 70);
	//Maze.context.drawImage(Maze.role.img,100, 0, 300, 450,x + 5, y - 60 + Maze.SQUARE, 40, 60 );
	Maze.context.drawImage(Maze.role.img, x - 10 , y - 13 , 10 + Maze.SQUARE, 10 + Maze.SQUARE);
};

Maze.drawBg = function() {
	Maze.context.drawImage(Maze.bg, 0, 0, Maze.WIDTH, Maze.HEIGHT);

	return new Promise((resolve, reject) => {
		resolve();
	});
};

Maze.drawCollection = function() {
	var i, j, k = 0;
	for (i = 0; i < Maze.ROWS; ++i) {
		for (j = 0; j < Maze.COLS; ++j) {
			if(Maze.map[i][j] === Maze.pathType.PICK) {
				k++;
				if (k > Maze.count) {
					Maze.context.globalCompositeOperation = 'source-over';
					//Maze.context.drawImage(Maze.coin, j * Maze.SQUARE, i * Maze.SQUARE,  Maze.SQUARE, Maze.SQUARE);
					//Maze.context.drawImage(Maze.coin, (j * Maze.SQUARE)-10, (i * Maze.SQUARE)-10, 30+Maze.SQUARE, 20 + Maze.SQUARE);
					Maze.context.drawImage(Maze.coin, (j * Maze.SQUARE) + 7, (i * Maze.SQUARE) + 10, Maze.SQUARE - 15, Maze.SQUARE - 15);
				}			
			}
		}
	}

	return new Promise((resolve, reject) => {
		resolve();
	});
};

Maze.drawNum = function() {
	Maze.context.globalCompositeOperation = 'source-over';
	Maze.context.drawImage(Maze.number[Maze.count], 385, 16, 11, 21);
};
