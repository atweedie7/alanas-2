// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100007040b0802020202020202020202020207040a0506010106060101060606010407040c0b0d07040a0b07040b0c0d070407010202020101020201040d0a0b070405060606060101060606090b0a0b07040b0c0a0a0c07040b0a0a0d0a0b08010408030b0b0a07040c0d0b0a0c080101090501030c0b07040a0b0b0c080101090b0a070102020101020202020101090c0a0b0506060606060606060101090b0c0a0c0a0b0c0a0b0a0a0b0c07040b0c0b0d08030a0a0b0d0a0c0d0b07040c0c0d0a07040c0802020202020201040c0a0b0d07040b0701060606060601040a0b0d0a07010201040b0b0a0b0c07010202020205060606090d0c0d0c0b050606060606`, img`
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 2 2 . . 2 2 . . 2 2 2 . . 
. . . . . . . . . . . 2 2 2 . . 
. . . . . . . . . . . 2 2 2 . . 
2 2 2 2 2 . . 2 2 2 2 2 2 . . . 
. . 2 2 2 . . 2 2 2 2 2 . . . . 
. . . 2 2 . . 2 2 2 2 . . . . 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 
. . 2 2 2 2 2 2 2 2 . . 2 2 2 2 
. . 2 . . . . . . . . . 2 2 2 2 
. . 2 . . . . . . . . . 2 2 2 2 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tileDarkGrass2,sprites.castle.saplingPine,sprites.castle.saplingOak,sprites.castle.shrub], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
