class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async post(path, body) {
    const response = this.makeRequest(path, {
      method: 'POST',
      body,
    });

    return response;
  }

  async makeRequest(path, options) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options.body),
    });

    let body = null;

    if (response && response.status < 400) {
      body = await response.json();

      return body;
    }

    const { error } = await response.json();

    throw new Error(error);
  }
}

export default HttpClient;
