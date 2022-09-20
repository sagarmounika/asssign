import { useState } from "react"
import "./headtail.css"
import { BiArrowBack } from "react-icons/bi"

export default function HeadAndTail({ redirect }) {
    let options = [
        { value: "default", label: "Select Value" },
        { value: "H", label: "H" },
        { value: "T", label: "T" },
    ]
    const [selected, setSelected] = useState(options[0].value)
    const [error, setError] = useState(false)
    const [array, setArray] = useState([])

    const handleChange = value => {
        setSelected(value)
    }
    const submit = () => {
        if (selected === "default") {
            setError(true)
        } else {
            if (array.length === 0) {
                setArray(prev => [...prev, [selected]])
            } else {
                let lastEl = array[array.length - 1]
                let lastVal = lastEl[lastEl.length - 1]
                // when last value is same as current value pushing to last row array
                if (lastVal === selected) {
                    setArray(prev => {
                        return [
                            ...prev.slice(0, prev?.length - 1),
                            [...prev[prev?.length - 1], selected],
                        ]
                    })
                }
                // if not same pushing new array with selected value
                else {
                    setArray(prev => [...prev, [selected]])
                }
            }
            if (error) setError(false)
            // setting to default value
            setSelected(options[0].value)
        }
    }

    return (
        <div className="headTailContainer">
            <div className="backContainer" onClick={redirect}>
                <BiArrowBack /> <span>Back</span>
            </div>
            <div className="topContainer">
                <select
                    value={selected}
                    onChange={e => handleChange(e.target.value)}
                    className="selectContainer"
                >
                    {options.map(option => (
                        <option className="option">{option.label}</option>
                    ))}
                </select>
                <button onClick={submit} className="btn">
                    Submit
                </button>
            </div>
            {array.length !== 0 &&
                <div className="displayContainer">
                    {array.map(val => (
                        <div className="row">
                            {val.map(x => (
                                <div className="column">{x}</div>
                            ))}
                        </div>
                    ))}
                </div>}
            {error && (
                <div className="error"> Please select value from dropdown.</div>
            )}
        </div>
    )
}
