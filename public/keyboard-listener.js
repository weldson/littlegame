export default function createKeyboardListener(document) {
    const state = {
        observers: [],
        playerId: null
    };

    function subscribe(observerFunction) {
        console.log(observerFunction)
        state.observers.push(observerFunction);
    }

    function notifyAll(command) {
        for (const observerFunction of state.observers) {
            observerFunction(command);
        }
    }

    document.addEventListener('keydown', handleKeydown);
    
    function registerPlayerId(playerId) {
        state.playerId = playerId
    }

    function handleKeydown(event) {
        const keyPressed = event.key;
    
        const command = {
            playerId: state.playerId,
            keyPressed
        };
        notifyAll(command);
    }

    return {
        subscribe,
        registerPlayerId
    };
}