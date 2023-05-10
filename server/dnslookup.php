<?php
header("Access-Control-Allow-Origin: *");

header('Content-Type: application/json');
$hostname = $_GET['hostname'];
$recordType = $_GET['recordType'];
if ($hostname && $recordType) {
  $dnsRecords = dns_get_record($hostname, constant("DNS_$recordType"));
  echo json_encode($dnsRecords);
} else {
  echo json_encode([]);
}
?>
