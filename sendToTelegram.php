<?php
$token = "7576353277:AAEaeYsp0IAcOkTiUgmgDbWjSDKIuZj-knE"; 
$chat_id = "5655390425";

$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';
$product = $_POST['product'] ?? '';

$message = "🛍️ Yangi buyurtma keldi:\n\n"
         . "👤 Ism: $name\n"
         . "📞 Telefon: $phone\n"
         . "📦 Mahsulot: $product";

$api_url = "https://api.telegram.org/bot$token/sendMessage";
$params = [
  'chat_id' => $chat_id,
  'text' => $message
];

$options = [
  'http' => [
    'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
    'method'  => 'POST',
    'content' => http_build_query($params)
  ]
];

$context  = stream_context_create($options);
$result = file_get_contents($api_url, false, $context);

if ($result) {
  echo "success";
} else {
  echo "error";
}
?>
