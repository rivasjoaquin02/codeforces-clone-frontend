import "./Select.css";

interface Props {
    id?: string;
    title?: string;
    value: string;
    defaultValue?: string;
    handleChange: (value: any) => void;
    options: Array<{ value: string; label: string }>;
}

const Select = ({
    id,
    title = "Select",
    value,
    defaultValue,
    handleChange,
    options,
}: Props) => {
    return (
        <select
            id={id}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            className={`select border`}
        >
            <option value="">{title}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
