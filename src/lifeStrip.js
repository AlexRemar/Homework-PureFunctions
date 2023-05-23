
function lifeStrip(value){
    if(value.health > 50){
        console.log('healthy')
    } else if(value.health >= 15 && value.health <= 50){
        console.log('wounded')
    } else if(value.health < 15){
        console.log('critical')
    }
}

export default {
    lifeStrip
}