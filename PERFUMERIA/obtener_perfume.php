<?php
$conexion = new mysqli("localhost", "root", "", "perfumeria");

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

$sql = "SELECT * FROM perfumes WHERE idperfume = $id";
$resultado = $conexion->query($sql);

if ($fila = $resultado->fetch_assoc()) {
    $fila['imagen'] = 'http://localhost/perfumeria/' . $fila['imagen'];
    echo json_encode($fila);
} else {
    echo json_encode(["error" => "Perfume no encontrado"]);
}
?>