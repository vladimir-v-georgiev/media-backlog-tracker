import {describe, it, expect} from 'vitest'
import Backlog from '../backend/backlog'

describe('Backlog', () => {
    it('gets backlog contents', () => {
        const backlog = new Backlog();
        expect(backlog.getBacklog()).toStrictEqual([]);
    })
})