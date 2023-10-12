const formatiarFecha = (fecha) => {
  try {
    const fechaSinHora = new Date(fecha).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    return fechaSinHora;
  } catch (error) {
    console.error('Error al analizar o formatear la fecha:', error);
    return ''; // Devuelve una cadena vacía o maneja el error según sea necesario
  }
};

export {
  formatiarFecha
};
