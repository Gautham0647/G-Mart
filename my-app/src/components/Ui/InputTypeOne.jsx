export const InputTypeOne = (props) => {
	const {
		wrapperClassName,
		htmlFor,
		labelClassName,
		labelText,
		type,
		className,
		placeholder,
		name,
		onChange,
		value,
		defaultValue,
	} = props;
	
	return (
		<div className={wrapperClassName}>
			<label htmlFor={htmlFor} className={labelClassName}>
				{labelText}
			</label>
			<input
				value={value}
				defaultValue={defaultValue}
				name={name}
				type={type}
				className={className}
				placeholder={placeholder}
				onChange={onChange}
				required
			/>
		</div>
	);
};