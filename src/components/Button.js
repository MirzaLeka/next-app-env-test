const Button = ({ text }) => {

    const throwClickError = () => {
        throw new Error('Sentry did you catch this?!')
    }

    return (
        <button onClick={throwClickError}>{text}</button>
    )
}
export default Button;
