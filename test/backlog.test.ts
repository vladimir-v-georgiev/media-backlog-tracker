import { describe, it, expect } from 'vitest'
import Backlog from '../backend/backlog'
import Item from '../backend/item'

describe('Backlog', () => {
    it('gets backlog contents', () => {
        const backlog = new Backlog();
        expect(backlog.getBacklog()).toStrictEqual([]);
    })
    it('adds items to backlog', () => {
        const backlog = new Backlog();
        const item = new Item({
            title: "Elden Ring",
            length: 100,
            genre: "Souls-Like"
        })
        backlog.add(item);
        expect(backlog.getBacklog()).toStrictEqual([item]);
    })
    it('removes items from backlog', () => {
        const backlog = new Backlog([new Item({
            title: "Elden Ring",
            length: 100,
            genre: "Souls-Like"
        })]);
        backlog.remove("Elden Ring");
        expect(backlog.getBacklog()).toStrictEqual([]);
    })
    it('updates items in backlog', () => {
        const backlog = new Backlog([new Item({
            title: "Elden Ring",
            length: 100,
            genre: "Souls-Like"
        })]);
        backlog.update("Elden Ring", { length: 150 });
        const item = new Item({
            title: "Elden Ring",
            length: 150,
            genre: "Souls-Like"
        }) 
        expect(backlog.getBacklog()).toStrictEqual([item]);
    })
})