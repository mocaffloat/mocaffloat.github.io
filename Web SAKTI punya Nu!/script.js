document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    const name = document.getElementById('name').value; // Mengambil nilai input nama
    const email = document.getElementById('email').value; // Mengambil nilai input email
    const message = document.getElementById('message').value; // Mengambil nilai textarea pesan

    // Mengecek apakah input telah diisi
    if (name && email && message) {
        alert(`Thank you, ${name}. Your message has been sent!`); // Pesan sukses
        document.getElementById('contactForm').reset(); // Mengosongkan form setelah submit
    } else {
        alert('Please fill out all fields.'); // Pesan error jika ada yang kosong
    }
});
