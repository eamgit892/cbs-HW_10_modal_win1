import './ModalDelete.css'

export const ModalDelete = ( {flag, del, quit} ) => {
    if (!flag) return null;

    return (
        <div className="modalDelete">
            <p>Still sure to delete record?</p>
            <div>
                <button onClick={del}>Yes</button>
                <button onClick={quit}>No</button>
            </div>
        </div>
    )
}