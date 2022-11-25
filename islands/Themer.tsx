export default function Themer() {
    return (
        <div>
        <input onChange={(event) => document.querySelector('.themer').setAttribute('content', event.currentTarget.value)} type="color" value="#000000" list="colors" />
<datalist id="colors">
    <option>#ff0000</option>
    <option>#0000ff</option>
    <option>#00ff00</option>
    <option>#ffff00</option>
    <option>#00ffff</option>
</datalist>
</div>
    )
}