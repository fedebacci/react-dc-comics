export default function Alert ({ type, text, children }) {

    type = type?.trim() || 'danger';
    text = text?.trim() || 'Si è verificato un errore';

    return (
        <div className={`alert alert-${type}`}>
            { children || text }
        </div>
    );
}