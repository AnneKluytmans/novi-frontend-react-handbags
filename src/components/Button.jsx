function Button({ text, onClick, disabled }) {
    return (
        <button
        type="button"
        disabled={disabled}
        onClick={() => console.log({text})}
        >
            {text}
        </button>
    );
}

export default Button;