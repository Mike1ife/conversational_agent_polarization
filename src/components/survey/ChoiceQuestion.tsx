export default function ChoiceQuestion({
    name,
    question,
    options,
    selectedValue
}: {
    name: string,
    question: string,
    options: string[],
    selectedValue?: string;
}) {
    return (
        <fieldset className="border border-zinc-300 px-4 pt-3 pb-4">
            <legend className="px-2 text-lg font-medium">
                {question}
            </legend>
            <div className="space-y-2 mt-2">
                {options.map((option, index) => (
                    <label key={index} className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="radio"
                            name={name}
                            value={option}
                            required={true}
                            defaultChecked={option === selectedValue}
                            className="w-4 h-4 text-blue-600"
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>
        </fieldset>
    );
}