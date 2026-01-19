window.onload = function() {
    // Ambil elemen-elemen dari HTML
    const progressBar = document.getElementById('progress-bar');
    const percentageText = document.getElementById('percentage-text');
    const loadingScreen = document.getElementById('loading-screen');
    
    let width = 0; // Mulai dari 0%

    // Fungsi Interval: Jalan setiap 30 milidetik
    const interval = setInterval(() => {
        if (width >= 100) {
            // Jika sudah 100%
            clearInterval(interval); // Hentikan hitungan
            
            percentageText.innerText = "100%"; // Pastikan teks jadi 100%
            
            // Mulai efek menghilang (Fade Out)
            loadingScreen.style.opacity = '0';
            
            // Tunggu 1 detik (sesuai durasi transisi CSS) lalu hapus dari layar
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 1000);
            
        } else {
            // Jika belum 100%, tambah terus
            width++; 
            progressBar.style.width = width + '%';
            percentageText.innerText = width + '%';
        }
    }, 30); // Kecepatan loading (makin kecil angka = makin cepat)
};