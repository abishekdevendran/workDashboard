export default function getToday() {
    return String(new Date().toLocaleDateString('en-CA'));
}