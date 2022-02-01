import { monsterActionsTypes } from "./monster.type";

export const searchMonster = (username) => ({
    type : monsterActionsTypes.SEARCH_MONSTER,
    payload : username
})