<?php
header('Content-Type: application/json');
$conexion = new mysqli("localhost", "root", "", "perfumeria");

$resultado = $conexion->query("SELECT * FROM perfumes");
$perfumes = [];

while ($fila = $resultado->fetch_assoc()) {
    $perfumes[] = $fila;
}

echo json_encode($perfumes);
?>