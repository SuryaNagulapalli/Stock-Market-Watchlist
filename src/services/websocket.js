export class StockWebSocket {
    constructor(url, onMessage, onOpen, onClose, onError) {
      this.ws = new WebSocket(url);
      this.onMessage = onMessage;
      this.onOpen = onOpen;
      this.onClose = onClose;
      this.onError = onError;
  
      this.ws.onopen = () => {
        console.log('WebSocket connected');
        if (this.onOpen) this.onOpen();
      };
  
      this.ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (this.onMessage) this.onMessage(message);
      };
  
      this.ws.onclose = () => {
        console.log('WebSocket disconnected');
        if (this.onClose) this.onClose();
      };
  
      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        if (this.onError) this.onError(error);
      };
    }
  
    subscribeToStocks(symbols) {
      if (this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({
          type: 'subscribe',
          symbols: Array.isArray(symbols) ? symbols : [symbols]
        }));
      }
    }
  
    unsubscribeFromStocks(symbols) {
      if (this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({
          type: 'unsubscribe',
          symbols: Array.isArray(symbols) ? symbols : [symbols]
        }));
      }
    }
  
    close() {
      this.ws.close();
    }
  }