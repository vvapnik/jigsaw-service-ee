import {Service} from "@vapnik/jigsaw";

export type EventHandler = (eventBody?: unknown) => void

@Service('@jigsaw/ee')
export class EventEmitter {
    private topics: Record<string, EventHandler[]> = {}

    exec() {

    }

    public addEventListener(topic: string, handler: EventHandler) {
        if (!this.topics[topic]) {
            this.topics[topic] = []
        }
        this.topics[topic].push(handler)
    }

    public removeEventListener(topic: string, handler: EventHandler) {
        if (!this.topics[topic]) {
            return
        }
        this.topics[topic] = this.topics[topic].filter(existingHandler => existingHandler !== handler)
    }

    public dispatchEvent(topic: string, body?: unknown) {
        const handlers = this.topics[topic]
        if (handlers) {
            handlers.forEach(handler => handler(body))
        }
    }
}