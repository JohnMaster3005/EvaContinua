$(document).ready(function () {
    $('#todo-form').on('submit', function (e) {
      e.preventDefault(); 
  
      const texto = $('#todo-input').val().trim(); 
  
      if (texto === '') {
        alert('Por favor ingresa un texto válido.');
        return;
      }
  
      
      const boton = $('<button>')
      .addClass('btn btn-success m-1')
      .text(texto)
      .on('click', function () {
        alert(`Botón presionado: ${texto}`);
      });
    
     
      const item = $('<li>').addClass('list-group-item').append(boton);
  
  
      $('#todo-list').append(item);
  
  
      $('#todo-input').val('');
    });
  });