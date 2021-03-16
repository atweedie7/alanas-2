namespace SpriteKind {
    export const pickup = SpriteKind.create()
}
info.onCountdownEnd(function () {
    if (info.score() >= 5) {
        game.over(true)
    } else {
        game.over(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pickup, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(mySprite3, sprites.castle.tilePath5)
})
let mySprite3: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . 5 . 5 . 5 . . . . 
    . . . . . . . 5 5 5 5 5 . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 7 7 7 7 7 b . . . 
    . . . . b b 7 a 1 f 7 7 c f . . 
    . . . . b 7 7 1 f f 7 c 3 c . . 
    . . . . b 7 7 a f b c c 3 3 . . 
    . b b b c 7 7 7 7 7 3 3 3 3 3 b 
    b 7 7 7 b b c 7 7 3 3 3 3 3 b . 
    b b 7 7 7 7 b 7 7 7 7 7 7 7 . . 
    c 7 c 7 7 7 7 c 7 7 7 7 7 7 b . 
    c b 7 c c 7 7 b 7 7 7 7 7 7 b . 
    . c 7 7 c c b 7 7 7 7 7 7 c b . 
    . . c b 7 7 7 7 7 7 7 7 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
game.splash("get all the tacos")
for (let index = 0; index < 4; index++) {
    mySprite3 = sprites.create(img`
        . . . . . . . e e e e . . . . . 
        . . . . . e e 4 5 5 5 e e . . . 
        . . . . e 4 5 6 2 2 7 6 6 e . . 
        . . . e 5 6 6 7 2 2 6 4 4 4 e . 
        . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
        . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
        . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
        e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
        e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
        e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
        e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
        e 5 e c 5 4 5 4 5 5 5 e e . . . 
        e 5 e e 5 5 5 5 5 4 e . . . . . 
        4 5 4 e 5 5 5 5 e e . . . . . . 
        . 4 5 4 5 5 4 e . . . . . . . . 
        . . 4 4 e e e . . . . . . . . . 
        `, SpriteKind.pickup)
    tiles.placeOnRandomTile(mySprite3, sprites.castle.tilePath5)
}
