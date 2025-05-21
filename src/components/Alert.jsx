export default function Alert ({ type, text }) {

    type = type !== null && type !== undefined && type.length !== 0 ? type : 'danger';
    text = text !== null && text !== undefined && text.length !== 0 ? text : 'Si è verificato un errore';

    return (
        <div className="container">
            <div className={`alert alert-${type}`}>
                {text}
            </div>
        </div>
    );
}