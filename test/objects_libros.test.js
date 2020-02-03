const libro = require("./objects_libros").libro;
const reviews = require("./objects_libros").reviews;


test("Agrego review", () => {
	reviews.agregar("Juan", "muy buen libro", 5);
	expect(reviews.lista[0]).toStrictEqual({
		nombre: "Juan",
		review: "muy buen libro",
		valoracion: 5
	});
});																



test("constatar que mi valoración es entre 1 y 5", () => {
	expect(() => {
		reviews.agregar("Pedro", "horrible", 9);
	}).toThrow("La valoración es incorrecta.");
});


test("probar promedio", () => {
	reviews.agregar("Tamara", "muy lindo", 4);
	reviews.agregar("Manuel", "meh", 2);
	reviews.agregar("Waldo", "tremendoooo", 5);
	reviews.promediar(4)
});

test("pedir la info completa a través de getter", () => {
    expect(libro.infoLibro).toBe(`Demián fue escrito por Hermann Hesse en el año 1919. Su isbn es 0000`);
});