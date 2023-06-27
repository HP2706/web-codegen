console.log('Hello from background script!');
export default function count() {
    var i = 0;
    while (i < 10) {
        console.log(`i = ${i}`);
        i += 1;
    }
    return i;
}
