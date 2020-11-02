var spinner = (function(){
	var count = 0;
	up : function up(){
		return count++;
	}
	down : function down(){
		return count--;
	}
    return {
    up: up,
    down: down
    }
})();

spinner.up();
spinner.up();
spinner.down();
