// Mostrar y ocultar el cuadro de chat
document.getElementById('openChat').addEventListener('click', () => {
    document.getElementById('chatBox').style.display = 'block';
});

document.getElementById('closeChat').addEventListener('click', () => {
    document.getElementById('chatBox').style.display = 'none';
});

// Redirigir a WhatsApp al hacer clic en "Enviar"
document.getElementById('sendMessage').addEventListener('click', () => {
    const message = encodeURIComponent(document.getElementById('chatMessage').textContent);
    const phoneNumber = '524493575845'; // Cambia este número al deseado
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
});
