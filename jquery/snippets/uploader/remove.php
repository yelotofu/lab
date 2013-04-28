<?php
$file = isset($_REQUEST['filepath']) ? $_REQUEST['filepath'] : '';

if (file_exists($file)) {
	
	unlink($file);

}