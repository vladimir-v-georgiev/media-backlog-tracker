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
});