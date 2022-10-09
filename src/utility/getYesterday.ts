export default function getYesterday() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return String(new Date(yesterday).toLocaleDateString('en-CA'));
}
