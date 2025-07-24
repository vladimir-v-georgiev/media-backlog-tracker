import {describe, it, expect} from 'vitest'
import Item from '../backend/item'

describe('Item', () => {
    it('gets title', () => {
        const item = new Item({
            title: "Elden Ring",
            length: 100,
            genre: "Souls-Like"
        });
        expect(item.getTitle()).toBe("Elden Ring");
    })
    it('gets details', () => {
        const config = {
            title: "Elden Ring",
            length: 100,
            genre: "Souls-Like"
        };
        const item = new Item(config);
        expect(item.getDetails()).toStrictEqual(config);
    })
    it('sets default details', () => {
        const config = {}
        const item = new Item(config);
        expect(item.getDetails()).toStrictEqual({
            title: "",
            length: 0,
            genre: ""
        })
    })
});