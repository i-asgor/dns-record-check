<?php

$hostname = $_GET['hostname'];
$recordType = $_GET['recordType'];

$dnsRecords = dns_get_record($hostname, constant("DNS_" . strtoupper($recordType) . "_RECORD"));

header('Content-Type: application/json');
echo json_encode($dnsRecords);
