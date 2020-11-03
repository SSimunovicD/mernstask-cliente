import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const Proyecto = ({ proyecto }) => {
    // Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    // Obtener la función del context de tarea
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas } = tareasContext;

    // Función para obtener el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id); // Fijas un proyecto actual
        obtenerTareas(id); // Filtrar las tareas cuando se de click
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => seleccionarProyecto(proyecto._id)}
            >{proyecto.nombre} </button>
        </li>
    )
}

export default Proyecto
