export { type default  as LevelType } from './level_type';
import { level1 } from './level1';

const levels = [ level1 ];

levels.map(level => {
    level.inside = level.outside.map(element => {
        const copy = element.clone();
        copy.position.multiplyBy(.2);
        return copy;
    });
})

// TODO: Make array of levels and use it in player

export { level1 };