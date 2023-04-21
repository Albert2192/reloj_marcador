<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");

include ("funciones.php");

$q = $_REQUEST['q'];

switch ($q) {
    case 'registrar':
        $ci = $_POST['ci'];

        if(empty($ci)){
            echo json_encode(['status'=>'error', 'mensaje'=>'No se pudo recibir los datos']);
            exit;
        }
        echo json_encode(['status'=>'success', 'mensaje'=>'Datos Recibidos']);
        break;
}
