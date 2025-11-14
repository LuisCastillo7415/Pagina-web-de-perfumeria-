<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conexion = new mysqli("localhost", "root", "", "perfumeria");

if ($conexion->connect_error) {
    die(json_encode(["error" => "Error de conexión a la base de datos."]));
}

// Verificar si se recibió la categoría por GET
$categoria = isset($_GET['categoria']) ? intval($_GET['categoria']) : 0;

// Si hay una categoría específica
if ($categoria > 0) {
    $sql = "SELECT * FROM perfumes WHERE idcategoria = $categoria";
} else {
    // Si no se envió, se obtienen todos
    $sql = "SELECT * FROM perfumes";
}

$resultado = $conexion->query($sql);

$perfumes = [];

while ($fila = $resultado->fetch_assoc()) {
    $fila['imagen'] = 'http://localhost/perfumeria/' . $fila['imagen'];
    $perfumes[] = $fila;
}

echo json_encode($perfumes);


?>