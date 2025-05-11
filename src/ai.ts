import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const handleAIRequest = async (message: string) => {
    const functions = [
        {
            name: 'summarize',
            description: 'Summarize the given text.',
            parameters: {
                type: 'object',
                properties: {
                    text: { type: 'string', description: 'Text to summarize' },
                },
                required: ['text'],
            },
        },
        {
            name: 'translate',
            description: 'Translate text to a target language.',
            parameters: {
                type: 'object',
                properties: {
                    text: { type: 'string', description: 'Text to translate' },
                    targetLang: { type: 'string', description: 'Target language' },
                },
                required: ['text', 'targetLang'],
            },
        },
    ];

    const response = await openai.chat.completions.create({
        model: 'gpt-4-0613',
        messages: [{ role: 'user', content: message }],
        functions,
    });

    return response;
};