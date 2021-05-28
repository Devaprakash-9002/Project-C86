var canvas = new fabric.canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object)});
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        player_image_object = Img;
        player_image_object.scaleToWidth(block_image_width);
        player_image_object.scaleToHeight(block_image_height);
        player_image_object.set({
            top:player_y,
            left:player_x
            });
        canvas.add(player_image_object)});
}