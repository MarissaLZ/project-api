export function fetchResponse (search) {
    const prompt = {
        "prompt": search,
        "temperature": 0.6,
        "max_tokens": 100,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0,
    }
    return (
        fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(prompt),
        })
        .then((response) => response.json())
    )
}