<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$data = json_decode(file_get_contents("php://input"));
logToFile('request.txt', 'request', $_POST);

$phonesList = explode(",", $data->phones);
if (count($phonesList) > 0 && $data->phones != "") {
  //var_dump($phonesList);
  foreach ($phonesList as $phone) {
    if ($phone != "") {
      $fields = "phone=" . $phone . "&s_name=" . $data->s_name . "&utm_send=cc&s_id=" . $data->s_id;
      if (isset($data->utm_medium)) {
        $fields .= "&utm_medium=" . $data->utm_medium;
      }

      if (isset($data->utm_source)) {
        $fields .= "&utm_source=" . $data->utm_source;
      }

      if (isset($data->utm_content)) {
        $fields .= "&utm_content=" . $data->utm_content;
      }

      if (isset($data->utm_term)) {
        $fields .= "&utm_term=" . $data->utm_term;
      }

      if (isset($data->utm_campaign)) {
        $fields .= "&utm_campaign=" . $data->utm_campaign;
      }
      $ch = curl_init();
      $url = 'https://api.g-n.ru/local/ajax/';
      curl_setopt($ch, CURLOPT_URL, $url);
      curl_setopt($ch, CURLOPT_POST, 1);
      curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
      curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));


      // receive server response ...
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

      $server_output = curl_exec($ch);
      file_put_contents("log.txt", $fields);

      curl_close($ch);
    }
  }
}


function logToFile($fileName, $varName, $data)
{
  $fp1 = fopen($fileName, 'a+');
  $text = "---------" . date("d.m.Y H:i:s") . "---------------\n";
  $text .= $varName . ":\n";
  $text .= print_r($data, true);
  $text .= "\n";
  fwrite($fp1, $text);
  fclose($fp1);
}
////
http_response_code(200);
exit;
