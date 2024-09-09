const handleChat = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/chat', { message: chatMessage });
      setChatResponse(response.data.response);
    } catch (error) {
      console.error('Error:', error);
      setChatResponse('Failed to fetch response.');
    }
  };
  