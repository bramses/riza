import { readFile } from "./io.mjs"
import { encode } from './tokenizer.mjs';

const main = async () => {
    const data = await readFile("test.md");
    console.log(data);
    const encoded = encode(data);
    console.log(encoded);
}

main();