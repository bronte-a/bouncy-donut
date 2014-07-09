var load_state = {  
    preload: function() { 
        this.game.load.image('background', 'assets/bg.jpg');
         this.game.load.image('main', 'assets/main.png');  
        this.game.stage.backgroundImage = 'assets/bg.jpg';
        this.game.load.image('bird', 'assets/donut.png');  
        this.game.load.image('pipe', 'assets/pipe.png');  
        this.game.load.audio('jump', 'assets/jump.wav');
    },

    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    }
};