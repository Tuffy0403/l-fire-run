scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.gameOver(true)
})
let Water_man = sprites.create(assets.image`Water man`, SpriteKind.Player)
controller.moveSprite(Water_man)
scene.setBackgroundImage(assets.image`Burning Forests`)
tiles.setCurrentTilemap(tilemap`level4`)
scene.cameraFollowSprite(Water_man)
music.play(music.createSong(assets.song`Fire music`), music.PlaybackMode.LoopingInBackground)
game.setGameOverEffect(true, effects.starField)
game.onUpdate(function () {
    game.setGameOverMessage(false, "You Burned")
    game.setGameOverMessage(true, "You Clean")
})
