export default function wordDiclension(count, word) {
    count = Math.abs(count) % 100; 
    var count1 = count % 10;
    if (count > 10 && count < 20) { return word[2]; }
    if (count1 > 1 && count1 < 5) { return word[1]; }
    if (count1 == 1) { return word[0]; }
    return word[2];
}