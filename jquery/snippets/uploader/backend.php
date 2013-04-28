<?php
require_once ("FileUpload.class.php");

$data = array('response' => null, 'status' => null);
$folder = '/uploads/';

if (isset($_FILES)) {
	foreach ($_FILES as $file) {
		$upd = new FileUpload();
		$result = $upd->Put($file, dirname(__FILE__) . $folder );
		if ($result) {
			$data['response'] = array('filename' => basename($upd->GetFile(0)), 'url' => $folder . basename($upd->GetFile(0)), 'filepath' => $upd->GetFile(0));
		} else {
			$data['response'] = $upd->ShowErrors();
		}
		$data['status'] = ($result) ? 'OK' : 'ERROR';
	}
}
echo "[".json_encode($data)."]";