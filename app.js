document.getElementById("btnProduk").addEventListener("click", dapatkanProduk);

async function dapatkanProduk() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error("Gagal mendapatkan data");
        }

        const data = await response.json();

        console.log(data); // Sahkan struktur data

        let output = "";

        data.forEach(post => {
            output += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr>
            `;
        });

        document.getElementById("paparan").innerHTML = output;

    } catch (error) {
        console.error(error);
        document.getElementById("paparan").innerHTML =
            "<p>Ralat: Gagal mendapatkan data daripada API.</p>";
    }
}