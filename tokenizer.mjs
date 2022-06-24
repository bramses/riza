import GPT3Tokenizer from 'gpt3-tokenizer'

const tokenizer = new GPT3Tokenizer.default({ type: 'gpt3' })

export const encode = (str) => {
    const encoded = tokenizer.encode(str);
    return {
        length: encoded.text.length,
        ...encoded
    }
}

export const decode = (encoded) => {
    return tokenizer.decode(encoded.bpe);
}