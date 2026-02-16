export default function RatingQuestion({
    name, question, min, max, minLabel, maxLabel, selectedValue
}: { name: string, question: string, min: number, max: number, minLabel: string, maxLabel: string, selectedValue?: string; }) {
    return (
        <fieldset className="border border-zinc-300 px-4 pt-3 pb-4">
            <legend className="px-2 text-lg font-medium">
                {question}
            </legend>

            <div className="flex items-center justify-between border-0 rounded-full bg-blue-50 px-4 py-2">
                <span className="text-sm text-zinc-800">{min} = {minLabel}</span>
                <div className="flex justify-between items-center space-x-13">
                    {Array.from({ length: max - min + 1 }, (_, i) => i + min).map((value) => (
                        <label key={value} className="flex flex-col items-center cursor-pointer space-y-2">
                            <span className="text-sm text-zinc-600">{value}</span>
                            <input
                                type="radio"
                                name={name}
                                value={value}
                                required={true}
                                defaultChecked={value.toString() === selectedValue}
                                className="w-4 h-4 text-blue-600 mb-1 cursor-pointer"
                            />
                        </label>
                    ))}
                </div>
                <span className="text-sm text-zinc-800">{max} = {maxLabel}</span>
            </div>
        </fieldset>
    );
}