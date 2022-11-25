import {useState} from "preact/hooks";
export default function BeepBoop() {
    const [beeporboop, setbeeporboop] = useState('beep');
    setTimeout(function() {
        beeporboop === 'beep' ? setbeeporboop('boop') : setbeeporboop('beep');
    }, 2000);
    return (
        <h2>{beeporboop}</h2>
    )
}