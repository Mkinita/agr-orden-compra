const formatiarFecha = fecha => {
    try {
      const nuevaFecha = new Date(fecha).toISOString().slice(0, 10);
      const opciones = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(nuevaFecha).toLocaleDateString('es-ES', opciones);
    } catch (error) {
      console.error('Error parsing or formatting date:', error);
      return ''; // Return an empty string or handle the error as needed
    }
  };
  
  export {
    formatiarFecha
  };
  