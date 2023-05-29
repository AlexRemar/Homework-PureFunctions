
export function lifeStrip(value){
    if(value.health > 50){
        return 'healthy';
    } else if(value.health >= 15 && value.health <= 50){
        return 'wounded';
    } else if(value.health < 15){
        return 'critical';
    }
}

