import React from "react";

function Gallery({ items }) {
    return (
        <section className="gallery">
            <h2>Galeri Produk</h2>
            <div className="gallery-grid">
                {items.map((item) => (
                    <div key={item.id} className="gallery-item">
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;