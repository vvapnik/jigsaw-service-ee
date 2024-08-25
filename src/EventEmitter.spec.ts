import {EventEmitter} from "./EventEmitter";

describe('EventEmitter', () => {
    it('should add handlers and dispatch events', () => {
        const mockFunction1 = jest.fn()
        const mockFunction2 = jest.fn()
        const topic = 'testTopic'
        const ee = new EventEmitter()
        ee.addEventListener(topic, mockFunction1)
        ee.addEventListener(topic, mockFunction2)
        expect(mockFunction1.mock.calls.length).toBe(0)
        ee.dispatchEvent(topic)
        expect(mockFunction1.mock.calls.length).toBe(1)
        expect(mockFunction2.mock.calls.length).toBe(1)
    })
})