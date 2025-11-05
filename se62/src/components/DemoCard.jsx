import React from "react";

export default function Democard() {

    return (
        <div className='card tw-shadow-md'>
            <div className='card-body'>
                <h5 className='tw-text-xl tw-font-semibold card-title'>este es un card</h5>
                <p className='card-text tw-text-sm'>aqui agrego una pequeña descripcion</p>

                <button className='btn btn-primary tw-mt-2' data-bs-toggle-"modal"
                 data-bs-target="#demoModal">
                   click para abrir
                </button>

                <div className='card tw-shadow-md' role='alert' aria-live="assertive" aria-atomic="true">
                    <div className='card-body'>
                        <div className='tw-text-xl tw-font-semibold card-title'>saludos</div>
                        <button className='' type="button" data-bs-disniss-"toast"
                        aria-label="close"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}