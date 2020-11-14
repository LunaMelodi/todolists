export default class ResGeneration {
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
  }

  setSuccess(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.type = 'success';

    return this;
  }

  setError(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.type = 'error';

    return this;
  }

  send(res) {
    console.log(this);
    const result = {
      status: this.type,
      message: this.message,
      data: this.data,
    };

    if (this.type === 'success') {
      return res.status(this.statusCode).json(result);
    } else {
      return res.status(this.statusCode).json({
        status: this.type,
        message: this.message,
      });
    }
    
  }
}