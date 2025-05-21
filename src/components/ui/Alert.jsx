export default function Alert ({ type, text, children }) {

    type = type !== null && type !== undefined && type.length !== 0 ? type : 'danger';
    if (!children) {
        text = text !== null && text !== undefined && text.length !== 0 ? text : 'Si è verificato un errore';
    } else {
        text = children;
    }

    return (
        <div className={`alert alert-${type}`}>
            {text}
        </div>
    );
}