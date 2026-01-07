export function Generate() {
    const now = Date.now();
    const length = now.toString().length;
    const extra = Math.floor(Math.random() * 10 ** length)
        .toString()
        .padStart(length, "0");
    return now.toString() + "-" + extra;
}
